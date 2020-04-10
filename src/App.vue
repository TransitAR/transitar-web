<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default {
  components: {
    NavBar,
    Footer
  }
};
</script>

<style lang="sass" src="bulma" />
<style lang="scss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

html,
body,
#app {
  height: 100%;
}

hr {
  height: 1px;
  width: 100%;
  margin: 1rem 0;
}
</style>
