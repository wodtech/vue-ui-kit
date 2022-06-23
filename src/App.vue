<template>
  <v-app style="height: 100%; overflow: auto" id="app">
    <div class="ui-kit-examples px-8">
      <h3>Uikit examples</h3>
      <v-switch
        v-model="$vuetify.theme.dark"
        hint="This toggles the global state of the Vuetify theme"
        inset
        label="Vuetify Theme Dark"
        persistent-hint
      ></v-switch>
      <div class="ui-button-examples">
        <UiButton label="test_label" />
        <UiButton is-disable label="Disabled btn" />
        <UiButton variant="secondary" size="md">
          <template #default>
            <v-icon> mdi-lightning-bolt </v-icon>
            <span>Test</span>
          </template>
        </UiButton>
        <UiButton icon>
          <v-icon> $vuetify.icons.rod </v-icon>
        </UiButton>
      </div>
      <div class="ui-slider-examples">
        <UiSlider color="#FFE600" :value="slider1" />
        <UiSlider color="green" :value="slider2" />
        <UiTickSlider
          min="0"
          :step="10"
          max="100"
          @change="updValue1"
          :value="range1"
        />
        <UiTickSlider
          color="#FFE600"
          min="0"
          :step="2"
          max="10"
          :value="range"
          @change="updValue"
        />
      </div>
      <div class="ui-segment-examples">
        <UiSegment :options="segment.options" v-model="segment.active" />
        <UiSegment
          is-transparent
          :options="segment.options"
          v-model="segment.active"
        />
      </div>
      <div class="ui-text-field-examples">
        <UiTextField
          v-model="inputValue"
          is-clearable
          :rules="rules"
          text-label="Lololo"
        >
        </UiTextField>
        <UiTextField
          v-model="inputValue2"
          disabled-field
         >
        </UiTextField>
        <UiTextarea
          v-model="inputValue3"
          text-label="false"
        ></UiTextarea>
      </div>
      <div class="ui-progress-examples">
        <UiProgress
          style="width: 200px"
          :lvl="3"
          is-stats
          :exp_overlevel_n="1000"
          :max_exp_n="2134"
          fake-level
          :fillWidth="53"
        />
        <UiProgress
          style="width: 200px"
          :lvl="3"
          is-stats
          :exp_overlevel_n="4000"
          :max_exp_n="2134"
          over-level
          fake-level
          :fillWidth="100"
        />
      </div>
      <div class="ui-checkbox-examples">
        <UiCheckBox v-model="checkBoxValue1" :rarity="6" is-disabled />
        <UiCheckBox :rarity="6" v-model="checkBoxValue1" />
        <UiCheckBox v-model="checkBoxValue3" is-disabled >
          <UiRarityBadge :rarity="4"></UiRarityBadge>
        </UiCheckBox>
        <UiCheckBox :value="true" label="test"> </UiCheckBox>
        <span>{{ checkBoxValue2 }}</span>
        <UiCheckBox :rarity="3" v-model="checkBoxValue2" />
        <UiRarityBadge :rarity="1"></UiRarityBadge>
        <UiRarityBadge :rarity="2"></UiRarityBadge>
        <UiRarityBadge :rarity="3"></UiRarityBadge>
        <UiRarityBadge :rarity="4"></UiRarityBadge>
        <UiRarityBadge :rarity="5"></UiRarityBadge>
      </div>
      <div class="ui-badge-examples">
        <UiBadge icon="empty" class="text-h5">Test</UiBadge>
      </div>
      <v-icon size="24">
        $vuetify.icons.my-guild
      </v-icon>
      <v-icon size="24">
        $vuetify.icons.guild-list
      </v-icon>
      <v-icon size="24">
        $vuetify.icons.guild-invites
      </v-icon>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      checkBoxValue1: true,
      checkBoxValue2: true,
      checkBoxValue3: false,
      slider1: [0, 30],
      slider2: [0, 30],
      range: [0, 10],
      range1: [0, 40],
      inputValue: "",
      inputValue2: "test",
      inputValue3: "",
      rules: [(value) => (value || "").length <= 20 || "Max 20 characters"],
      segment: {
        options: [
          { label: "Repair", icon: "repair" },
          { label: "Craft", icon: "workbench" },
        ],
        active: "Repair",
      },
    };
  },
  methods: {
    updValue(val) {
      this.range = val;
    },
    updValue1(val) {
      this.range1 = val;
    },
  },
};
</script>

<style scoped lang="scss">
.ui-kit {
  position: relative;
  width: 100%;
  padding-left: 200px;
  background: #06101c;
  height: 100vh;
  overflow-y: auto;
  &-examples {
    display: flex;
    flex-direction: column;
    height: 100vh;
    .ui-text-field-examples {
      max-width: 407px;
    }
  }
}
</style>
