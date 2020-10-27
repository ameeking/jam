<template>
  <main>
    <h1>{{ product.name }}</h1>
    {{ product.description }}
    <img :src="product.image" />
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
  computed: {
    ...mapState(["storedata"]),

    product() {
      return this.storedata[this.id];
    }
  },
};
</script>
