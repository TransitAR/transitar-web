<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <figure class="image is-16x16 inline-block m-auto">
          <img src="../assets/png/012-pawprint.png" />
        </figure>
        <router-link to="/">
          <span class="brand-title has-text-weight-semibold">RefugiarAR</span>
        </router-link>
      </a>

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
        <router-link class="navbar-item" to="/perfil">Perfil</router-link>
        <router-link class="navbar-item" to="/explorar">
          <span class="ml-2">Explorar</span>
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div v-if="$auth.loading">Loading auth...</div>
          <div v-else-if="!$auth.user" class="buttons">
            <router-link to="/registro" class="button is-primary">
              <strong>Registrarme</strong>
            </router-link>
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
</style>
