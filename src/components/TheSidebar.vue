<template>
  <a-menu class="sidebar" :default-selected-keys="['1']" mode="inline">
    <a-menu-item key="1">
      <router-link :to="{ name: 'home' }">
        Tasks
      </router-link>
    </a-menu-item>
    <a-menu-item key="2">
      <router-link :to="{ name: 'about' }">
        About
      </router-link>
    </a-menu-item>
    <a-menu-item key="3">
      Option 11
    </a-menu-item>
    <a-menu-item key="4">
      Option 12
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
.sidebar {
  min-height: 100vh;
  width: 300px;
}
</style>
