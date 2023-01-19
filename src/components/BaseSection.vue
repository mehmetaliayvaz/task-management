<template>
  <a-col :xs="{ span: 24 }" :md="{ span: 12 }" :lg="{ span: 8 }">
    <h2>{{ title }}</h2>
    <slot />
  </a-col>
</template>

<script>
export default {
  name: "Section",
  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style></style>
