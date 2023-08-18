import { createApp, h } from 'vue';
import wrapper from 'vue3-webcomponent-wrapper';
import Banner from './Banner.vue';

export function registerWebC(component) {
  const wrappedElement = wrapper(component ? component : Banner, createApp, h);
  if (window.customElements.get('banner-vue') === undefined)
    window.customElements.define('banner-vue', wrappedElement);
}

registerWebC(null);
