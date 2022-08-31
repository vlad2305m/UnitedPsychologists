const buttonActionsPerLanguage = {
        'ru' : {
            'text': 'оставить отзыв',
            'link': 'https://docs.google.com/forms/d/e/1FAIpQLSdySu3aCHJdd_aB77lwpiBlWDz9OLKgjg3vOGw4o6fk3PhmYA/viewform?usp=sf_link'
        },
        'ua' : {
            'text': 'залишити відгук',
            'link': 'https://docs.google.com/forms/d/e/1FAIpQLSfJ6_69NqWGPgwp__ghnls4LX-IuJwmyE7rX1jTg617UWtPpg/viewform?usp=sf_link'
        }
    }

const desktopSelector =
  "#footer-sections div.content-wrapper > div.content div.button-block";
const mobileSelector =
  "";//"#header > div.header-menu.header-menu--folder-list > div.header-menu-nav > nav > div > div.header-menu-cta > a";
function setFeedbackButtonText(language) {
  [desktopSelector].forEach((selector) => {
    const buttonDiv = document.querySelector(selector);
    const langSupported = language in buttonActionsPerLanguage;
    if (!langSupported) {
        buttonDiv.style.display = "none";
            return;
    }
    const button = document.querySelector(selector + " div.sqs-block-button-container--center > a.sqs-block-button-element");
    let buttonSettings = buttonActionsPerLanguage[language];
    if (language === "en" || language === "fr") button.style.display = "none";
    button.setAttribute('href', buttonSettings['link']);
    button.innerText = buttonSettings['text'];
  });
}

export { setFeedbackButtonText };

/* backup
function changeReviewButtonAction() {
    const buttonActionsPerLanguage = {
        'ru' : {
            'text': 'оставить отзыв',
            'link': 'https://docs.google.com/forms/d/e/1FAIpQLSdySu3aCHJdd_aB77lwpiBlWDz9OLKgjg3vOGw4o6fk3PhmYA/viewform?usp=sf_link'
        },
        'ua' : {
            'text': 'залишити відгук',
            'link': 'https://docs.google.com/forms/d/e/1FAIpQLSfJ6_69NqWGPgwp__ghnls4LX-IuJwmyE7rX1jTg617UWtPpg/viewform?usp=sf_link'
        },
        'en': null,
        'fr': null,
    }

    const pathParts = window.location.pathname.split("/").filter(n => n);

    if (pathParts.length < 1 ) {
        return
    }
    const currentLanguage = pathParts[0].toLowerCase();

    const langSupported = currentLanguage in buttonActionsPerLanguage
    if (!langSupported) {
        return
    }
    let buttonSettings = buttonActionsPerLanguage[currentLanguage]

    //
    const buttonDiv = "footer#footer-sections div.content-wrapper > div.content div.button-block"
    if (buttonSettings == null) {
        document.querySelector(buttonDiv).remove();
        return
    }

    const buttonSelector = buttonDiv + " div.sqs-block-button-container--center > a.sqs-block-button-element"
    document.querySelector(buttonSelector).setAttribute('href', buttonSettings['link']);
    document.querySelector(buttonSelector).innerHTML = buttonSettings['text'];
}
  document.addEventListener('DOMContentLoaded', function () {changeReviewButtonAction()}, false);
*/
