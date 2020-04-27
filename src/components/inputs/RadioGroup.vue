<template>
  <div class="field">
    <label class="label pb-3">{{ label }}</label>
    <div class="control">
      <div class="field" v-for="{ val, text } in options" :key="val">
        <input
          class="is-checkradio has-background-color is-primary"
          type="radio"
          :id="`radio-option-${val}`"
          :name="name"
          :value="val"
          :checked="value === val"
          @input="onInput"
        />
        <label :for="`radio-option-${val}`">{{ text }}</label>
      </div>
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
    value: {
      type: String,
      required: true
    },
    options: {
      required: true,
      type: Array
    }
  },
  methods: {
    onInput($event) {
      this.$emit("input", $event.target.value);
    }
  }
};
</script>
