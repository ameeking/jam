<template>
  <v-app-bar 
    app 
    color="blue" 
    flat
    >
    <v-container 
      class="py-0 fill-height"
      >
      <v-avatar
        class="mr-10"
        color="grey darken-1"
        size="32"
      ></v-avatar>

      <v-btn
        nuxt
        v-for="directory in directories"
        :key="directory.id"
        :to="directory.path"
        text
      >
        {{ directory.name }}
      </v-btn>

    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      directories: [
        {
          id: 0,
          path: '/about',
          name: "About"
        },
        {
          id: 1,
          path: '/products',
          name: "Products"
        }
      ]
    };
  }
};
</script>
