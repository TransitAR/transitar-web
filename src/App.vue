<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  components: {
    NavBar
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
