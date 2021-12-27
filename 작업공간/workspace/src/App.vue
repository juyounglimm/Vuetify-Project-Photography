<template>
  <v-app>
    <Navbar />
    <div id="view">
      <router-view name="app" />
    </div>
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap");
* {
  font-family: "Nanum Pen Script";
  font-size: 40px;
}
#view {
  padding: 50px;
}
</style>
