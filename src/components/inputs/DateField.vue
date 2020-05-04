<template>
  <div class="field">
    <input
      class="input"
      type="date"
      :placeholder="placeholder"
      :value="value"
      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  name: "DateField",
  props: {
    placeholder: String,
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    onInput($event) {
      this.$emit("input", $event.target.value);
    }
  }
};
</script>
