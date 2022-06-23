<template>
  <div :class="['ui-segment', borderStyle]">
    <UiButton
      @click="$emit('input', option.label)"
      :key="i"
      :rounded="!isTransparent"
      :class="[
        'uikit-btn',
        { _active_border: isBottomBorder(option.label === value) },
      ]"
      size="md"
      v-for="(option, i) in options"
      :variant="isActive(option.label === value)"
    >
      <v-icon
        v-if="option.icon"
        :color="isActiveIcon(option.label === value)"
        v-text="`$vuetify.icons.${option.icon}`"
        left
        size="17"
      />
      {{ option.label }}
    </UiButton>
  </div>
</template>

<script>
import UiButton from "../button/UiButton";
export default {
  name: "UiSegment",
  components: {
    UiButton,
  },
  props: {
    options: {},
    value: {},
    isTransparent: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    borderStyle() {
      return this.isTransparent ? "_transparent" : "_default";
    },
  },
  methods: {
    isActive(val) {
      return val
        ? this.isTransparent
          ? "transparent"
          : "primary"
        : "transparent";
    },
    isActiveIcon(val) {
      return val
        ? this.isTransparent
          ? "primary"
          : "var(--segment-text)"
        : "var(--segment-text-default)";
    },
    isBottomBorder(val) {
      return this.isTransparent && val ? "_active_border" : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-segment {
  display: inline-block;
  color: #757794;
  &._default {
    border-radius: 70px;
    border: 1px solid var(--segment-border);
  }
  &._transparent {
    border-bottom: 1px solid var(--segment-border-bottom);
  }
  .uikit-btn {
    &::v-deep {
      padding: 0 16px !important;
      color: var(--segment-text-default) !important;
    }
    &.primary {
      &::v-deep {
        color: var(--segment-text) !important;
      }
    }
    &._active_border {
      position: relative;
      &::v-deep {
        color: var(--button-text-secondary) !important;
      }
      &:after {
        border-bottom: 2px solid var(--segment-active-border-bottom);
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        bottom: 0;
        margin: 0 auto;
      }
    }
  }
  .active {
    background: var(--segment-bg);
    color: var(--segment-text) !important;
  }
}
</style>