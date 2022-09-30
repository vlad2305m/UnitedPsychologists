import { setAppointmentButtonText } from 'https://vlad2305m.github.io/UnitedPsychologists/menu/appointment-button.js';
import { setFeedbackButtonText } from 'https://vlad2305m.github.io/UnitedPsychologists/menu/feedback-button.js';
import { updateLanguageSelectorUrls } from 'https://vlad2305m.github.io/UnitedPsychologists/menu/language-links.js';
import { hideNavItems } from 'https://vlad2305m.github.io/UnitedPsychologists/menu/hide-nav-items.js';
import { transformLogo } from 'https://vlad2305m.github.io/UnitedPsychologists/menu/logo-button.js';
hide_nav_items_lock = true;
(function() {
  const languageMatch = window.location.href.match(/psyhelpworld.com\/(..)\/(.*)$/);
  const currentLanguage = languageMatch && languageMatch[1];
  const currentPage = languageMatch && languageMatch[2];
  const sqDevEnv = window.location.href.substring(8,42) === 'haddock-porcupine-52xe.squarespace';

  document.addEventListener('DOMContentLoaded', function() {
    if (currentLanguage) {
      // language-aware appointment button and its link
      setAppointmentButtonText(currentLanguage);
      // language-aware feedback button and its link
      setFeedbackButtonText(currentLanguage);
      // make language links point to localized current page instead of /home
      updateLanguageSelectorUrls(currentLanguage, currentPage);
    }
    // hide navigation from other languages
    hideNavItems(currentLanguage);
    hide_nav_items_lock = false;
    //Show menu faster
    const headerNavigationSelector = "#header > div.header-announcement-bar-wrapper > div.header-inner.container--fluid.header-mobile-layout-logo-left-nav-right.header-layout-nav-left > div.header-display-desktop > div.header-title-nav-wrapper > div.header-nav > div > nav";
    document.querySelector(headerNavigationSelector).style.display = "inline-flex";
    
    transformLogo();
    // Squash section background
    if (!sqDevEnv) {
      const imgcc = document.querySelector("#sections > section.page-section.layout-engine-section.background-width--full-bleed.section-height--custom.horizontal-alignment--left.vertical-alignment--middle.has-background.black > div > div > img");
      if (imgcc){
        const img = imgcc.parentElement.parentElement.parentElement;
        img.style.minHeight = 0;
        img.children[1].style.display = "none";
      }
      const imgcc = document.querySelector("#sections > section.page-section.layout-engine-section.background-width--full-bleed.section-height--custom.horizontal-alignment--left.vertical-alignment--middle.has-background.black > div > img");
      if (imgcc){
        const img = imgcc.parentElement.parentElement;
        img.style.minHeight = 0;
        img.children[1].style.display = "none";
      }
    }
  }, false);
})();
