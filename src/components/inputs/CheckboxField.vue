<template>
  <div class="field">
    <div class="control">
      <input
        class="is-checkradio has-background-color"
        type="checkbox"
        :id="`checkbox-option-${name}`"
        :name="name"
        :checked="checked"
        @input="onInput"
      />
      <label :for="`checkbox-option-${name}`">{{ label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadioGroup",
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
      this.$emit("input", $event.target.checked);
    }
  }
};
</script>
