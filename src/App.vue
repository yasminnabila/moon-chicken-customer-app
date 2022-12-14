<script>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    RouterLink,
    RouterView,
    Footer,
  },
};
</script>

<template>
  <RouterView />
</template>
