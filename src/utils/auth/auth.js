import qs from "query-string";
import jwtDecode from "jwt-decode";
import Cookie from "js-cookie";
import { CLIENT_ID, ROUTES } from "./auth.constants";
import config from "./auth.lock.config.json";
import router from "../../router";
import createAuth0Client from "@auth0/auth0-spa-js";

const baseUrl = `${window.location.protocol}//${window.location.host}`;

let client;

export const startup = async () => {
  client = await createAuth0Client({
    domain: ROUTES.DOMAIN,
    client_id: CLIENT_ID,
    // audience: options.audience,
    redirect_uri: baseUrl
  });

  try {
    // If the user is returning to the app after authentication..
    if (
      window.location.search.includes("code=") &&
      window.location.search.includes("state=")
    ) {
      // handle the redirect and retrieve tokens
      const { appState } = await client.handleRedirectCallback();
      console.log({ appState });
    }
  } finally {
    // Initialize our internal authentication state
    let isAuthenticated = await client.isAuthenticated();
    let user = await client.getUser();
    let loading = false;
    console.log({ isAuthenticated, user, loading });
  }
};

export const lock = new Auth0Lock(CLIENT_ID, ROUTES.DOMAIN, config);

// TODO: rename?
// export const login = () => lock.show();

export const login = async o => {
  client.loginWithRedirect(o);
};

export const logout = () => {
  const { path, query } = router.currentRoute;
  const logoutRoute = `${baseUrl}${ROUTES.CALLBACK_ROUTE_LOGOUT}`;
  if (path === "/") {
    lock.logout({
      returnTo: logoutRoute
    });
  } else {
    let queryStr = qs.stringify(query);
    queryStr = queryStr ? `?${queryStr}` : "";
    lock.logout({
      returnTo: `${logoutRoute}?returnTo=${encodeURIComponent(path + queryStr)}`
    });
  }
};

export const checkSession = async () => {
  return new Promise(resolve => {
    // check if only checkSession should be called
    const user = getUser();
    if (user) {
      return resolve(user);
    }
    lock.checkSession(
      {
        redirectUri: baseUrl
      },
      (err, result) => {
        if (err) resolve(null);
        // always resolving
        else {
          setToken(result.idToken, result.accessToken);
          resolve(getUser());
        }
      }
    );
  });
};

// TODO: organize better maybe in another file
export const getUser = () => Cookie.getJSON("transitAR_user");

export const getTokens = () => {
  const idToken = Cookie.get("transitAR_idToken");
  const accessToken = Cookie.get("transitAR_accessToken");
  return { idToken, accessToken };
};

export const unsetToken = () => {
  Cookie.remove("transitAR_idToken");
  Cookie.remove("transitAR_accessToken");
  Cookie.remove("transitAR_user");
};

export const setToken = (idToken, accessToken) => {
  Cookie.set("transitAR_user", jwtDecode(idToken));
  Cookie.set("transitAR_idToken", idToken);
  Cookie.set("transitAR_accessToken", accessToken);
};
