import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { VueFinalModal } from 'vue-final-modal';

const app = createApp(App);

app.use(router);
app.component('VueFinalModal', VueFinalModal);
app.mount("#app");
