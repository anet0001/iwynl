class NavigationHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.toggle = this.querySelector("navigation-header .menu-toggle");
    this.menu = this.querySelector("navigation-header .menu");
    this.overlay = this.querySelector("navigation-header .menu .overlay");

    console.log("toggle: ", this.toggle);
    this.addEventListeners();
  }

  toggleMenu() {
    this.menu.classList.toggle("open");
    this.toggle.classList.toggle("open");

    const text = this.menu.classList.contains("open")
      ? "data-close-text"
      : "data-open-text";

    this.toggleText = this.toggle.querySelector("span");
    this.toggleText.innerHTML = `<sup>${
      this.toggle.getAttribute(text).split(" ")[0]
    }</sup>${this.toggle.getAttribute(text).split(" ")[1]}`;
  }

  addEventListeners() {
    this.toggle.addEventListener("click", this.toggleMenu.bind(this));
    this.overlay.addEventListener("click", this.toggleMenu.bind(this));
  }

  disconnectedCallback() {
    console.log("Section Header Unmounted");
  }
}

customElements.define("navigation-header", NavigationHeader);
