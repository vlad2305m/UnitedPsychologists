// Hides navigation elements leading to languages other than current
var langpos = 29;
function findAndDelete(el, language) {
  for (var i = el.children.length-1; i >= 0; i--) {
       var e = el.children[i];
       var nlang = e.children[0].text.toLowerCase();
       
       //if(nlang.length === 2 && !(nlang === language)) e.children[0].setAttribute("href", '/' + nlang + window.location.href.substring(langpos+2));
       
       if(nlang === language || !(e.children[0].href.substring(langpos,langpos+2) === language)) e.style.display = "none";
  }
}

fuction hideNavItems(language){ findAndDelete(document.querySelector("#header > div.header-menu.header-menu--folder-list > div.header-menu-nav > nav > div > div.header-menu-nav-folder-content"), language);
                             findAndDelete(document.querySelector("#header > div.header-announcement-bar-wrapper > div.header-inner.container--fluid.header-mobile-layout-logo-left-nav-right.header-layout-nav-left > div.header-display-desktop > div.header-title-nav-wrapper > div.header-nav > div > nav"), language);
  }
export { hideNavItems };


/*
<script>
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
  const styles = hideIndexes.map(i => {
    return `.header-nav-item:nth-child(${i}), .header-menu-nav-item:nth-child(${i}) {display: none}`
  }).join('\n');

  addStyle(styles);
})();
</script>
*/
