<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <p class="help" :class="narrow ? 'pb-3' : 'pb-6'">{{ sublabel }}</p>
    <div class="select">
      <select :placeholder="placeholder" @input="onInput" :value="value">
        <option v-for="option in options" :key="option">
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectField",
  props: {
    label: String,
    sublabel: String,
    placeholder: String,
    narrow: Boolean,
    value: {
      type: String,
      required: true
    },
    options: {
      type: Array,
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
