<template>
  <footer class="footer has-background-white">
    <div class="content has-text-centered">
      <p>
        <font-awesome-icon icon="envelope" class="mr-2" /><a
          href="mailto:contacto@refugiar.org?subject=Contacto desde la web de RefugiAR"
          target="_blank"
          >contacto@refugiar.org</a
        >
      </p>
      <p>
        <font-awesome-icon :icon="['fab', 'instagram-square']" class="mr-2" /><a
          href="https://www.instagram.com/refugiar_ok/"
          target="_blank"
          >refugiar_ok</a
        >
      </p>
      <p>
        Icons made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik"
          >Freepik</a
        >
        from
        <a href="https://www.flaticon.com/" title="Flaticon"
          >www.flaticon.com</a
        >
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
