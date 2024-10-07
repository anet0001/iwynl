class SectionHeader extends HTMLElement {
  constructor() {
    super();
  }

  disconnectedCallback() {
    console.log("Section Header Unmounted");
  }
}

customElements.define("section-header", SectionHeader);
