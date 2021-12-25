<template>
  <v-container id="vcon">
    <v-app-bar id="nav" color="dark accent-4" dense dark>
      <v-toolbar-title> Page title </v-toolbar-title>
      <v-spacer />
      <v-btn>
        <router-link :to="{ name: 'Home' }"> Home </router-link>
      </v-btn>
      <router-link :to="{ name: 'Login' }"> Login </router-link>
      <v-btn>
        <router-link :to="{ name: 'Register' }"> Register </router-link>
      </v-btn>
    </v-app-bar>
    <v-tabs id="menu" background-color="white" dark right>
      <v-tabs-slider color="blue" />
      <v-tab v-for="item in items" :key="item.name">
        <router-link :to="{ name: item.name }">
          {{ item.tab }}
        </router-link>
      </v-tab>
    </v-tabs>
    <v-img
      lazy-src="@/assets/banner.jpg"
      max-height="300"
      src="@/assets/banner.jpg"
    />
    <router-view name="navbar" />
  </v-container>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    methods: {},
    tab: null,
    items: [
      { tab: "홈", name: "Home", route: "/" },
      { tab: "카페신청", name: "Apply", route: "/apply" },
      { tab: "카페소개", name: "Intro", route: "/intro" },
      { tab: "커뮤니티", name: "Community", route: "/community" },
      { tab: "고객센터", name: "Customer", route: "/customer" },
    ],
  }),
};
</script>

<style>
#nav a {
  font-weight: bold;
  color: #ffff;
  text-decoration-line: none;
  padding: 10px;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

#menu a {
  font-weight: bold;
  color: #000000;
  text-decoration-line: none;
  padding: 10px;
}
</style>
