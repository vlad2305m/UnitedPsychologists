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

export fuction hideNavItems(language){ findAndDelete(document.querySelector("#header > div.header-menu.header-menu--folder-list > div.header-menu-nav > nav > div > div.header-menu-nav-folder-content"), language);
                             findAndDelete(document.querySelector("#header > div.header-announcement-bar-wrapper > div.header-inner.container--fluid.header-mobile-layout-logo-left-nav-right.header-layout-nav-left > div.header-display-desktop > div.header-title-nav-wrapper > div.header-nav > div > nav"), language);
  }
