<template>
  <div
    :style="{ background: bgColor }"
    class="ui-badge d-inline-flex justify-center align-center text-center py-3 px-4"
  >
    <v-icon v-if="icon" size="32">
      {{ `$vuetify.icons.${icon}` }}
    </v-icon>
    <slot>{{ label }}</slot>
  </div>
</template>

<script>
export default {
  name: "UiBadge",
  data() {
    return {};
  },
  props: {
    bgColor: {
      default: "#081D35",
    },
    color: {},
    label: {},
    icon: {},
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.ui-badge {
  min-width: 50px;
  width: auto;
  border-radius: 8px;
  .v-icon {
    &::v-deep {
      svg {
        margin-bottom: 0 !important;
      }
    }
  }
}
</style>