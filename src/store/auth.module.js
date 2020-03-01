import { lock, getUser, setToken, checkSession } from "../utils/auth";

export default {
  namespaced: true,
  state: {
    loading: false,
    user: null
  },
  getters: {
    user: state => state.user,
    loading: state => state.loading,
    isAuthenticated: state => Boolean(state.user)
  },
  mutations: {
    started(state) {
      state.loading = true;
    },
    finished(state) {
      state.loading = false;
    },
    login(state, user) {
      state.user = user;
    },
    logout(state) {
      state.user = null;
    }
  },
  actions: {
    async init({ commit }) {
      commit("started");
      const user = await checkSession();
      if (user) {
        commit("login", user);
      }
      commit("finished");
      lock.on("authenticated", async result => {
        setToken(result.idToken, result.accessToken);
        const user = getUser();
        commit("login", user);
      });
    }
  }
};
