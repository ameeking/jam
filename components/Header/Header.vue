<template>
  <v-app-bar 
    app 
    color="blue" 
    flat
    >
    <v-container 
      class="py-0 fill-height"
      >
      <nuxt-link
        to="/"
      >
        <v-img
          class="mx-2"
          src="https://i.imgur.com/qgGY4tB.png"
          max-height="40"
          max-width="40"
          contain
        ></v-img>
      </nuxt-link>
      

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
        },
        {
          id: 1,
          path: '/categories',
          name: "Categories"
        }
      ]
    };
  }
};
</script>
