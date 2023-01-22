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
        <div v-if="isEditing" class="section-editWrapper">
          <a-input
            :default-value="title"
            v-model="newTitle"
            class="section-editInput"
            @keyup.enter="editTitle()"
          />
          <button class="section-checkIconBtn" @click="editTitle()">
            <check-circle-icon size="20" class="section-checkIcon" />
          </button>
        </div>
        <div v-else class="section-titleWrapper">
          <h2 class="section-title">{{ title }}</h2>
          <button class="section-editIconBtn" @click="isEditing = true">
            <pencil-alt-icon size="20" class="section-editIcon" />
          </button>
        </div>
      </div>
      <a-button @click="$emit('addTask')" class="addTaskBtn">
        + Add Task
      </a-button>
    </div>
    <slot />
  </a-col>
</template>

<script>
import {
  ViewListIcon,
  PencilAltIcon,
  CheckCircleIcon,
} from "@vue-hero-icons/outline";
export default {
  name: "Section",
  components: {
    ViewListIcon,
    PencilAltIcon,
    CheckCircleIcon,
  },
  emits: ["addTask", "editTitle"],
  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      isEditing: false,
      newTitle: this.title,
    };
  },
  methods: {
    editTitle() {
      this.isEditing = false;
      this.$emit("editTitle", this.newTitle);
    },
  },
};
</script>

<style></style>
