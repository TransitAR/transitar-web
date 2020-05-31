<template>
  <div class="card shadow-xs rounded">
    <header class="card-header">
      <p class="m-3">
        <font-awesome-icon :icon="icon" size="lg" />
        <span class="font-semibold is-6 ml-3">{{ title }}</span>
      </p>
    </header>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DonationCard",
  props: ["icon", "title"]
};
</script>
