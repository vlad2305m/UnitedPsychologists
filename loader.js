import { setAppointmentButtonText } from 'https://vlad2305m.github.io/UnitedPsychologists/menu/appointment-button.js';
import { updateLanguageSelectorUrls } from 'https://vlad2305m.github.io/UnitedPsychologists/menu/language-links.js';
import { hideNavItems } from 'https://vlad2305m.github.io/UnitedPsychologists/menu/hide-nav-items.js';
import { transformLogo } from 'https://vlad2305m.github.io/UnitedPsychologists/menu/logo-button.js';
hide_nav_items_lock = true;
(function() {
  const languageMatch = window.location.href.match(/psyhelpworld.com\/(..)\/(.*)$/);
  const currentLanguage = languageMatch && languageMatch[1];
  const currentPage = languageMatch && languageMatch[2];

  document.addEventListener('DOMContentLoaded', function() {
    if (currentLanguage) {
      // language-aware appointment button and its link
      setAppointmentButtonText(currentLanguage);
      // make language links point to localized current page instead of /home
      updateLanguageSelectorUrls(currentLanguage, currentPage);
    }
    // hide navigation from other languages
    hideNavItems(currentLanguage);
    hide_nav_items_lock = false;
    transformLogo();
  }, false);
})();
