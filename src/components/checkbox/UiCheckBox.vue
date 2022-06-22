<template>
  <div class="d-flex align-start flex-column mb-2">
    <label
      class="label d-flex align-center"
    >
      <input
        @change="$emit('input', $event.target.checked)"
        class="checkInput"
        :checked="value"
        :disabled="isDisabled"
        type="checkbox"
      />
      <span class="customInput"></span>
      <span class="slot-wrapper unselectable">
        <UiRarityBadge v-if="rarity" :rarity="rarity"></UiRarityBadge>
        <slot v-else class="checkLabel">{{ label }}</slot>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "UiCheckBox",
  data() {
    return {};
  },
  props: {
    value: {},
    label: {
      type: String,
    },
    isDisabled: {
      type: Boolean,
    },
    rarity: {
      default: null
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.label {
  position: relative;
  max-height: 22px;
  color: white;
}
.checkInput {
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
}
.slot-wrapper {
  margin-left: 12px;
  &.unselectable {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Chrome/Safari/Opera */
    -khtml-user-select: none;    /* Konqueror */
    -moz-user-select: none;      /* Firefox */
    -ms-user-select: none;       /* Internet Explorer/Edge */
    user-select: none;           /* Non-prefixed version, currently */
  }
  height: 20px;
}
.customInput {
  cursor: pointer;
  width: 14px;
  height: 14px;
  background: var(--ui-checkbox-default);
}
.checkInput:checked + .customInput {
  background: var(--ui-checkbox-checked);
}

.checkInput:hover + .customInput {
  background: var(--ui-checkbox-hover);
}
.checkInput:hover:checked + .customInput {
  background: var(--ui-checkbox-checked);
}
.checkInput:disabled + .customInput {
  background: var(--ui-checkbox-disabled);
}
.checkInput:disabled:checked + .customInput {
  background: var(--ui-checkbox-checked-disabled);
}
.checkInput:disabled + .label {
  cursor: not-allowed;
}
.checkInput:disabled:checked + .label {
  cursor: not-allowed;
}
</style>