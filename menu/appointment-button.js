const buttonText = {
  ru: "Записаться на консультацию",
  ua: "Записатися на консультацію",
  en: "Make an appointment",
  fr: "Lien vers le formulaire",
};

const desktopSelector =
  "#header > div.header-announcement-bar-wrapper > div.header-inner.container--fluid.header-mobile-layout-logo-left-nav-right.header-layout-nav-left > div.header-display-desktop > div.header-actions.header-actions--right > div.header-actions-action.header-actions-action--cta > a";
const mobileSelector =
  "#header > div.header-menu.header-menu--folder-list > div.header-menu-nav > nav > div > div.header-menu-cta > a";

function setAppointmentButtonText(language) {
  [desktopSelector, mobileSelector].forEach((selector) => {
    const button = document.querySelector(selector);
    if (language === "en" || language === "fr") button.style.display = "none";
    if (language === "ua") button.setAttribute("href", "https://forms.gle/PrSxZjkyuGxLspHG7")
    const newText = buttonText[language];
    if (button && newText) button.innerText = newText;
  });
}

export { setAppointmentButtonText };
