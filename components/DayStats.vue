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
        :badge="(!statsExpanded) ? day.data.length : null"
        @click="toggleExpandedStats"
      >
        <i-expand :expanded="statsExpanded" />
      </s-button>
    </div>
    <extended-day-stats v-if="statsExpanded" :smokes="day.data" />
  </div>
</template>

<script>
import SButton from '~/components/ui/SButton.vue';
import ExtendedDayStats from '~/components/ExtendedDayStats.vue';
import IExpand from '~/components/icons/IExpand.vue';

export default {
  components: {
    SButton,
    ExtendedDayStats,
    IExpand,
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

  background-color: #353535;

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
