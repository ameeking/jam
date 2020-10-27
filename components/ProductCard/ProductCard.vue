<template>
  <v-card
    class="mx-auto"
    max-width="344"
    >
      <v-img
        :src="image"
        height="200px"
      >
      </v-img>

      <v-card-title>{{ name }}</v-card-title>

      <v-card-subtitle>
        This is the subtitle
      </v-card-subtitle>

      <v-card-actions>
        <v-btn
          color="orange lighten-2"
          text
          :to="link"
        >
          Explore
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
  name: "Header",
  props: ['id', 'name', 'image'],
  computed: {
    link() {
      return `/product/${this.id}`;
    }
  }
};
</script>
