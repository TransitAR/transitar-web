<template>
  <!-- TODO: agregar un spinner o algo -->
  <div>Logging in...</div>
</template>

<script>
export default {
  name: "LoginCallback",
  created() {
    // TODO pasar a vuex y borrarlo desde mainjs/app o algo asi
    const justRegistered = localStorage.getItem("just-registered");
    const redirectUrl = justRegistered ? "/formulario-registro" : "/";
    this.$router.push(redirectUrl);
    localStorage.removeItem("just-registered");
  }
};
</script>
