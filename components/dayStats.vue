<template>
<div class="day-stats">
  <span class="day-stats__date">{{day.date}}</span>
  <i
    class="day-stats__bar"
    :style="barStyle"
  >
  </i>
</div>
</template>

<script>

export default {
  props: {
    day: {
      type: Object
    },
    max: {
      type: Number
    }
  },
  computed: {
    date() {
      return new Date(this.day.date)
    },
    barStyle() {
      return `width: ${100 * this.day.data.length / this.max}%`;
    },
  },
}


</script>

<style>
.day-stats {
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

  background-color: blue;

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