// Hides navigation elements leading to languages other than current
// Add into <head> for better performance

(function() {
  const supportedLanguages = ['ru', 'ua', 'en', 'fr'];
  const languageMatch = window.location.href.match(/psyhelpworld.com\/(..)\//);
  const currentLanguage = languageMatch && languageMatch[1];
  if (supportedLanguages.indexOf(currentLanguage) < 0) return;

  function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
  }

  function hideNavItems(languages, exceptThisLanguage) {
    const hideLanguages = languages.filter(lang => { return lang != exceptThisLanguage });
    const styles = hideLanguages.map(lang => {
      return `.header-nav-item--collection > [href*="/${lang}/"] {display: none}`
    }).join('\n');
    addStyle(styles);
  }

  hideNavItems(supportedLanguages, currentLanguage);
})();
