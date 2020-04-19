import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPaw, faEnvelope, faAt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { Auth0Plugin } from "./plugins/auth0.plugin";
import "bulma-extensions/dist/css/bulma-extensions.min.css";
import "bulma-extensions/dist/js/bulma-extensions";

library.add(faPaw, faEnvelope, faAt, faInstagram);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Auth0Plugin, {
  // TODO: sacar credenciales del repo
  domain: "refugiar.auth0.com",
  clientId: "3bbnnk6nRSvXpGpGpkGa5GUB8nX3DCgY",
  audience: "https://refugiar-api.now.sh",
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
