<template>
  <svg class="donut" width="100%" height="320px" viewBox="0 0 42 42">
    <circle
      class="donut-hole"
      cx="21"
      cy="21"
      r="15.91549430918954"
      fill="#fff"
    ></circle>

    <circle
      v-for="(visit, i) in visits"
      :key="visit.color"
      :stroke="visit.color"
      :style="pieStyles[i]"
      cx="21"
      cy="21"
      r="15.91549430918954"
      fill="transparent"
      stroke-dasharray="0 100"
      stroke-dashoffset="25"
    ></circle>

    <g class="chart-text">
      <text x="50%" y="50%" class="chart-number" id="totalValue">
        {{ total }}
      </text>
      <text x="50%" y="50%" class="chart-label">Посещений в месяц</text>
    </g>
  </svg>

  <div class="d-flex justify-content-center flex-wrap">
    <b
      class="visit-item-tooltip mx-1"
      v-for="visit in visits"
      :key="visit.color"
      ><span :style="{ 'background-color': visit.color }"></span
      >{{ visit.group_title }}</b
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const visits = ref([
      { color: "#aaddff", group_title: "ПН-СР-ПТ", count: 500 },
      { color: "#ce4b99", group_title: "ВТ-СР", count: 800 },
      { color: "#b1c94e", group_title: "ВТ-ЧТ-СБ", count: 2700 },
    ]);

    const total = visits.value.reduce((total, visit) => total + visit.count, 0);
    const pieStyles: any = [];
    let cumulativePercentage = 100;

    for (let i = 0; i < visits.value.length; i++) {
      const element = visits.value[i];
      const percentage = (element.count / total) * 100;

      pieStyles.push({
        "stroke-dasharray": `${percentage}px ${100 - percentage}px`,
        "stroke-dashoffset": `${cumulativePercentage}px`,
      });

      cumulativePercentage -= percentage;
    }

    return {
      visits,
      total,
      pieStyles,
    };
  },
});
</script>

<style lang="scss" scoped>
circle {
  transition: stroke-dasharray 0.5s ease-in-out 0s,
    stroke-dashoffset 0.5s ease-in-out 0s;

  stroke-width: 3;
  transition: all 0.3s ease-out;
  cursor: pointer;

  &:hover {
    stroke-width: 4;
  }
}
.visit-item-tooltip {
  font-size: 12px;
  display: flex;
  align-items: center;

  & span {
    width: 6px;
    height: 6px;
    background-color: #000;
    display: inline-block;
    border-radius: 100%;
    margin-right: 2px;
  }
}

.chart-text {
  fill: #000;
  transform: translateY(0.25em);
}

.chart-number {
  font-size: 0.4em;
  line-height: 1;
  text-anchor: middle;
  transform: translateY(-0.25em);
}

.chart-label {
  font-size: 0.145em;
  text-transform: uppercase;
  text-anchor: middle;
  transform: translateY(0.7em);
}
</style>