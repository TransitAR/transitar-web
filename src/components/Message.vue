<template>
  <article class="message">
    <div class="message-header" v-if="title">
      <p>{{ title }}</p>
    </div>
    <div class="message-body">
      <slot>{{ body }}</slot>
    </div>
  </article>
</template>

<script>
export default {
  name: "Message",
  props: {
    title: String,
    body: String
  }
};
</script>
