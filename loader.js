import { setAppointmentButtonText } from 'https://vlad2305m.github.io/UnitedPsychologists/appointment-button.js';

const langpos = 29;
var language = window.location.href.substring(langpos, langpos+2);

document.addEventListener('DOMContentLoaded', function() {
  setAppointmentButtonText(language);
}, false);
