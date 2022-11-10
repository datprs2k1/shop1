import "./bootstrap";

import { createApp } from "vue";

import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";

import router from "./router";

import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import { UploadMedia, UpdateMedia } from "vue-media-upload";

const app = createApp(App);

const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

app.use(router);

app.use(pinia);

app.use(BootstrapVue3);

app.component("upload-media", UploadMedia);
app.component("update-media", UpdateMedia);

app.mount("#app");
