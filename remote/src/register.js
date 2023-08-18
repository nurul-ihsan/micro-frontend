import React from 'react';
import ReactDOM from 'react-dom';

export function register(MyReactComponent, name) {
  class WebComponent extends HTMLElement {
    connectedCallback() {
      // You can directly use shadow root as a mount point

      ReactDOM.render(<MyReactComponent />, this);
    }
  }

  customElements.define(name, WebComponent);
}
