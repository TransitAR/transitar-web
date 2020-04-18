<template>
  <div
    :class="
      `step-content has-text-centered is-primary ${isActive ? 'is-active' : ''}`
    "
  >
    <div class="hero-body">
      <div class="columns is-centered">
        <div class="column is-half">
          <div>¡LISTO!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FourthStep",
  props: {
    isActive: Boolean
  }
};
</script>
