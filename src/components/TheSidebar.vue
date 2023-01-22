<template>
  <a-menu
    class="sidebar"
    :default-selected-keys="[$route.name]"
    mode="vertical"
  >
    <a-menu-item v-for="menuItem in menu" :key="menuItem.pathName">
      <router-link :to="{ name: menuItem.pathName }" class="sidebar-item">
        <div class="sidebar-item-left">
          <component :is="menuItem.icon" size="24" class="sidebar-item-icon" />
          {{ menuItem.title }}
        </div>
        <span v-if="menuItem.extra" class="sidebar-item-right">
          {{ taskCount }}
        </span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>

<script>
import { mapGetters } from "vuex";
import { ViewGridIcon, QuestionMarkCircleIcon } from "@vue-hero-icons/outline";
export default {
  name: "Sidebar",
  components: {
    ViewGridIcon,
    QuestionMarkCircleIcon,
  },
  data() {
    return {
      menu: [
        {
          title: "Tasks",
          icon: "view-grid-icon",
          pathName: "home",
          extra: "taskCount",
        },
        {
          title: "About",
          icon: "question-mark-circle-icon",
          pathName: "about",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["getSections"]),
    taskCount() {
      var count = 0;
      this.getSections.forEach((section) => {
        count += section.items.length;
      });
      return count;
    },
  },
};
</script>

<style></style>
