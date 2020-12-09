<template>
  <div class="l-container">
    <p>{{ itinerary.body }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itinerary: {}
    }
  },
  async asyncData({ $repository, store, route }) {
    let itinerary = await $repository.itinerary.getItinerary(route.params.id);

    store.commit('page/setTitle', itinerary.title);
    store.commit('page/setBanner', '');

    return {
      itinerary: itinerary.data
    };
  },
}
</script>
