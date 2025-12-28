/**
 * Mastodon Comments for Hugo
 * Loads replies to a Mastodon post and displays them as blog comments
 *
 * Security: Uses DOMPurify for HTML sanitization
 * Accessibility: ARIA live regions, proper alt text, semantic HTML
 */

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

/**
 * Announce message to screen readers via live region
 */
function announceToScreenReader(message) {
  const statusEl = document.getElementById('mastodon-comments-status');
  if (statusEl) {
    statusEl.textContent = message;
  }
}

/**
 * Sanitize HTML content using DOMPurify
 * Falls back to text content if DOMPurify is not available
 */
function sanitizeHtml(html) {
  if (typeof DOMPurify !== 'undefined') {
    return DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['p', 'br', 'a', 'span', 'strong', 'em', 'code', 'pre'],
      ALLOWED_ATTR: ['href', 'target', 'rel', 'class'],
      ADD_ATTR: ['target', 'rel'],
      FORCE_BODY: true
    });
  }
  // Fallback: strip all HTML
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || '';
}

function renderComment(comment, index, total) {
  const avatar = escapeHtml(comment.account.avatar_static);
  const displayName = escapeHtml(comment.account.display_name || comment.account.username);
  const username = escapeHtml(comment.account.acct);
  const accountUrl = escapeHtml(comment.account.url);
  const commentUrl = escapeHtml(comment.url);
  const createdAt = formatDate(comment.created_at);

  // Sanitize HTML content from Mastodon (security!)
  const content = sanitizeHtml(comment.content);

  // Count interactions
  const replies = comment.replies_count || 0;
  const reblogs = comment.reblogs_count || 0;
  const favourites = comment.favourites_count || 0;

  return `
    <article class="mastodon-comment" role="article" aria-posinset="${index + 1}" aria-setsize="${total}">
      <header class="comment-header">
        <a href="${accountUrl}" target="_blank" rel="noopener noreferrer" class="comment-avatar">
          <img src="${avatar}" alt="Profielfoto van ${displayName}" loading="lazy" width="48" height="48">
        </a>
        <div class="comment-meta">
          <a href="${accountUrl}" target="_blank" rel="noopener noreferrer" class="comment-author">
            <strong>${displayName}</strong>
            <span class="comment-username">@${username}</span>
          </a>
          <a href="${commentUrl}" target="_blank" rel="noopener noreferrer" class="comment-date">
            <time datetime="${comment.created_at}">${createdAt}</time>
          </a>
        </div>
      </header>
      <div class="comment-content">
        ${content}
      </div>
      ${(replies > 0 || reblogs > 0 || favourites > 0) ? `
      <footer class="comment-footer">
        ${replies > 0 ? `<span class="comment-stat"><span class="sr-only">Aantal reacties: </span>${replies} antwoord${replies !== 1 ? 'en' : ''}</span>` : ''}
        ${reblogs > 0 ? `<span class="comment-stat"><span class="sr-only">Aantal boosts: </span>${reblogs} boost${reblogs !== 1 ? 's' : ''}</span>` : ''}
        ${favourites > 0 ? `<span class="comment-stat"><span class="sr-only">Aantal favorieten: </span>${favourites} favoriet${favourites !== 1 ? 'en' : ''}</span>` : ''}
      </footer>
      ` : ''}
    </article>
  `;
}

async function loadMastodonComments(host, postId) {
  const commentsWrapper = document.getElementById('mastodon-comments-wrapper');
  const loadButton = document.getElementById('load-mastodon-comments');

  if (!commentsWrapper) return;

  // Show loading state
  if (loadButton) {
    loadButton.disabled = true;
    loadButton.textContent = 'Laden...';
    loadButton.setAttribute('aria-busy', 'true');
  }

  // Announce to screen readers
  announceToScreenReader('Reacties worden geladen...');

  try {
    const response = await fetch(`https://${host}/api/v1/statuses/${postId}/context`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const allReplies = data.descendants || [];

    // Filter to public/unlisted comments only
    const replies = allReplies.filter(
      comment => comment.visibility === 'public' || comment.visibility === 'unlisted'
    );

    if (replies.length === 0) {
      commentsWrapper.innerHTML = '<p class="no-comments">Nog geen reacties. Wees de eerste!</p>';
      announceToScreenReader('Nog geen reacties gevonden.');
    } else {
      // Sort by date (oldest first)
      replies.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

      const totalComments = replies.length;
      const commentsHtml = replies
        .map((comment, index) => renderComment(comment, index, totalComments))
        .join('');

      commentsWrapper.innerHTML = commentsHtml;

      // Announce to screen readers
      const plural = totalComments === 1 ? 'reactie' : 'reacties';
      announceToScreenReader(`${totalComments} ${plural} geladen.`);
    }

    // Hide the load button after successful load
    if (loadButton) {
      loadButton.style.display = 'none';
    }

  } catch (error) {
    console.error('Error loading Mastodon comments:', error);
    commentsWrapper.innerHTML = `
      <p class="comments-error">
        Kon reacties niet laden.
        <a href="https://${host}/web/statuses/${postId}" target="_blank" rel="noopener noreferrer">
          Bekijk ze op Mastodon
        </a>
      </p>
    `;

    // Announce error to screen readers
    announceToScreenReader('Kon reacties niet laden.');

    if (loadButton) {
      loadButton.disabled = false;
      loadButton.textContent = 'Opnieuw proberen';
      loadButton.removeAttribute('aria-busy');
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  const loadButton = document.getElementById('load-mastodon-comments');
  if (loadButton) {
    loadButton.addEventListener('click', function() {
      const host = this.dataset.host;
      const postId = this.dataset.postId;
      loadMastodonComments(host, postId);
    });
  }
});
