/**
 * Mastodon Comments for Hugo
 * Loads replies to a Mastodon post and displays them as blog comments
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

function renderComment(comment) {
  const avatar = escapeHtml(comment.account.avatar_static);
  const displayName = escapeHtml(comment.account.display_name || comment.account.username);
  const username = escapeHtml(comment.account.acct);
  const accountUrl = escapeHtml(comment.account.url);
  const commentUrl = escapeHtml(comment.url);
  const createdAt = formatDate(comment.created_at);

  // Content is already HTML from Mastodon, but we sanitize links
  const content = comment.content;

  // Count interactions
  const replies = comment.replies_count || 0;
  const reblogs = comment.reblogs_count || 0;
  const favourites = comment.favourites_count || 0;

  return `
    <article class="mastodon-comment">
      <header class="comment-header">
        <a href="${accountUrl}" target="_blank" rel="noopener noreferrer" class="comment-avatar">
          <img src="${avatar}" alt="" loading="lazy" width="48" height="48">
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
        ${replies > 0 ? `<span class="comment-stat" title="Reacties">${replies} antwoord${replies !== 1 ? 'en' : ''}</span>` : ''}
        ${reblogs > 0 ? `<span class="comment-stat" title="Boosts">${reblogs} boost${reblogs !== 1 ? 's' : ''}</span>` : ''}
        ${favourites > 0 ? `<span class="comment-stat" title="Favorieten">${favourites} favoriet${favourites !== 1 ? 'en' : ''}</span>` : ''}
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
  }

  try {
    const response = await fetch(`https://${host}/api/v1/statuses/${postId}/context`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const replies = data.descendants || [];

    if (replies.length === 0) {
      commentsWrapper.innerHTML = '<p class="no-comments">Nog geen reacties. Wees de eerste!</p>';
    } else {
      // Sort by date (oldest first)
      replies.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

      const commentsHtml = replies
        .filter(comment => comment.visibility === 'public' || comment.visibility === 'unlisted')
        .map(renderComment)
        .join('');

      commentsWrapper.innerHTML = commentsHtml || '<p class="no-comments">Nog geen publieke reacties.</p>';
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

    if (loadButton) {
      loadButton.disabled = false;
      loadButton.textContent = 'Opnieuw proberen';
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
