// Preview banner — only shows on preview/dev hostnames, automatically hides on production.
// When the site goes live on topflightperformance.com (or topflightperformance1.com),
// this does nothing. On pages.dev / netlify.app / localhost / file:// it shows a badge.
(function () {
  var host = (window.location.hostname || '').toLowerCase();
  var productionHosts = [
    'topflightperformance.com',
    'www.topflightperformance.com',
    'topflightperformance1.com',
    'www.topflightperformance1.com'
  ];
  if (productionHosts.indexOf(host) !== -1) return;

  var badge = document.createElement('div');
  badge.id = 'tfp-preview-badge';
  badge.setAttribute(
    'style',
    [
      'position:fixed',
      'bottom:16px',
      'right:16px',
      'background:rgba(200,16,46,0.95)',
      'color:#ffffff',
      'padding:10px 16px',
      'border-radius:999px',
      'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',
      'font-size:11px',
      'font-weight:700',
      'letter-spacing:1.5px',
      'text-transform:uppercase',
      'z-index:99999',
      'box-shadow:0 4px 14px rgba(0,0,0,0.35), 0 0 0 2px rgba(255,255,255,0.15) inset',
      'pointer-events:auto',
      'cursor:default',
      'user-select:none'
    ].join(';')
  );
  badge.textContent = 'Preview · Not Live';

  function addBadge() {
    if (document.body) document.body.appendChild(badge);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addBadge);
  } else {
    addBadge();
  }
})();
