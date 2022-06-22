<template>
  <VBtn
    v-bind="$attrs"
    v-on="$listeners"
    :rounded="rounded"
    :ripple="{ class: `main_bg--text` }"
    :class="[`ui-button`, variant, size, { _disabled: isDisable }]"
  >
    <slot>
      {{ label }}
    </slot>
  </VBtn>
</template>

<script>
const variants = ["primary", "secondary", "transparent"];
const sizes = ["lg", "md"];
export default {
  name: "UiButton",
  props: {
    label: {
      type: String,
    },
    variant: {
      type: String,
      default: variants[0],
    },
    rounded: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: sizes[0],
    },
    isDisable: {
      type: Boolean,
    },
  },
};
</script>

<style scoped lang="scss">
.ui-button {
  transition: background-color 0.2s ease-in-out;
  &.v-btn {
    min-width: 0;
    &:not(.v-btn--icon) {
      &.lg {
        padding: 0 56px;
      }
      &.md {
        padding: 0 44px;
      }
    }
    &.primary {
      background-color: var(--button-bg-primary) !important;
      color: var(--button-text-primary);
      &:hover {
        background-color: var(--button-hover-primary) !important;
      }
    }
    &.transparent {
      background-color: transparent !important;
      color: #374a60;
    }
    &.secondary {
      background-color: var(--button-bg-secondary) !important;
      color: var(--button-text-secondary);
      &:hover {
        background-color: var(--button-hover-secondary) !important;
      }
    }
    &.lg {
      min-width: 56px;
      height: 56px;
    }
    &.md {
      min-width: 40px;
      height: 44px;
    }
    &.small {
      min-width: 40px;
      height: 44px;
    }
    &._disabled {
      background-color: #102436 !important;
      color: #183856;
      pointer-events: none;
    }
  }
}
</style>