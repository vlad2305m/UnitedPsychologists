// Hides navigation elements leading to languages other than specified

function hideNavItems(exceptLanguage) {
  const languages = ['ru', 'ua', 'en', 'fr'];
  if (languages.indexOf(exceptLanguage) < 0) return;

  function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
  }

  const hideLanguages = languages.filter(lang => { return lang != exceptLanguage });
  const styles = hideLanguages.map(lang => {
    return `.header-nav-item--collection > [href*="/${lang}/"] {display: none}`
  }).join('\n');

  addStyle(styles);
}

const languageMatch = window.location.href.match(/psyhelpworld.com\/(..)\//);
hideNavItems(languageMatch && languageMatch[1]);
