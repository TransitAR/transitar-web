import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarkerAlt,
  faPaw,
  faHome,
  faCar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import 'bulma-extensions/dist/css/bulma-extensions.min.css'
import 'bulma-extensions/dist/js/bulma-extensions'

library.add(faMapMarkerAlt, faPaw, faHome, faCar);

Vue.component("fa-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
