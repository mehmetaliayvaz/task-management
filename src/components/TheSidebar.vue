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

<style scoped>
.sidebar {
  min-height: 100vh;
  width: 320px;
  padding: 1rem;
}

.sidebar-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #667085;
  font-size: 1rem;
  font-weight: 700;
}

.sidebar-item:hover {
  color: #1d2939;
}

.sidebar-item-left {
  display: flex;
  align-items: center;
}

.sidebar-item-icon {
  margin-right: 0.5rem;
}

.sidebar-item:hover .sidebar-item-right {
  background-color: #1d2939;
}

.ant-menu-item-selected .sidebar-item-right {
  background-color: #1d2939;
}

.sidebar-item-right {
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 6px;
  background-color: #667085;
  color: white;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
}

.router-link-exact-active {
  color: #1d2939;
}

.ant-menu-item-selected {
  background-color: #f2f4f7 !important;
}
</style>
