<template>
  <div class="step-content has-text-centered is-primary is-active">
    <div class="hero-body">
      <div class="columns is-centered">
        <div class="column is-half">
          <p class="mb-4 subtitle">
            ¡LISTO!
          </p>
          <button class="button is-primary">
            <router-link to="/perfil">Ir a mi perfil</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LastStep"
};
</script>
