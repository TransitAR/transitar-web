<template>
  <section class="container is-fullhd pt-16">
    <div class="level">
      <div class="level-item has-text-centered">
        <div class="content">
          <fa-icon icon="paw" size="2x" class="has-text-primary" />
          <p class="title is-5">Buscar tránsito</p>
          <p class="subtitle is-6">Buscar hogares de tránsito disponibles</p>
          <button class="button is-primary">Buscar</button>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div class="content">
          <fa-icon icon="home" size="2x" class="has-text-primary" />
          <p class="title is-5">Dar tránsito</p>
          <p class="subtitle is-6">Ofrecer espacio para tránsito</p>
          <button class="button is-primary">Registrarme</button>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div class="content">
          <fa-icon icon="car" size="2x" class="has-text-primary" />
          <p class="title is-5">Ver viajes voluntarios</p>
          <p class="subtitle is-6">
            Viajes ofrecidos por voluntarios en su tiempo libre
          </p>
          <button class="button is-primary">Ver viajes</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "home"
};
</script>
