<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import auth from "./utils/auth";
export default {
  components: {
    NavBar
  },
  created() {
    this.$store.dispatch("auth/init");
  }
};
</script>

<style lang="sass" src="bulma" />
<style lang="scss"></style>
