<template>
  <v-app>
    <Navbar />
    <router-view name="app" />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
