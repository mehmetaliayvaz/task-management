<template>
  <div class="wrapper">
    <div class="container">
      <a-button type="primary" class="addSectionBtn">
        Add New Section
      </a-button>
      <a-row>
        <base-section v-for="i in 3" :key="i">
          COL
        </base-section>
      </a-row>
    </div>
  </div>
</template>

<script>
import BaseSection from "../components/BaseSection.vue";
export default {
  name: "HomePage",
  components: {
    BaseSection,
  },
  methods: {},
};
</script>

<style>
.ant-col {
  background-color: rgb(177, 177, 177);
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  padding: 8px 0;
  text-align: center;
}

.addSectionBtn {
  margin-bottom: 20px;
}
</style>
