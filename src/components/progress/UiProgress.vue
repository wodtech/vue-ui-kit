<template>
  <div :class="['progress-bar d-flex justify-space-around', positionComputed]">
    <div
      v-if="isStats"
      class="stats d-flex align-center justify-space-between my-1"
    >
      <div class="stats-lvl caption font-weight-bold">
        <span>{{ `LVL ` + lvl }}</span>
      </div>
      <div class="stats-xp">
        <span class="stats-xp-bold font-weight-bold caption">
          {{ exp_overlevel_n }}
        </span>
        <span class="caption">{{ `/${max_exp_n} XP` }}</span>
      </div>
    </div>
    <div :class="['progress', { pulse: overLevel && fakeLevel }]">
      <v-progress-linear :height="progressHeight" rounded v-model="fillWidth">
      </v-progress-linear>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lvl: {
      default: 1,
    },
    size: {
      default: "md",
    },
    progressWidth: {
      default: 116,
    },
    exp_overlevel_n: {
      default: false,
    },
    max_exp_n: {
      default: "top",
    },
    overLevel: {
      type: Boolean,
      default: false,
    },
    fakeLevel: {
      type: Boolean,
      default: false,
    },
    isStats: {
      type: Boolean,
      default: true,
    },
    fillWidth: {
      default: 0
    },
    placement: {

    }
  },
  mounted() {},
  computed: {
    positionComputed() {
      return this.placement === "top" ? "flex-column" : "flex-column-reverse";
    },
    progressHeight() {
      if (this.size === "md") {
        return 6;
      } else if (this.size === "lg") {
        return 8;
      } else {
        return 6;
      }
    },
  },
};
</script>

<style scoped lang="scss">
$accentColor: #85c0f0;
.progress-bar {
  position: relative;
  .progress {
    width: 100%;
    pointer-events: none;
    transform: scale(1);
    &.pulse {
      animation: pulse 2s infinite;
      border-radius: 10px;
    }
    @keyframes pulse {
      0% {
        transform: scale(0.96);
        box-shadow: 0 0 0 0 rgba(61, 200, 217, 0.7);
      }

      70% {
        transform: scale(1);
        box-shadow: 0 0 0 6px rgba(0, 0, 0, 0);
      }

      100% {
        transform: scale(0.96);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }
    }
  }
  .stats {
    color: #85c0f0;
    &-xp {
      text-align: right;
    }
  }
}
</style>