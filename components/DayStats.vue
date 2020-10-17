<template>
  <div :class="b()">
    <div :class="b('main', {animated: statsExpanded})">
      <span :class="b('date')">{{ day.date }}</span>
      <i
        :class="b('bar')"
        :style="barStyle"
      />
      <s-button
        :class="b('expand', {animated: statsExpanded})"
        :badge="day.data.length"
        :display-badge="statsExpanded"
        @click="toggleExpandedStats"
      >
        <i-expand :class="b('icon', {expanded: statsExpanded})" />
      </s-button>
    </div>
    <extended-day-stats :class="b('extended-stats', {open: statsExpanded})" :smokes="day.data" />
  </div>
</template>

<script>
import SButton from '~/components/ui/SButton.vue';
import ExtendedDayStats from '~/components/ExtendedDayStats.vue';
import IExpand from '~/components/icons/IExpand.vue';

export default {
  name: 'DayStats',
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
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2.3rem;
  grid-template-rows: 1rem 1rem;
  grid-gap: .3rem;

  padding: .3rem;

  width: 100%;
  min-height: 2rem;
}

.day-stats__main::before {
  content: "";
  position: absolute;

  width: 100%;
  height: 100%;

  background: #D9D9D9;

  border-radius: .6rem;

  opacity: 0;
  transition: opacity .4s;
}

.day-stats__main_animated::before {
  opacity: 1;
}

.day-stats__bar {
  display: block;

  grid-column: 1 / 2;
  grid-row: 2 / 3;

  height: 100%;

  background-color: #353535;

  border-radius: .6em;

  z-index: 10;
}

.day-stats__date {
  align-self: center;

  z-index: 10;
}

.day-stats__expand {
  position: relative;
  grid-column: 2 / 3;
  grid-row: 1 / 3;
}

.day-stats__expand::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: #D9D9D9;

  border-radius: .6rem;

  transform-origin: center center;
  transform: scale(1);
  transition: transform .2s;
}

.day-stats__expand_animated::before {
  transform: scale(1.2);
}

.day-stats__extended-stats {
  max-height: 0;
  padding: 0;
  transform: scale(0);
  transition: transform 0s;
}

.day-stats__extended-stats_open {
  padding: .6rem;
  max-height: 100%;
  transform: scale(1);
  transition: transform .4s;
}

.day-stats__icon {
  transform: rotate(0deg);
  transition: transform .4s;
}

.day-stats__icon_expanded {
  transform: rotate(180deg);
}

</style>
