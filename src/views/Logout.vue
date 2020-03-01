<template>
  <!-- TODO: agregar un spinner o algo -->
  <div>Loading out...</div>
</template>

<script>
export default {
  name: "Callback",
  mounted() {
    // const { returnTo } = this.$route.query
    // logoutCallback(returnTo || '/')
    this.$router.push("/");
  }
};
</script>
