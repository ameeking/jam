<template>
  <div class="location-map" v-if="markers.length > 0">
    <GoogleMaps :mapConfig="mapConfig" :apiKey="apiKey">
      <template slot-scope="{ google, map }">
        <GoogleMapsMarker
          v-for="marker in markers"
          :key="marker.id"
          :id="marker.id"
          :position="marker.position"
          :google="google"
          :map="map"
          :icon="marker.icon"
          @clicked="locationSelected"
        />
      </template>
    </GoogleMaps>
    <div class="location-map__content">
      <CardLocation :location="location" />
    </div>
  </div>
</template>

<script>
import GoogleMaps from '../GoogleMaps/GoogleMaps'
import GoogleMapsMarker from '../GoogleMaps/GoogleMapsMarker'
import GoogleMapsLine from '../GoogleMaps/GoogleMapsLine'
import { mapSettings } from './mapSettings'

import CardLocation from "~/components/CardLocation/CardLocation"
import { Grid, GridCol } from "~/node_modules/flyweight"

export default {
  components: {
    GoogleMaps,
    GoogleMapsMarker,
    GoogleMapsLine,
    CardLocation,
    Grid,
    GridCol
  },
  props: {
    locations: {
      type: Array,
      required: true
    },
  },
  data () {
    return {
      apiKey: this.$config.googleMapsApiKey,
      selectedLocation: null,
      icon: {
        path: "M 0, 0 m -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0",
        strokeOpacity: 0.7,
        strokeWeight: 4,
        strokeColor: "green",
        fillColor: "green",
        fillOpacity: 0.7,
        scale: 2
      },
      iconActive: {
        path: "M 0, 0 m -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0",
        strokeOpacity: 0.7,
        strokeWeight: 4,
        strokeColor: "red",
        fillColor: "red",
        fillOpacity: 0.7,
        scale: 2
      }
    }
  },
  methods: {
    locationSelected({id, marker}) {
      this.selectedLocation = id;
    },
    getActiveLocation(id) {
      if (id == this.selectedLocation) {
        return this.iconActive;
      }
      return this.icon;
    }
  },
  computed: {
    location() {
      return this.locations.find(location => location.id === this.selectedLocation);
    },
    markers() {
      let markers = [];

      this.locations.forEach((location) => {
        let icon = this.icon;
        if (this.selectedLocation == location.id) {
          icon = this.iconActive
        }

        markers.push({
          id: location.id,
          position: {
            lat: location.field_location.lat,
            lng: location.field_location.lng
          },
          icon: icon
        })
      });

      return markers;
    },
    mapConfig () {
      return {
        ...mapSettings,
        center: this.mapCenter
      }
    },
    mapCenter () {
      return this.markers[0].position
    }
  },
  created() {
    if (this.locations.length > 0 && this.locations[0].id) {
      this.selectedLocation = this.locations[0].id;
    }
  }
}
</script>

<style lang="scss" scoped>
.location-map {
  height: 400px;
  position: relative;
}

.location-map__content {
  position: absolute;
  top: 4rem;
  left: 10rem;
  width: 200px;
}
</style>