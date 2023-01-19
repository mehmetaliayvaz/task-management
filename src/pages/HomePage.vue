<template>
  <div class="wrapper">
    <div class="container">
      <a-button type="primary" class="addSectionBtn">
        Add New Section
      </a-button>
      <a-row :gutter="16">
        <base-section title="Yapılacaklar">
          <base-section-item v-for="item in todo" :key="item.id" :item="item" />
        </base-section>
        <base-section title="Yapılıyor">
          <base-section-item
            v-for="item in inProgress"
            :key="item.id"
            :item="item"
          />
        </base-section>
        <base-section title="Yapıldı">
          <base-section-item
            v-for="item in completed"
            :key="item.id"
            :item="item"
          />
        </base-section>
      </a-row>
    </div>
  </div>
</template>

<script>
import BaseSection from "../components/BaseSection.vue";
import BaseSectionItem from "../components/BaseSectionItem.vue";
export default {
  name: "HomePage",
  components: {
    BaseSection,
    BaseSectionItem,
  },
  data() {
    return {
      todo: [
        {
          id: 1,
          title: "Title 1",
          content: "Content 1",
        },
        {
          id: 2,
          title: "Title 2",
          content: "Content 2",
        },
        {
          id: 3,
          title: "Title 3",
          content: "Content 3",
        },
      ],
      inProgress: [
        {
          id: 1,
          title: "Title 1",
          content: "Content 1",
        },
        {
          id: 2,
          title: "Title 2",
          content: "Content 2",
        },
        {
          id: 3,
          title: "Title 3",
          content: "Content 3",
        },
      ],
      completed: [
        {
          id: 1,
          title: "Title 1",
          content: "Content 1",
        },
        {
          id: 2,
          title: "Title 2",
          content: "Content 2",
        },
        {
          id: 3,
          title: "Title 3",
          content: "Content 3",
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
</style>
