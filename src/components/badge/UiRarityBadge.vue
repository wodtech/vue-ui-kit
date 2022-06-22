<template>
  <div class="rarity-icon unselectable d-flex justify-start">
    <div
      style="margin-left: -12px;"
      class="d-flex justify-start align-center"
    >
      <v-responsive
        max-width="40px"
        max-height="22px"
        width="45px"
        height="45px"
      >
        <v-img
          width="100%"
          :src="rarities[rarity].crystal"
          contain
          class="image"
        ></v-img>
      </v-responsive>
      <div class="d-flex align-center justify-center flex-grow-1">
        <div
          style="height: 15px"
          class="font-weight-bold text-uppercase d-flex text-caption"
          :class="rarities[rarity].name"
        >
          {{ rarities[rarity].name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Common, Uncommon, Rare, Epic, Legendary, Artifact } from "@/assets/rarity/rarityVars";


export default {
  name: "UiRarityBadge",
  data() {
    return {};
  },
  props: {
    rarity: {},
  },
  computed: {
    rarities: () => {
      return {
        1: {
          crystal: Common,
          name: "common",
        },
        2: {
          crystal: Uncommon,
          name: "uncommon",
        },
        3: {
          crystal: Rare,
          name: "rare",
        },
        4: {
          crystal: Epic,
          name: "epic",
        },
        5: {
          crystal: Legendary,
          name: "legendary",
        },
        6: {
          crystal: Artifact,
          name: "artifact",
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.rarity-icon {
  .image {
    pointer-events: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: unset;
  }
}
.common {
  color: var(--text-common);
}
.uncommon {
  color: var(--text-uncommon);
}
.rare {
  color: var(--text-rare);
}
.epic {
  color: var(--text-epic);
}
.legendary {
  color: var(--text-legendary);
}
.artifact {
  color: var(--text-artifact);
}
</style>