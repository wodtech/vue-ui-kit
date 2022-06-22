import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import IconTelegram from "@/components/common/icons/IconTelegram.vue";
import IconMedium from "@/components/common/icons/IconMedium.vue";
import IconZone from "@/components/common/icons/IconZone.vue";
import IconItems from "@/components/common/icons/IconItems.vue";
import IconFish from "@/components/common/icons/IconFish.vue";
import IconLogin from "@/components/common/icons/IconLogin.vue";
import IconCoefficient from "@/components/common/icons/IconCoefficient.vue";
import IconQuality from "@/components/common/icons/IconQuality.vue";
import IconWOD from "@/components/common/icons/IconWOD.vue";
import IconXp from "@/components/common/icons/IconXp.vue";

import IconFishingMap from '@/components/common/icons/menu/IconFishingMap';
import IconCollection from '@/components/common/icons/menu/IconCollection';
import IconMarketplace from '@/components/common/icons/menu/IconMarketplace';
import IconCrafting from '@/components/common/icons/menu/IconCrafting';
import IconGuild from '@/components/common/icons/menu/IconGuild';
import IconRanking from '@/components/common/icons/menu/IconRanking';
import IconEvents from '@/components/common/icons/menu/IconEvents';
import IconAchievements from '@/components/common/icons/menu/IconAchievements';
import IconWorkbench from "@/components/common/icons/menu/IconWorkbench";

import IconCraft from "@/components/common/icons/IconCraft";
import IconDestroy from "@/components/common/icons/IconDestroy";
import IconRepair from "@/components/common/icons/IconRepair";
import IconHooks from "@/components/common/icons/IconHooks";


import IconAvatar from "@/components/common/icons/IconAvatar.vue";
import IconBox from "@/components/common/icons/IconBox";
import IconW  from "@/components/common/icons/IconW"
import IconRod from "@/components/common/icons/IconRod"
import IconEmptyData from "@/components/common/icons/IconEmptyData";

import IconFloat from "@/components/common/icons/fishing-session/IconFloat";
import IconHook from "@/components/common/icons/fishing-session/IconHook";
import IconLine from "@/components/common/icons/fishing-session/IconLine";
import IconReel from "@/components/common/icons/fishing-session/IconReel";
import IconRodGear from "@/components/common/icons/fishing-session/IconRod";
import IconSlotTooltip from "@/components/common/icons/fishing-session/IconSlotTooltip";
import EditIcon from "@/components/common/icons/IconEdit";
import IconMaterial from "@/components/common/icons/IconMaterial";

import ClearIcon from "@/components/common/icons/ui-icons/TextFieldClear"

Vue.use(Vuetify);

Vuetify.config.silent = true

export default new Vuetify({
  icons: {
    values: {
      medium: {
        component: IconMedium,
      },
      telegram: {
        component: IconTelegram,
      },
      items: {
        component: IconItems,
      },
      zone: {
        component: IconZone,
      },
      fish: {
        component: IconFish,
      },
      login: {
        component: IconLogin,
      },
      coefficient: {
        component: IconCoefficient,
      },
      quality: {
        component: IconQuality,
      },
      wod: {
        component: IconWOD,
      },
      xp: {
        component: IconXp,
      },
      'fishing-map': {
        component: IconFishingMap,
      },
      collections: {
        component: IconCollection,
      },
      marketplace: {
        component: IconMarketplace,
      },
      crafting: {
        component: IconCrafting,
      },
      guild: {
        component: IconGuild,
      },
      workbench: {
        component: IconWorkbench,
      },
      ranking: {
        component: IconRanking,
      },
      events: {
        component: IconEvents,
      },
      achievement: {
        component: IconAchievements,
      },
      avatar: {
        component: IconAvatar
      },
      box: {
        component: IconBox
      },
      'w-coin': {
        component: IconW
      },
      'rod-fishing': {
        component: IconRod
      },
      empty: {
        component: IconEmptyData
      },
      'rod': {
        component: IconRodGear
      },
      float: {
        component: IconFloat
      },
      hook: {
        component: IconHook
      },
      line: {
        component: IconLine
      },
      reel: {
        component: IconReel
      },
      'slot-tooltip': {
        component: IconSlotTooltip
      },
      edit: {
        component: EditIcon
      },
      repair: {
        component: IconRepair
      },
      craft: {
        component: IconCraft
      },
      destroy: {
        component: IconDestroy
      },
      hooks: {
        component: IconHooks
      },
      material: {
        component: IconMaterial
      },
      'clear-icon': {
        component: ClearIcon
      }
    },
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#7CEDDB",
        primary_light: "#C8FFF6",
        warning: "#FFC043",
        error: "#E11900",
        success: "#05944F",
        accent: "#F6B441",
        dark: "#12142A",
        yellow: "#FFE600",
        teal: "#67E8D3",
        purple: "#C463FF",
        orange: "#FEB11D",
        secondary: "rgba(124, 237, 219, 0.12)",
        secondary_new: "#85C0F0",
        info: "#408CFF",
        blue: "#41ABE1",
        dark_green: '#2F5664',
        gray: '#A8A5C6',
        main_bg: '#06101C',
        rd_slot: '#21486C',
        rd_blue_light: '#85C0F0',
        'rarity-common': "#A0A2C1",
        'rarity-uncommon': "#ffffff",
        'rarity-rare': "#41ABE1",
        'rarity-epic': "#C463FF",
        'rarity-legendary': "#FEB11D",
        'rarity-artifact': "#E11900",
      },
    },
  },
});
