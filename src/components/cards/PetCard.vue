<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          :src="`https://loremflickr.com/256/192/kitten?${randomNumber}`"
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
