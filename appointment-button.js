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

export function setAppointmentButtonText(language) {
  setTimeout(() => {
    [desktopSelector, mobileSelector].forEach((selector) => {
      const button = document.querySelector(selector);
      const newText = buttonText[language];
      if (button && newText) button.innerText = newText;
    });
  });
}
