<template>
  <a-col
    :xs="{ span: 24 }"
    :md="{ span: 12 }"
    :lg="{ span: 8 }"
    class="section"
  >
    <div class="section-top">
      <div class="section-left">
        <view-list-icon size="20" class="section-listIcon" />
        <h2 class="section-title">{{ title }}</h2>
        <button class="section-editIcon-btn">
          <pencil-alt-icon size="20" class="section-editIcon" />
        </button>
      </div>
      <a-button @click="$emit('addTask')" class="addTaskBtn">
        + Add Task
      </a-button>
    </div>
    <slot />
  </a-col>
</template>

<script>
import { ViewListIcon, PencilAltIcon } from "@vue-hero-icons/outline";
export default {
  name: "Section",
  components: {
    ViewListIcon,
    PencilAltIcon,
  },
  emits: ["addTask"],
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
