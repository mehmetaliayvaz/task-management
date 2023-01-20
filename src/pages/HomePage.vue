<template>
  <div class="wrapper">
    <div class="container">
      <a-button
        type="primary"
        class="addSectionBtn"
        @click="
          sections.push({ title: `Section ${sections.length + 1}`, items: [] })
        "
      >
        Add New Section
      </a-button>
      <a-row :gutter="16">
        <draggable :list="sections" group="section">
          <base-section
            v-for="(sectionItem, sectionIndex) in sections"
            :key="sectionIndex"
            :title="sectionItem.title"
          >
            <a-button
              type="primary"
              @click="
                sections[sectionIndex].items.push({
                  title: `Task ${sectionItem.items.length + 1}`,
                  content: 'Content',
                })
              "
              >+</a-button
            >
            <draggable
              :list="sectionItem.items"
              group="task"
              ghost-class="on-drag"
              animation="400"
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
        {{ sections }}
      </div>
    </div>
  </div>
</template>

<script>
import BaseSection from "../components/BaseSection.vue";
import BaseSectionItem from "../components/BaseSectionItem.vue";
import draggable from "vuedraggable";

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
    };
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
