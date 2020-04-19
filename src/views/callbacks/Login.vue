<template>
  <div class="pageloader is-active">
    <span class="title">Iniciando sesión...</span>
  </div>
</template>

<script>
export default {
  name: "LoginCallback",
  created() {
    // TODO pasar a vuex y borrarlo desde mainjs/app o algo asi
    const justRegistered = localStorage.getItem("just-registered");
    const redirectUrl = justRegistered ? "/formulario-registro" : "/";
    localStorage.removeItem("just-registered");
    setTimeout(() => {
      this.$router.push(redirectUrl);
    }, 1500);
  }
};
</script>
