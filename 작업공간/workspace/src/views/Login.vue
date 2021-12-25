<template>
  <div>
    <v-tabs v-model="tab" background-color="green" dark centered>
      <v-tabs-slider color="blue" />
      <v-tab v-for="item in items" :key="item.tab">
        {{ item.tab }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.tab">
        <v-card flat>
          <v-card-text>
            <component :is="item.content" />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import NormalLogin from "@/components/NormalLogin";
import CompanyLogin from "@/components/CompanyLogin";
export default {
  name: "App",
  components: {
    NormalLogin,
    CompanyLogin,
  },
  data: () => ({
    tab: null,
    items: [
      { tab: "NormalLogin", content: "NormalLogin" },
      { tab: "CompanyLogin", content: "CompanyLogin" },
    ],
  }),
};
</script>

<style>
</style>
