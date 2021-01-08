<template>
  <div class="itinerary-map">
    <GoogleMaps :mapConfig="mapConfig" apiKey="">
      <template slot-scope="{ google, map }">
        <GoogleMapsMarker
          v-for="marker in markers"
          :key="marker.id"
          :id="marker.id"
          :marker="marker"
          :google="google"
          :map="map"
          @clicked="onClickChild"
        />
        <GoogleMapsLine
          v-for="line in lines"
          :key="line.id"
          :path.sync="line.path"
          :google="google"
          :map="map"
        />
      </template>
    </GoogleMaps>
    <div class="itinerary-map__content">
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
      // markers: [
      //   { id: 'a', position: { lat: -45.0063636, lng: 168.550219 } },
      //   { id: 'b', position: { lat: -44.7044998, lng: 169.1028899 } }
      // ],
      // lines: [
      //   { id: '1', path: [{ lat: -45.0063636, lng: 168.550219 }, { lat: -44.7044998, lng: 169.1028899 }] }
      // ],
    }
  },
  methods: {
    onClickChild(id) {
      console.log(id);
    }
  },
  computed: {
    location() {
      return this.locations[0];
    },
    markers() {
      let markers = [];

      this.locations.forEach(function (location) {
        markers.push({
          id: location.id,
          position: {
            lat: location.field_geolocation.lat,
            lng: location.field_geolocation.lng
          }
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
      return this.markers[1].position
    }
  },
}
</script>

<style lang="scss" scoped>
.itinerary-map {
  height: 400px;
  position: relative;
}

.itinerary-map__content {
  position: absolute;
  top: 4rem;
  left: 4rem;
  width: 200px;
}
</style>