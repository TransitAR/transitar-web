<template>
  <!-- TODO: agregar un spinner o algo -->
  <div>Loading out...</div>
</template>

<script>
export default {
  name: "Callback",
  created() {
    this.$router.push("/");
  }
};
</script>
