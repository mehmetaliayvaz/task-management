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

<style>
.section-item {
  background-color: #fcfcfd;
  border-radius: 0.5rem;
  padding: 1.25rem;
  margin-bottom: 1rem;
  box-shadow: 0px 0.5px 2px rgba(16, 24, 40, 0.3);
  cursor: move;
}
.section-item-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1d2939;
  margin-bottom: 0.5rem;
}
.section-item-info {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: #98a2b3;
}

.section-item-creator {
  color: #667085;
}

.section-item-text {
  font-size: 0.9375rem;
  font-weight: 500;
  color: #98a2b3;
}
</style>
