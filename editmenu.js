const langpos = 29;
var lang = window.location.href.substring(langpos,langpos+2);
function findAndDelete(el) {
     for (var i = el.children.length-1; i >= 0; i--) {
         var e = el.children[i];
         if(e.children[0].text.toLowerCase() === lang){
             el.removeChild(e);
         } else if(e.children[0].text.length === 2) {
             var nlang = e.children[0].text.toLowerCase();
             var nref = '/' + nlang + window.location.href.substring(langpos+2);
             e.children[0].setAttribute("href", nref);
         } else if(!(e.children[0].href.substring(29,31) === lang)) {
             el.removeChild(e);
         }
     }
}
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.substring(langpos+2,langpos+3) === '/') {findAndDelete(document.querySelector("#header > div.header-menu.header-menu--folder-list > div.header-menu-nav > nav > div > div.header-menu-nav-folder-content"));
                                                                     findAndDelete(document.querySelector("#header > div.header-announcement-bar-wrapper > div.header-inner.container--fluid.header-mobile-layout-logo-left-nav-right.header-layout-nav-left > div.header-display-desktop > div.header-title-nav-wrapper > div.header-nav > div > nav"));}
    setTimeout(() => {if (window.location.href.includes("ru")) {document.querySelector("#header > div.header-announcement-bar-wrapper > div.header-inner.container--fluid.header-mobile-layout-logo-left-nav-right.header-layout-nav-left > div.header-display-desktop > div.header-actions.header-actions--right > div.header-actions-action.header-actions-action--cta > a").innerText = "Записаться на консультацию";
                                                               setTimeout(() => {document.querySelector("#header > div.header-menu.header-menu--folder-list > div.header-menu-nav > nav > div > div.header-menu-cta > a").innerText = "Записаться на консультацию";}, 2000);}})
    setTimeout(() => {if (window.location.href.includes("ua")) {document.querySelector("#header > div.header-announcement-bar-wrapper > div.header-inner.container--fluid.header-mobile-layout-logo-left-nav-right.header-layout-nav-left > div.header-display-desktop > div.header-actions.header-actions--right > div.header-actions-action.header-actions-action--cta > a").innerText = "Записатися на консультацію";
                                                               setTimeout(() => {document.querySelector("#header > div.header-menu.header-menu--folder-list > div.header-menu-nav > nav > div > div.header-menu-cta > a").innerText = "Записатися на консультацію";}, 2000);}})
}, false);
