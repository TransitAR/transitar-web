<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          :src="`https://picsum.photos/id/${randomNumber}/300/225`"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">Pandorino</p>
        </div>
      </div>

      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
        <a>@bulmaio</a>.
        <a href="#">#css</a>
        <a href="#">#responsive</a>
        <br />
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PetCard",
  computed: {
    randomNumber() {
      return Math.ceil(Math.random() * 100);
    }
  }
};
</script>
