class StickyHero extends HTMLElement {
  constructor() {
    super();
    this.columns;
    this.gap;
  }

  connectedCallback() {
    this.columns = this.children
      ? this.children[0].getAttribute("data-columns")
      : 0;

    if (this.columns) {
      this.children[0].style.setProperty("--columns", this.columns);
    }

    this.gap = this.children
      ? this.children[0].getAttribute("data-gap")
      : "1rem";

    if (this.gap) {
      this.children[0].style.setProperty("--gap", this.gap);
    }

    console.log("Sticky Hero Mounted");
  }

  disconnectedCallback() {
    console.log("Sticky Hero Unmounted");
  }
}

customElements.define("sticky-hero", StickyHero);
