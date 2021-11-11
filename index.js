class ReactiveComponent extends HTMLElement {
  get text() {
    return this._text;
  }

  set text(value) {
    this._text = value;
    this.render();
  }

  constructor() {
    super();
    this.text = "Text";
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    console.log("bye bye");
  }

  render() {
    this.innerHTML = `
      <style>
        h1 {
          color: yellow;
        }
        p {
          color: blue;
        }
      </style>
      <p>${this.text}</p>
    `;
  }
}
customElements.define("reactive-component", ReactiveComponent);
