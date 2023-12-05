import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import _ from "lodash";

import "./assets/main.css";

const app = createApp(App);

app.config.globalProperties._ = _;

app.use(router);

app.mount("#app");
