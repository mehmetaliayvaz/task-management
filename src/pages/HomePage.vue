<template>
  <div class="wrapper">
    <div class="container">
      <a-button type="primary" class="addSectionBtn">
        Add New Section
      </a-button>
      <a-row :gutter="16">
        <base-section title="Yapılacaklar">
          <draggable
            :list="todos"
            group="todosapp"
            ghost-class="on-drag"
            animation="400"
          >
            <base-section-item
              v-for="item in todos"
              :key="item.id"
              :item="item"
            />
          </draggable>
        </base-section>
        <base-section title="Yapılıyor">
          <draggable
            :list="inProgress"
            group="todosapp"
            ghost-class="on-drag"
            animation="400"
          >
            <base-section-item
              v-for="item in inProgress"
              :key="item.id"
              :item="item"
            />
          </draggable>
        </base-section>
        <base-section title="Yapıldı">
          <draggable
            :list="completed"
            group="todosapp"
            ghost-class="on-drag"
            animation="400"
          >
            <base-section-item
              v-for="item in completed"
              :key="item.id"
              :item="item"
            />
          </draggable>
        </base-section>
      </a-row>
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
      todos: [
        {
          id: 1,
          title: "todo 1",
          content: "todo 1",
        },
        {
          id: 2,
          title: "todo 2",
          content: "todo 2",
        },
        {
          id: 3,
          title: "todo 3",
          content: "todo 3",
        },
      ],
      inProgress: [
        {
          id: 1,
          title: "progress 1",
          content: "progress 1",
        },
        {
          id: 2,
          title: "progress 2",
          content: "progress 2",
        },
        {
          id: 3,
          title: "progress 3",
          content: "progress 3",
        },
      ],
      completed: [
        {
          id: 1,
          title: "completed 1",
          content: "completed 1",
        },
        {
          id: 2,
          title: "completed 2",
          content: "completed 2",
        },
        {
          id: 3,
          title: "completed 3",
          content: "completed 3",
        },
      ],
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
