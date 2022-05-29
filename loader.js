import { setAppointmentButtonText } from 'https://vlad2305m.github.io/UnitedPsychologists/appointment-button.js';
import { updateLanguageSelectorUrls } from 'https://vlad2305m.github.io/UnitedPsychologists/language-links.js';

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
  }, false);  
})();
