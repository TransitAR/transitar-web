<template>
  <div class="field">
    <div class="control">
      <input
        :id="`toggle-option-${name}`"
        type="checkbox"
        class="switch"
        :name="name"
        :checked="checked"
        @input="onInput"
      />
      <label :for="`toggle-option-${name}`">
        {{ label }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toggle",
  props: {
    label: String,
    name: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
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
