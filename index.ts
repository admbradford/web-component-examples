export default class MyFirstComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "closed" });
    const container = document.createElement("div");
    const contentSpan = document.createElement("span");
    contentSpan.innerText = "Hello from inside the shadow root!";
    container.appendChild(contentSpan);
    shadow.appendChild(container);
  }
}

console.log("Class Loaded", MyFirstComponent);
window.customElements.define("my-first-component", MyFirstComponent);
