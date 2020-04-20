import Vue from "vue";
import createAuth0Client from "@auth0/auth0-spa-js";
import { getUser, updateUser } from "../utils/http";

const baseUrl = `${window.location.protocol}//${window.location.host}`;
const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

let instance;

export const getInstance = () => instance;

export const useAuth0 = ({
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  redirectUri = window.location.origin,
  ...options
}) => {
  if (instance) return instance;

  instance = new Vue({
    data() {
      return {
        loading: true,
        isAuthenticated: false,
        user: {},
        auth0Client: null,
        popupOpen: false,
        error: null
      };
    },
    methods: {
      async loginWithPopup(o) {
        this.popupOpen = true;

        try {
          await this.auth0Client.loginWithPopup(o);
          this.user = await this.auth0Client.getUser();
          this.isAuthenticated = await this.auth0Client.isAuthenticated();
          this.error = null;
        } catch (e) {
          console.error(e);
          this.error = e;
        } finally {
          this.popupOpen = false;
        }
      },
      async handleRedirectCallback() {
        this.loading = true;
        try {
          await this.auth0Client.handleRedirectCallback();
          this.user = await this.auth0Client.getUser();
          this.isAuthenticated = true;
          this.error = null;
        } catch (e) {
          this.error = e;
        } finally {
          this.loading = false;
        }
      },
      registerWithRedirect() {
        localStorage.setItem("just-registered", true);
        this.loginWithRedirect({ screen_hint: "signup" });
      },
      loginWithRedirect(opts) {
        return this.auth0Client.loginWithRedirect({
          redirect_uri: `${window.location.origin}/login`,
          ...opts
        });
      },
      getIdTokenClaims(o) {
        return this.auth0Client.getIdTokenClaims(o);
      },
      getTokenSilently(o) {
        return this.auth0Client.getTokenSilently(o);
      },
      getTokenWithPopup(o) {
        return this.auth0Client.getTokenWithPopup(o);
      },
      async updateUser(data) {
        try {
          const user = await updateUser(data, this.accessToken);
          this.user = user;
        } catch (err) {
          console.error("There was an error trying to update the user");
        }
      },
      logout(o = {}) {
        // TODO: mejor solucion para esto
        o.returnTo = `${baseUrl}/logout`;
        return this.auth0Client.logout(o);
      }
    },
    async created() {
      this.auth0Client = await createAuth0Client({
        domain: options.domain,
        client_id: options.clientId,
        audience: options.audience,
        redirect_uri: redirectUri
      });

      try {
        if (
          window.location.search.includes("code=") &&
          window.location.search.includes("state=")
        ) {
          const { appState } = await this.auth0Client.handleRedirectCallback();
          this.error = null;
          onRedirectCallback(appState);
        }
      } catch (e) {
        this.error = e;
      } finally {
        this.isAuthenticated = await this.auth0Client.isAuthenticated();
        this.user = await this.auth0Client.getUser();
        if (this.isAuthenticated) {
          // Temporal para debuggear la API con Auth
          this.accessToken = await this.auth0Client.getTokenSilently();
          this.mongoUser = await getUser(this.accessToken);
          console.log({
            accessToken: this.accessToken,
            user: this.user,
            mongoUser: this.mongoUser
          });
        }
        this.loading = false;
      }
    }
  });

  return instance;
};

export const Auth0Plugin = {
  install(Vue, options) {
    Vue.prototype.$auth = useAuth0(options);
  }
};
