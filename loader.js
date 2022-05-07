import { setAppointmentButtonText } from 'https://vlad2305m.github.io/UnitedPsychologists/appointment-button.js';

const langpos = 29;
var language = window.location.href.substring(langpos, langpos+2);

function findAndDelete(el) {
  for (var i = el.children.length-1; i >= 0; i--) {
       var e = el.children[i];
       var nlang = e.children[0].text.toLowerCase();
       
       if(nlang.length === 2 && !(nlang === language)) e.children[0].setAttribute("href", '/' + nlang + window.location.href.substring(langpos+2));
       
       else if(nlang === language || !(e.children[0].href.substring(langpos,langpos+2) === language)) e.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  if (window.location.href.substring(langpos+2,langpos+3) === '/') {findAndDelete(document.querySelector("#header > div.header-menu.header-menu--folder-list > div.header-menu-nav > nav > div > div.header-menu-nav-folder-content"));
                                                                  findAndDelete(document.querySelector("#header > div.header-announcement-bar-wrapper > div.header-inner.container--fluid.header-mobile-layout-logo-left-nav-right.header-layout-nav-left > div.header-display-desktop > div.header-title-nav-wrapper > div.header-nav > div > nav"));}
  setAppointmentButtonText(language);
}, false);
