// Hides navigation elements leading to languages other than current
// Add into <head> for better performance

(function() {
  const itemsToHide = {
    'ua': [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    'ru': [1, 2, 3, 4, 9, 10, 11, 12, 13, 14, 16],
    'en': [1, 2, 3, 4, 5, 6, 7, 8, 12, 13, 14, 17],
    'fr': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 18]
  };

  const languageMatch = window.location.href.match(/psyhelpworld.com\/(..)\//);
  const exceptThisLanguage = languageMatch && languageMatch[1];
  if (!itemsToHide[exceptThisLanguage]) return;

  function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
  }

  const hideIndexes = itemsToHide[exceptThisLanguage];
  console.log(hideIndexes);
  const styles = hideIndexes.map(i => {
    return `.header-nav-item:nth-child(${i}), .header-menu-nav-item:nth-child(${i}) {display: none}`
  }).join('\n');

  console.log(styles);
  addStyle(styles);
})();
