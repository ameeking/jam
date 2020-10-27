<template>
  <main>
    <h1>Products</h1>

    <v-container>
      <v-row no-gutters>
        <v-col
          v-for="product in products" 
          :key="product.id"
          cols="12"
          sm="4"
          class="pa-2"
        >
          <v-card
          class="mx-auto"
          max-width="344"
          >
            <v-img
              :src="product.image"
              height="200px"
            >
              <v-card-title>{{ product.name }}</v-card-title>
            </v-img>

            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
                :to="productLink(product.id)"
              >
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    

  </main>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "category",
  data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {
    productLink(id) {
      return `/product/${id}`;
    }
  },
  computed: {
    ...mapState(["storedata"]),

    products() {
      return this.storedata;
    }
  },
};
</script>
