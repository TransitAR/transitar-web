<template>
  <!-- TODO: agregar un spinner o algo -->
  <div>Logging in...</div>
</template>

<script>
export default {
  name: "LoginCallback",
  created() {
    const registerType = localStorage.getItem("register-type");
    const redirectUrl = registerType ? `/registro/${registerType}` : "/";
    this.$router.push(redirectUrl);
  }
};
</script>
