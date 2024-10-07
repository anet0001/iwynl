class App {
  constructor() {
    console.log("App Mounted");
    this.initLenis();
  }

  initLenis() {
    window.scrollTo(0, 0);
    this.lenis = new Lenis({
      easing: (x) => {
        return -(Math.cos(Math.PI * x) - 1) / 2;
      },
    });

    this.raf = this.raf.bind(this);
    requestAnimationFrame(this.raf);
  }

  raf(time) {
    this.lenis.raf(time);
    requestAnimationFrame(this.raf);
  }

  suspendScroll() {
    this.lenis.stop();
  }

  resumeScroll() {
    this.lenis.start();
  }
}

new App();
