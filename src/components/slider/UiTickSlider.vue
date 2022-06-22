<template>
  <v-range-slider
    ref="slider"
    :class="[`ui-slider`, type]"
    :max="max"
    :min="min"
    @input="$emit('change', $event)"
    :tick-labels="tickLabels"
    :step="step"
    :value="value"
    ticks
    :thumb-color="color"
    :tick-size="14"
    :color="color"
    :track-color="trackColor"
  >
    <template v-slot:label="{ value }">
      <span style="margin-left: 5px">{{ value }}</span>
    </template>
  </v-range-slider>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      id: null,
      slider: null,
    };
  },
  props: {
    value: {},
    color: {
      default: "#C463FF",
    },
    step: {
      default: 1,
    },
    type: {
      default: "",
    },
    min: { default: "0" },
    max: { default: "100" },
    trackColor: {
      default: "#1C212F",
    },
  },
  computed: {
    tickLabels() {
      const len = this.max / this.step;
      let labels = [];
      for (let i = 1; i <= len; i++) {
        labels.push(i * this.step);
      }
      return Number(this.min) === 0 ? ["all", ...labels] : [...labels];
    },
  },
  watch: {
    value(val) {
      this.updateThumbs(val);
    },
  },
  mounted() {
    this.slider =
      this.$refs.slider.$el.getElementsByClassName(`v-slider__tick`);
    this.updateThumbs(this.value);
  },
  methods: {
    updateThumbs(value) {
      //change label thumbs color
      let i = Number(this.min) > 0 ? 1 : 0;
      for (let elem of this.slider) {
        const val = i * this.step;
        if (val >= value[0] && val <= value[1]) {
          elem.style.backgroundColor = this.color;
        } else {
          elem.style.backgroundColor = this.trackColor;
        }
        i++;
      }
    },
  },
};
</script>

<style lang="scss">
.ui-slider {
  position: relative;
  &-min-label {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .v-slider {
    .v-slider__tick {
      &:last-child {
        .v-slider__tick-label {
          margin-left: 6px !important;
        }
      }
      .v-slider__tick-label {
        width: 15px;
        text-align: center;
      }
    }
  }
}
</style>
