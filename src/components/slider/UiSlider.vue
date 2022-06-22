<template>
  <v-range-slider
    ref="slider"
    class="ui-slider"
    :max="max"
    :min="min"
    :step="step"
    :value="value"
    thumb-label="always"
    :thumb-color="color"
    @change="$emit('change', $event)"
    :color="color"
    track-color="#1D2635ii"
  >
    <template v-slot:thumb-label="{ value }">
      <span :style="{ color: color }">{{ value }}</span>
    </template>
  </v-range-slider>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      id: null,
    };
  },
  props: {
    value: {},
    color: {
      default: "#FBFBFC",
    },
    step: {
      default: 1,
    },
    min: { default: "0" },
    max: { default: "100" },
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
    .v-slider__thumb-label {
      background-color: transparent !important;
      transform: translateY(-20%) translateY(45px) translateX(-50%)
        rotate(45deg) !important;
    }
  }
}
</style>