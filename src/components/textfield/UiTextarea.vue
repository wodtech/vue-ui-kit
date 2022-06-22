<template>
  <div>
    <slot name="label">
      <span class="label">{{ textLabel }}</span>
    </slot>
    <v-textarea
      :rules="rules"
      auto-grow
      outlined
      :placeholder="placeholder"
      :rows="rowsCount"
      :row-height="rowsHeight"
      @input="handleInput"
      :value="value"
      :disabled="disabledField"
    >
      <template v-slot:message="{ message }">
        <div class="font-weight-bold text-caption errorField">
          {{ message }}
        </div>
      </template>
    </v-textarea>
  </div>
</template>
<script>
export default {
  name: "UiTextarea",
  data() {
    return {
      textValue: "",
    };
  },
  props: {
    value: {},
    placeholder: {
      type: String,
      default: "Enter your text",
    },
    textLabel: {
      type: String,
      required: true,
    },
    rules: {
      type: Array,
      default: () => [],
    },
    disabledField: {
      type: Boolean,
      default: false,
    },
    rowsCount: {
      type: Number,
      default: 6,
    },
    rowsHeight: {
      type: Number,
      default: 35,
    },
  },
  methods: {
    handleInput(val) {
      this.$emit("input", val);
    },
  },
};
</script>
<style lang="scss" scoped>
.label {
  color: var(--text-field-font-normal);
}
.errorField {
  color: var(--text-field-error-color) !important;
  padding-left: 1px;
  border-radius: 0 !important;
}
</style>