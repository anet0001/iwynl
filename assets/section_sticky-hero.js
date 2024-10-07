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

    this.animation = this.getAttribute("data-animation") || "fade-in";

    this.animateIn();
  }

  animateIn() {
    if (this.animation === "fade-in") {
      gsap.to(this.querySelectorAll("[data-animate]"), {
        autoAlpha: 1,
        ease: "power2.out",
        stagger: {
          each: 0.1,
          from: "random",
        },
      });
    } else {
      gsap.from(this.querySelectorAll("[data-animate]"), {
        autoAlpha: 0,
        yPercent: 15,
        ease: "power2.out",
        stagger: {
          each: 0.1,
          from: "random",
        },
      });
    }
  }

  disconnectedCallback() {
    console.log("Sticky Hero Unmounted");
  }
}

customElements.define("sticky-hero", StickyHero);
