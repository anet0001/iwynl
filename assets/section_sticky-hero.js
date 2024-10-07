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

    this.animateIn();
  }

  animateIn() {
    console.log(
      "select all the child elements with the data attribute of 'data-animate"
    );
    const elements = this.querySelectorAll("[data-animate]");

    gsap.to(this.querySelectorAll("[data-animate]"), {
      autoAlpha: 1,
      stagger: 0.1,
    });
  }

  disconnectedCallback() {
    console.log("Sticky Hero Unmounted");
  }
}

customElements.define("sticky-hero", StickyHero);
