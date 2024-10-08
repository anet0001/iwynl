class StickyHero extends HTMLElement {
  constructor() {
    super();
    this.columns;
  }

  connectedCallback() {
    this.columns = this.children
      ? this.children[0].getAttribute("data-columns")
      : 0;

    if (this.columns) {
      this.children[0].style.setProperty("--columns", this.columns);
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
