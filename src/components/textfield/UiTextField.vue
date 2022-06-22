<template>
  <div>
    <slot name="label">
      <span class="label">{{ textLabel }}</span>
    </slot>
    <v-text-field
      @input="handleInput"
      @update:error="handleChange"
      :value="value"
      :disabled="disabledField"
      :placeholder="placeholder"
      rounded
      outlined
      :clearable="isClearable"
      :class="changeColor()"
      clear-icon="$vuetify.icons.clear-icon"
      :rules="rules"
    >
      <template v-slot:message="{ message }">
        <div class="font-weight-bold text-caption errorField">
          {{ message }}
        </div>
      </template>
    </v-text-field>
  </div>
</template>

<script>
export default {
  name: "UiTextField",
  data() {
    return {
      textValue: "",
      stateError: false,
    };
  },
  props: {
    value: {},
    isClearable: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "Enter your text",
    },
    rules: {
      type: Array,
      default: () => [],
    },
    textLabel: {
      type: String,
    },
    disabledField: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    handleInput(val) {
      this.$emit("input", val);
    },
    handleChange(e) {
      this.stateError = e;
    },
    changeColor() {
      if (this.stateError) {
        return "form-input";
      }
    },
  },
};
</script>

<style lang="scss">
.label {
  color: var(--text-field-font-normal);
}
.errorField {
  color: var(--text-field-error-color) !important;
  padding-left: 1px;
  border-radius: 0!important;
}
.form-input {
  input {
    color: var(--text-field-error-color) !important;
  }
}
</style>