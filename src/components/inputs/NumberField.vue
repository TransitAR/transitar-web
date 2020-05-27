<template>
  <div class="field">
    <input
      class="input"
      type="number"
      :placeholder="placeholder"
      :value="value"
      @input="onInput"
    />
    <p v-if="helpText" class="help">{{ helpText }}</p>
  </div>
</template>

<script>
export default {
  name: "NumberField",
  props: {
    placeholder: String,
    helpText: String,
    value: {
      required: true
    }
  },
  methods: {
    onInput($event) {
      this.$emit("input", +$event.target.value);
    }
  }
};
</script>
