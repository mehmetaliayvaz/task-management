<template>
  <div class="section-item">
    <h3 class="section-item-title">{{ item.title }}</h3>
    <div class="section-item-info">
      <span>12th Jan</span>
      <span style="margin: 0 0.5rem;">·</span>
      <span>
        Created by
        <span class="section-item-creator">{{ item.creator }}</span>
      </span>
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

<style></style>
