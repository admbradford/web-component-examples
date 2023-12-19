import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  Button,
  ThemeProvider,
  sproutLightTheme,
  Badge,
} from "@sproutsocial/racine";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={sproutLightTheme}>
        <Button size="large" onClick={() => console.log("Clicked!")}>
          Click me
        </Button>
        <Badge>This is a badge</Badge>
      </ThemeProvider>
    </div>
  );
};

export default class MyFirstComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "closed" });
    const container = document.createElement("div");
    const contentSpan = document.createElement("span");
    contentSpan.innerText = "Hello from inside the shadow root!";
    contentSpan.setAttribute("id", "app-root");
    container.appendChild(contentSpan);

    const root = createRoot(contentSpan);
    root.render(<App />);
    shadow.appendChild(container);
  }
}

console.log("Class Loaded", MyFirstComponent);
window.customElements.define("my-first-component", MyFirstComponent);
