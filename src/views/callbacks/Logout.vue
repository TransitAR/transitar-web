<template>
  <div class="pageloader is-active">
    <span class="title">Cerrando sesión...</span>
  </div>
</template>

<script>
export default {
  name: "Callback",
  created() {
    setTimeout(() => this.$router.push("/"), 1500);
  }
};
</script>
