<template>
  <div id="app">
    <NavBar />
    <router-view />
    <div>
      Icons made by
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </div>
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
<style lang="scss"></style>
