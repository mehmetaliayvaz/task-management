<template>
  <div>
    {{ item.title }}
    {{ item.content }}
  </div>
</template>

<script>
export default {
  name: "BaseSectionItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
