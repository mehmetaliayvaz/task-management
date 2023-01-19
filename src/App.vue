<template>
  <div class="app">
    <Sidebar />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  name: "App",
  components: {
    Sidebar,
  },
};
</script>

<style>
@import "./css/master.css";

.app {
  display: flex;
  background: #eee;
}
</style>
