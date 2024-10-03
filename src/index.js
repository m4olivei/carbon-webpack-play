import { LitElement, html } from 'lit';
import PlayOutline from '@carbon/web-components/es/icons/play--outline/20.js';

export class MyComponent extends LitElement {
  render() {
    return html`<p>Hello there</p>${PlayOutline()}`;
  }
}
customElements.define('my-component', MyComponent);