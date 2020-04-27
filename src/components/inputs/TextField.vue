<template>
  <div class="field">
    <input
      class="input"
      type="text"
      :placeholder="placeholder"
      :value="value"
      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: {
    placeholder: String,
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    onInput($event) {
      this.$emit("input", $event);
    }
  }
};
</script>
