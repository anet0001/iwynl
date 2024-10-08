class ImageWithText extends HTMLElement {
  constructor() {
    super();
    console.log("Image With Text Mounted");
  }
}

if (!customElements.get("image-with-text")) {
  customElements.define("image-with-text", ImageWithText);
}
