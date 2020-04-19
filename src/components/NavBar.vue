<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <figure class="image is-24x24 inline-block m-auto">
          <img src="../assets/png/012-pawprint.png" />
        </figure>
        <span class="brand-title has-text-weight-semibold">RefugiAR</span>
      </router-link>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="toggle()"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div :class="{ 'navbar-menu': true, 'is-active': isActive }">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/nosotros"
          >Quienes somos</router-link
        >
        <hr class="navbar-divider" />
        <router-link class="navbar-item" to="/perfil" v-if="$auth.user"
          >Perfil</router-link
        >
        <router-link class="navbar-item" to="/noticias">
          Noticias
        </router-link>
        <router-link class="navbar-item" to="/explorar">
          Explorar
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item" v-if="!$auth.loading">
          <div v-if="!$auth.isAuthenticated" class="buttons">
            <a class="button is-primary" @click="register()">
              <strong>Registrarme</strong>
            </a>
            <a class="button is-light" @click="login">Iniciar sesión</a>
          </div>
          <div v-else class="level">
            <div class="level-left">
              <div class="level-item">
                <strong>{{ $auth.user.email }}</strong>
              </div>
              <div class="level-item">
                <a class="button is-light" @click="logout">Salir</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    isActive: false
  }),
  methods: {
    register() {
      this.$auth.registerWithRedirect();
    },
    logout() {
      this.$auth.logout();
    },
    login() {
      this.$auth.loginWithRedirect();
    },
    toggle() {
      this.isActive = !this.isActive;
    }
  },
  watch: {
    $route() {
      this.isActive = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.brand-title {
  margin-left: 0.75rem;
}
.navbar {
  min-height: 3.5rem;
}
</style>
