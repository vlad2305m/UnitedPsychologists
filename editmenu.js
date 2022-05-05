const langpos = 29;
var lang = window.location.href.substring(langpos,langpos+2);
function findAndDelete(el) {
    el.children.forEach((e) => {findAndDelete(e);})
    if(el.className === 'header-nav-list' || el.className === 'header-menu-nav-folder-content') {
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
}
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.substring(langpos+2,langpos+3) === '/') document.children.forEach((el) => {findAndDelete(el)});
}, false);
