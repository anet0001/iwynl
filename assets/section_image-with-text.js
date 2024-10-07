class ImageWithText extends HTMLElement {
  constructor() {
    super();
    console.log("Image With Text Mounted");
  }
}

customElements.define("image-with-text", ImageWithText);
