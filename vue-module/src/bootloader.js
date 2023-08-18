import { createApp } from 'vue';

import './index.css';

import App from './App.vue';
import Banner from './Banner.vue';
import { registerWebC } from './BannerWrapper';

createApp(App).mount('#app');
registerWebC(Banner);
