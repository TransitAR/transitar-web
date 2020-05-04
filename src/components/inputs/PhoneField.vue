<template>
  <div class="field">
    <div class="field-body">
      <div class="field is-expanded">
        <div class="field has-addons">
          <p class="control">
            <a class="button is-static">{{ areaCode }}</a>
          </p>
          <p class="control is-expanded">
            <input
              class="input"
              type="tel"
              :placeholder="placeholder"
              :value="value"
              @input="onInput"
            />
          </p>
        </div>
        <p class="help">{{ helpText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhoneField",
  props: {
    placeholder: String,
    helpText: String,
    areaCode: {
      type: String,
      default: "+54"
    },
    value: {
      // comentando el type porque String vs Number y no tengo ganas
      // type: String,
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
