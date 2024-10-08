class StickyHero extends HTMLElement {
  constructor() {
    super();
    this.columns;
    this.animation;
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

    if (window.matchMedia("(hover: hover)").matches) {
      this.enableHoverEffects();
    } else {
      this.enableTouchEffects();
    }
  }

  enableHoverEffects() {
    const items = this.querySelectorAll(".sticky-hero__item span");
    items.forEach((item) => {
      item.addEventListener("mouseover", () => {
        const sup = item.nextElementSibling;
        const image = item.nextElementSibling.nextElementSibling;
        if (sup) sup.style.opacity = 1;
        if (image) image.style.opacity = 1;
      });

      item.addEventListener("mouseout", () => {
        const sup = item.nextElementSibling;
        const image = item.nextElementSibling.nextElementSibling;
        if (sup) sup.style.opacity = 0;
        if (image) image.style.opacity = 0;
      });
    });
  }

  enableTouchEffects() {
    // const items = this.querySelectorAll(".sticky-hero__item");
    // const totalItems = items.length;
    // const showNextItem = () => {
    //   items.forEach((item, index) => {
    //     if (index === this.currentIndex) {
    //       item.style.visibility = "visible";
    //       item.style.opacity = 1;
    //     } else {
    //       item.style.visibility = "hidden";
    //       item.style.opacity = 0;
    //     }
    //   });
    //   this.currentIndex = (this.currentIndex + 1) % totalItems;
    // };
    // showNextItem();
    // setInterval(showNextItem, 2000);
  }

  animateIn() {
    if (this.animation === "fade-in") {
      const items = this.querySelectorAll(".sticky-hero__item");
      items.forEach((item, index) => {
        setTimeout(() => {
          item.style.visibility = "visible";
          item.style.opacity = 1;
        }, index * 100);
      });
    }
  }
}

if (!customElements.get("sticky-hero")) {
  customElements.define("sticky-hero", StickyHero);
}
