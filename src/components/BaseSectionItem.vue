<template>
  <div class="section-item">
    <div class="section-item-titleWrapper">
      <h3 class="section-item-title">{{ item.title }}</h3>
      <button class="section-item-deleteIconBtn" @click="$emit('deleteTask')">
        <x-icon size="16" class="section-item-deleteIcon" />
      </button>
    </div>
    <div class="section-item-info">
      <span>{{ date }}</span>
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
import { XIcon } from "@vue-hero-icons/outline";
import dayjs from "dayjs";
export default {
  name: "BaseSectionItem",
  components: {
    XIcon,
  },
  emits: ["deleteTask"],
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    date() {
      return dayjs(this.item.date).format("D MMM");
    },
  },
};
</script>

<style></style>
