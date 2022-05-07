const langpos = 29;
var lang = window.location.href.substring(langpos,langpos+2);

function findAndDelete(el) {
     for (var i = el.children.length-1; i >= 0; i--) {
          var e = el.children[i];
          var nlang = e.children[0].text.toLowerCase();
          
          if(nlang === lang) el.removeChild(e);
          
          else if(nlang.length === 2) e.children[0].setAttribute("href", '/' + nlang + window.location.href.substring(langpos+2));
          
          else if(!(e.children[0].href.substring(langpos,langpos+2) === lang)) el.removeChild(e);
     }
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.substring(langpos+2,langpos+3) === '/') {findAndDelete(document.querySelector("#header > div.header-menu.header-menu--folder-list > div.header-menu-nav > nav > div > div.header-menu-nav-folder-content"));
                                                                     findAndDelete(document.querySelector("#header > div.header-announcement-bar-wrapper > div.header-inner.container--fluid.header-mobile-layout-logo-left-nav-right.header-layout-nav-left > div.header-display-desktop > div.header-title-nav-wrapper > div.header-nav > div > nav"));}
}, false);
