<template>
  <div class="section-item">
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

<style>
.section-item {
  background-color: rgb(195, 195, 195);
  margin-bottom: 1rem;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  padding: 8px 0;
  text-align: center;
}
</style>
