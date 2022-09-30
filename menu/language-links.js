const supportedLanguages = ['ru', 'ua', 'en', 'fr'];
const desktopSelector =
  "#header > div.header-announcement-bar-wrapper > div.header-inner.container--fluid.header-mobile-layout-logo-left-nav-right.header-layout-nav-left > div.header-display-desktop > div.header-title-nav-wrapper > div.header-nav > div > nav";
const mobileSelector =
  "#header > div.header-menu.header-menu--folder-list > div.header-menu-nav > nav > div > div.header-menu-nav-folder-content";

function UrlExists(url) {
        var http = new XMLHttpRequest();
        http.open('HEAD', url, false);
        http.send();
        if (http.status != 404)
            return true;
        else
            return false;
    }

function addPageIntoLinks(navLinksList, currentLanguage, page) {
  for(var i = 0; i < navLinksList.children.length; i++) {
    const child = navLinksList.children[i];
    const link = child.children[0];
    const linkLanguage = link.text.toLowerCase();
    const linkHref = "/" + linkLanguage + "/" + page;
    if (supportedLanguages.includes(linkLanguage) && linkLanguage !== currentLanguage)  {
      link.setAttribute("href", linkHref);
      setTimeout(()=>{
        if (!UrlExists(linkHref)) {
          link.removeAttribute("href");
          link.style.cursor = "default";
          link.style.color = "lightgray";
        }
      })
    }
  };
}

function updateLanguageSelectorUrls(currentLanguage, currentPage) {
  if (currentLanguage && currentPage) {
    [desktopSelector, mobileSelector].forEach((selector) => {
      const navLinks = document.querySelector(selector);
      if (navLinks) addPageIntoLinks(navLinks, currentLanguage, currentPage);
    });
  }
}

export { updateLanguageSelectorUrls };
