<template>
  <div class="field">
    <input
      class="input"
      type="text"
      :placeholder="placeholder"
      :value="value"
      @input="onInput"
    />
    <p v-if="helpText" class="help">Calle, altura, localidad, provincia.</p>
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: {
    placeholder: String,
    helpText: String,
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
