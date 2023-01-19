<template>
  <a-col :xs="{ span: 24 }" :md="{ span: 12 }" :lg="{ span: 8 }">
    <slot />
  </a-col>
</template>

<script>
export default {
  name: "Section",
};
</script>

<style></style>
