//? VUE & PINIA
import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

//? GOOGLE LOGIN PACKAGE
import vue3GoogleLogin from "vue3-google-login";

//? BOOTSTRAP PACKAGE
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//? APP & ROUTER
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.$router = markRaw(router);
});

app.use(router);
app.use(pinia);
app.use(vue3GoogleLogin, {
  clientId:
    "223085130115-r5sr8hjasmkm7irtngg5i0hmunh3ilu1.apps.googleusercontent.com",
});

app.mount("#app");
