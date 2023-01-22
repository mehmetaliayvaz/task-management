<template>
  <div class="wrapper">
    <div class="container">
      <a-button class="addSectionBtn" @click="addSection()">
        Add New Section
      </a-button>
      <a-row :gutter="32">
        <draggable
          :list="sections"
          group="section"
          class="sections"
          @change="setLocalStorageSections()"
        >
          <base-section
            v-for="(sectionItem, sectionIndex) in sections"
            :key="sectionIndex"
            :title="sectionItem.title"
            @addTask="showModal(sectionIndex)"
            @editTitle="editTitle(sectionIndex, $event)"
            @deleteSection="deleteSection(sectionIndex)"
          >
            <draggable
              :list="sectionItem.items"
              group="task"
              ghost-class="on-drag"
              animation="400"
              @change="setLocalStorageSections()"
            >
              <base-section-item
                v-for="(taskItem, taskIndex) in sectionItem.items"
                :key="taskIndex"
                :item="taskItem"
                @deleteTask="deleteTask(sectionIndex, taskIndex)"
              />
            </draggable>
          </base-section>
        </draggable>
      </a-row>

      <a-modal
        v-model="visible"
        title="New Task"
        @ok="handleOk"
        class="newTask"
      >
        <a-input v-model="task.title" placeholder="Title" />
        <a-input v-model="task.creator" placeholder="Creator" />
        <a-textarea v-model="task.content" placeholder="Content" />
        <a-alert
          v-if="!isRequiredFields && isClickRequiredFields"
          type="error"
          message="All fields are required."
          banner
        />
      </a-modal>
    </div>
  </div>
</template>

<script>
import BaseSection from "../components/BaseSection.vue";
import BaseSectionItem from "../components/BaseSectionItem.vue";
import draggable from "vuedraggable";
import { mapGetters } from "vuex";

export default {
  name: "HomePage",
  components: {
    BaseSection,
    BaseSectionItem,
    draggable,
  },
  data() {
    return {
      sections: [],
      task: {
        title: "",
        creator: "",
        content: "",
      },
      visible: false,
      activeModalIndex: null,
      isClickRequiredFields: false,
    };
  },
  created() {
    this.$store.dispatch("getLocalStorageSections");
  },
  computed: {
    ...mapGetters(["getSections"]),
    isRequiredFields() {
      return (
        this.task.title !== "" &&
        this.task.creator !== "" &&
        this.task.content !== ""
      );
    },
  },
  methods: {
    addSection() {
      this.sections.push({
        title: `Section ${this.sections.length + 1}`,
        items: [],
      });
      this.setLocalStorageSections();
    },
    showModal(activeModalIndex) {
      this.activeModalIndex = activeModalIndex;
      this.visible = true;
    },
    handleOk() {
      this.isClickRequiredFields = true;
      if (this.isRequiredFields) {
        this.isClickRequiredFields = false;
        this.sections[this.activeModalIndex].items.push(this.task);
        this.setLocalStorageSections();
        this.task = {
          title: "",
          creator: "",
          content: "",
        };

        this.visible = false;
      }
    },
    setLocalStorageSections() {
      this.$store.dispatch("setLocalStorageSections", this.sections);
    },
    editTitle(sectionIndex, newTitle) {
      this.sections[sectionIndex].title = newTitle;
      this.setLocalStorageSections();
    },
    deleteSection(sectionIndex) {
      this.sections.splice(sectionIndex, 1);
      this.setLocalStorageSections();
    },
    deleteTask(sectionIndex, taskIndex) {
      this.sections[sectionIndex].items.splice(taskIndex, 1);
      this.setLocalStorageSections();
    },
  },
  watch: {
    getSections() {
      this.sections = this.getSections;
    },
  },
};
</script>

<style></style>
