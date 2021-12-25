<template>
  <div>
    <h2>최근 등록 후기</h2>
    <br />
    <v-row>
      <v-col cols="12" md="4">
        <v-skeleton-loader
          v-bind="attrs"
          type="card-avatar, article, actions"
        />

        <v-skeleton-loader v-bind="attrs" type="date-picker" />
      </v-col>

      <v-col cols="12" md="4">
        <v-skeleton-loader v-bind="attrs" type="article, actions" />

        <v-skeleton-loader
          v-bind="attrs"
          type="table-heading, list-item-two-line, image, table-tfoot"
        />
      </v-col>

      <v-col cols="12" md="4">
        <v-skeleton-loader
          v-bind="attrs"
          type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions"
        />

        <v-skeleton-loader
          v-bind="attrs"
          type="list-item-avatar-three-line, image, article"
        />
      </v-col>
    </v-row>
    <h2>최근 등록 카페</h2>
    <br />
    <v-row>
      <v-col cols="12" md="4">
        <v-skeleton-loader
          v-bind="attrs"
          type="card-avatar, article, actions"
        />

        <v-skeleton-loader v-bind="attrs" type="date-picker" />
      </v-col>

      <v-col cols="12" md="4">
        <v-skeleton-loader v-bind="attrs" type="article, actions" />

        <v-skeleton-loader
          v-bind="attrs"
          type="table-heading, list-item-two-line, image, table-tfoot"
        />
      </v-col>

      <v-col cols="12" md="4">
        <v-skeleton-loader
          v-bind="attrs"
          type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions"
        />

        <v-skeleton-loader
          v-bind="attrs"
          type="list-item-avatar-three-line, image, article"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    attrs: {
      class: "mb-6",
      boilerplate: true,
      elevation: 2,
    },
  }),
};
</script>

<style scoped>
</style>
