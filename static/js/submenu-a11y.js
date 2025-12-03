/**
 * Accessible Dropdown Menu Navigation
 * Keyboard support: Enter/Space to toggle, Escape to close, Arrow keys to navigate
 */
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.submenu-toggle');
    const submenu = document.getElementById('blog-submenu');
    
    if (!toggleButton || !submenu) return;

    // Initially hide submenu
    submenu.setAttribute('aria-hidden', 'true');

    // Toggle submenu on button click
    toggleButton.addEventListener('click', function(e) {
      e.preventDefault();
      toggleSubmenu();
    });

    // Keyboard navigation for toggle button
    toggleButton.addEventListener('keydown', function(e) {
      switch(e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault();
          toggleSubmenu();
          if (toggleButton.getAttribute('aria-expanded') === 'true') {
            // Focus first menu item
            const firstItem = submenu.querySelector('a');
            if (firstItem) firstItem.focus();
          }
          break;
        case 'Escape':
          closeSubmenu();
          toggleButton.focus();
          break;
        case 'ArrowDown':
          e.preventDefault();
          if (toggleButton.getAttribute('aria-expanded') !== 'true') {
            toggleSubmenu();
          }
          const firstItem = submenu.querySelector('a');
          if (firstItem) firstItem.focus();
          break;
      }
    });

    // Keyboard navigation within submenu
    submenu.addEventListener('keydown', function(e) {
      const items = Array.from(submenu.querySelectorAll('a'));
      const currentIndex = items.indexOf(document.activeElement);

      switch(e.key) {
        case 'Escape':
          e.preventDefault();
          closeSubmenu();
          toggleButton.focus();
          break;
        case 'ArrowDown':
          e.preventDefault();
          if (currentIndex < items.length - 1) {
            items[currentIndex + 1].focus();
          } else {
            items[0].focus(); // Wrap to first
          }
          break;
        case 'ArrowUp':
          e.preventDefault();
          if (currentIndex > 0) {
            items[currentIndex - 1].focus();
          } else {
            items[items.length - 1].focus(); // Wrap to last
          }
          break;
        case 'Home':
          e.preventDefault();
          items[0].focus();
          break;
        case 'End':
          e.preventDefault();
          items[items.length - 1].focus();
          break;
        case 'Tab':
          // Allow natural tab, but close menu after last item
          if (!e.shiftKey && currentIndex === items.length - 1) {
            closeSubmenu();
          }
          if (e.shiftKey && currentIndex === 0) {
            closeSubmenu();
          }
          break;
      }
    });

    // Close submenu when clicking outside
    document.addEventListener('click', function(e) {
      if (!toggleButton.contains(e.target) && !submenu.contains(e.target)) {
        closeSubmenu();
      }
    });

    // Close on focus outside
    document.addEventListener('focusin', function(e) {
      const hasSubmenu = document.querySelector('.has-submenu');
      if (hasSubmenu && !hasSubmenu.contains(e.target)) {
        closeSubmenu();
      }
    });

    function toggleSubmenu() {
      const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
      toggleButton.setAttribute('aria-expanded', !isExpanded);
      submenu.setAttribute('aria-hidden', isExpanded);
    }

    function closeSubmenu() {
      toggleButton.setAttribute('aria-expanded', 'false');
      submenu.setAttribute('aria-hidden', 'true');
    }
  });
})();
