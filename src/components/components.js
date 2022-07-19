import Vue from "vue";

import UiButton from "@/components/button/UiButton";
import UiProgress from "@/components/progress/UiProgress";
import UiSegment from "@/components/segment/UiSegment";
import UiSlider from "@/components/slider/UiSlider";
import UiTickSlider from "@/components/slider/UiTickSlider";
import UiTextField from "@/components/textfield/UiTextField";
import UiTextarea from "@/components/textfield/UiTextarea";
import UiCheckBox from "@/components/checkbox/UiCheckBox";
import UiRarityBadge from "@/components/badge/UiRarityBadge";
import UiBadge from "@/components/badge/UiBadge";

Vue.config.productionTip = false;

import "@/styles/layout.scss";
import "@/styles/vars.scss";
import "@/styles/variables.scss"

// eslint-disable-next-line no-unused-vars
export const DefishUiKit = function(Vue, options) {
  Vue.component("UiButton", UiButton)
  Vue.component("UiProgress", UiProgress)
  Vue.component("UiSegment", UiSegment)
  Vue.component("UiSlider", UiSlider)
  Vue.component("UiTickSlider", UiTickSlider)
  Vue.component("UiTextField", UiTextField)
  Vue.component("UiTextarea", UiTextarea)
  Vue.component("UiCheckBox", UiCheckBox)
  Vue.component("UiRarityBadge", UiRarityBadge)
  Vue.component("UiBadge", UiBadge)
}
