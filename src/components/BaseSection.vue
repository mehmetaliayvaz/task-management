<template>
  <a-col
    :xs="{ span: 24 }"
    :md="{ span: 12 }"
    :lg="{ span: 8 }"
    class="section"
  >
    <div class="section-top">
      <h2 class="section-title">{{ title }}</h2>
      <a-button @click="$emit('addTask')" class="addTaskBtn">
        + Add Task
      </a-button>
    </div>
    <slot />
  </a-col>
</template>

<script>
export default {
  name: "Section",
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
.section-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.section-title {
  font-size: 1rem;
  text-transform: uppercase;
  cursor: move;
}
.addTaskBtn {
  background-color: #d50000 !important;
  color: white !important;
}
</style>
