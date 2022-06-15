function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.children[0];
}

function transformLogo() {
  const container = document.querySelector("#header > div.header-announcement-bar-wrapper > div.header-inner.container--fluid.header-mobile-layout-logo-left-nav-right.header-layout-nav-left > div.header-display-desktop > div.header-title-nav-wrapper > div.header-title > div");
  container.style.display = "flex"; container.style.flexDirection = "column"; container.style.pointerEvents = "none";
  const logo = container.children[0]; logo.style.height = 0; logo.style.pointerEvents = "none";
  const logoImg = logo.children[0]; logoImg.style.pointerEvents = "none";
  container.appendChild(htmlToElement(`
                      <a style="pointer-events: none;">
                          <svg height="150" width="150">
                              <a xlink:href="/" style="pointer-events: auto;">
                                  <circle r="75" cx="75" cy="75" fill="transparent"></circle>
                              </a>
                          </svg>
                      </a>
  `));
}
export { transformLogo };
