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
          <div class="buttons">
            <router-link to="/registro">
              <a class="button is-primary">
                <strong>Registrarme</strong>
              </a>
            </router-link>
            <a class="button is-light">Iniciar sesión</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.brand-title {
  margin-left: 0.75rem;
}
</style>
