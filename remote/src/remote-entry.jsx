import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

class ReactElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      this
    );
  }
}

customElements.define('remote-react-root', ReactElement);
