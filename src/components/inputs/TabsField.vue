<template>
  <div class="tabs is-centered" :class="{ 'is-boxed': boxed }">
    <ul>
      <li
        v-for="tab in tabs"
        :key="tab"
        :class="{ 'is-active': value === tab }"
        @click="selectTab(tab)"
      >
        <a class="capitalize">{{ tab }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabsField",
  props: {
    boxed: Boolean,
    value: {
      type: String,
      required: true
    },
    tabs: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectTab(tab) {
      this.$emit("input", tab);
    }
  }
};
</script>
