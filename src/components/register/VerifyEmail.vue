<template>
  <div class="text-center">
    <h2 class="subtitle">
      Tenes que verificar tu correo para poder continuar.
    </h2>
    <button class="button is-primary" @click="reload()">
      Ya lo verifiqué
    </button>
  </div>
</template>

<script>
export default {
  name: "NotVerified",
  methods: {
    reload() {
      window.location.reload();
    }
  }
};
</script>
