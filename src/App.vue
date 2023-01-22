<template>
  <div class="app">
    <the-sidebar />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import TheSidebar from "./components/TheSidebar.vue";
export default {
  name: "App",
  components: {
    TheSidebar,
  },
};
</script>

<style>
@import "./css/master.css";

.app {
  display: flex;
  background: #f2f4f7;
}
</style>
