<template>
  <div>
    <h1>{{ product.name }}</h1>
    <div>
      <img :src="product.image" />
    </div>
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "product",
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    ...mapState(["storedata"]),

    product() {
      return this.storedata.find(el => el.id === parseInt(this.id))
    }
  },
};
</script>
