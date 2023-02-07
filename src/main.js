import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Import all of Bootstrap's CSS
import"bootstrap/dist/css/bootstrap.css";
// Import all of Bootstrap's JS
import"bootstrap/dist/js/bootstrap.js";

const vuetify = createVuetify({
  components,
  directives,
})




const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount("#app");
