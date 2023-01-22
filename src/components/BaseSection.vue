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

<style>
.section {
  margin-bottom: 4rem;
}

.section-left {
  display: flex;
  align-items: center;
  cursor: move;
}

.section-listIcon {
  margin-right: 0.25rem;
}

.section-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.section-editIcon-btn {
  background-color: transparent;
  padding: 0;
  border: none;
  display: flex;
  cursor: pointer;
}

.section-title {
  font-size: 0.9375rem;
  font-weight: 700;
  color: #667085;
  text-transform: uppercase;
  margin-bottom: 0 !important;
  margin-right: 0.5rem;
}

.addTaskBtn {
  background-color: #d50000 !important;
  color: white !important;
}
</style>
