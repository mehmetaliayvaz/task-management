<template>
  <a-menu class="sidebar" :default-selected-keys="[$route.name]" mode="inline">
    <a-menu-item v-for="menuItem in menu" :key="menuItem.pathName">
      <router-link :to="{ name: menuItem.pathName }">
        {{ menuItem.title }}
      </router-link>
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      menu: [
        {
          title: "Tasks",
          pathName: "home",
        },
        {
          title: "About",
          pathName: "about",
        },
      ],
    };
  },
};
</script>

<style scoped>
.sidebar {
  min-height: 100vh;
  width: 300px;
}
</style>
