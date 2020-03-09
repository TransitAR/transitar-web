<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <fa-icon icon="map-marker-alt" class="has-text-primary" />
        <router-link to="/">
          <span class="brand-title has-text-weight-semibold">TransitAR</span>
        </router-link>
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">Documentación</a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Más</a>

          <div class="navbar-dropdown">
            <a class="navbar-item">Quienes somos</a>
            <a class="navbar-item">Contacto</a>
            <hr class="navbar-divider" />
            <a class="navbar-item">Reportar un problema</a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div v-if="$auth.loading">Loading auth...</div>
          <div v-else-if="!$auth.user" class="buttons">
            <router-link to="/registro">
              <a class="button is-primary">
                <strong>Registrarme</strong>
              </a>
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
  computed: {},
  methods: {
    logout() {
      this.$auth.logout();
    },
    login() {
      this.$auth.loginWithRedirect();
    }
  }
};
</script>

<style lang="scss" scoped>
.brand-title {
  margin-left: 0.75rem;
}
</style>
