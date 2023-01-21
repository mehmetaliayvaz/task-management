<template>
  <div class="wrapper">
    <div class="container">
      <a-button type="primary" class="addSectionBtn" @click="addSection()">
        Add New Section
      </a-button>
      <a-row :gutter="16">
        <draggable
          :list="sections"
          group="section"
          @change="setLocalStorageSections()"
        >
          <base-section
            v-for="(sectionItem, sectionIndex) in sections"
            :key="sectionIndex"
            :title="sectionItem.title"
          >
            <a-button type="primary" @click="showModal(sectionIndex)"
              >+</a-button
            >

            <draggable
              :list="sectionItem.items"
              group="task"
              ghost-class="on-drag"
              animation="400"
              @change="setLocalStorageSections()"
            >
              <base-section-item
                v-for="taskItem in sectionItem.items"
                :key="taskItem.id"
                :item="taskItem"
              />
            </draggable>
          </base-section>
        </draggable>
      </a-row>
      <div>
        <a-modal v-model="visible" title="New Task" @ok="handleOk">
          <a-input v-model="task.title" placeholder="Title" />
          <a-input v-model="task.content" placeholder="Content" />
        </a-modal>
      </div>
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
        content: "",
      },
      visible: false,
      activeModalIndex: null,
    };
  },
  created() {
    this.$store.dispatch("getLocalStorageSections");
  },
  computed: {
    ...mapGetters(["getSections"]),
  },
  methods: {
    addSection() {
      this.sections.push({
        title: "New Section",
        items: [],
      });
      this.setLocalStorageSections();
    },
    showModal(activeModalIndex) {
      this.activeModalIndex = activeModalIndex;
      this.visible = true;
    },
    handleOk() {
      this.sections[this.activeModalIndex].items.push(this.task);
      this.setLocalStorageSections();
      this.task = {
        title: "",
        content: "",
      };

      this.visible = false;
    },
    setLocalStorageSections() {
      this.$store.dispatch("setLocalStorageSections", this.sections);
    },
  },
  watch: {
    // sections() {
    //   this.setLocalStorageSections();
    // },
    getSections() {
      this.sections = this.getSections;
    },
  },
};
</script>

<style>
.addSectionBtn {
  margin-bottom: 20px;
}
.on-drag {
  background-color: #29badf;
}
</style>
