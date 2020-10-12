<template>
  <div class="day-stats">
    <div class="day-stats__main">
      <span class="day-stats__date">{{ day.date }}</span>
      <i
        class="day-stats__bar"
        :style="barStyle"
      />
      <s-button
        class="day-stats__expand"
        :expanded="statsExpanded"
        :badge="day.data.length"
        @click="toggleExpandedStats"
      />
    </div>
    <extended-day-stats v-if="statsExpanded" :smokes="day.data" />
  </div>
</template>

<script>
import sButton from '~/components/ui/sButton.vue';
import ExtendedDayStats from '~/components/ExtendedDayStats.vue';

export default {
  components: {
    sButton,
    ExtendedDayStats,
  },
  props: {
    day: {
      required: true,
      type: Object,
    },
    max: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      statsExpanded: false,
    };
  },
  computed: {
    date() {
      return new Date(this.day.date);
    },
    barStyle() {
      return `width: ${(100 * this.day.data.length) / this.max}%`;
    },
  },
  methods: {
    toggleExpandedStats() {
      this.statsExpanded = !this.statsExpanded;
    },
  },
};

</script>

<style>
.day-stats {
  width: 100%;
}

.day-stats__main {
  display: grid;
  grid-template-columns: 1fr 2.3rem;
  grid-template-rows: 1rem 1rem;
  grid-gap: .3rem;

  width: 100%;
  min-height: 2rem;
}

.day-stats__svg {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.day-stats__bar {
  display: block;

  grid-column: 1 / 2;
  grid-row: 2 / 3;

  height: 100%;

  background-color: #2D2E2E;

  border-radius: .6em;
}

.day-stats__date {
  align-self: center;
}

.day-stats__expand {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
}
</style>
