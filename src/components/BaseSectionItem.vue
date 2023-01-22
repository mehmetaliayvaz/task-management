<template>
  <div class="section-item">
    <h3 class="section-item-title">{{ item.title }}</h3>
    <div class="section-item-info">
      <span>12th Jan</span>
      <span style="margin: 0 0.5rem;">·</span>
      <span
        >Created by <b>{{ item.creator }}</b></span
      >
    </div>
    <p class="section-item-text">{{ item.content }}</p>
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
.section-item-title {
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}
.section-item-info {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
}
.section-item {
  background-color: #fcfcfd;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
}
</style>
