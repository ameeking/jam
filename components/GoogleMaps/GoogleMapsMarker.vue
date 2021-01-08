<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    google: {
      type: Object,
      required: true
    },
    map: {
      type: Object,
      required: true
    },
    position: {
      type: Object,
      required: true
    },
    icon: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      marker: null
    }
  },
  watch: {
    icon: function(newVal, oldVal) {
      this.marker.setIcon(this.icon);
    }
  },
  mounted() {
    this.marker = new this.google.maps.Marker({
      position: this.position,
      map: this.map,
      icon: this.icon
    });

    this.marker.addListener("click", () => {
      this.$emit('clicked', {id: this.id, marker: this.marker});
    });
  },
  render() {}
}
</script>