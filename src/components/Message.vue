<template>
  <article class="message is-primary">
    <div class="message-header">
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
