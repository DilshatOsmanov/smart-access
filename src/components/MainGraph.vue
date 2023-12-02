<template>
  <div class="chart">
    <div
      v-for="visit in visits"
      :key="visit.month"
      class="chart__item"
      :style="{
        width: 100 / visits.length + '%',
        height: (visit.count * 100) / maxCount + '%',
        'min-width': '50px',
      }"
    >
      {{ visit.count }}
      <span class="chart__item-month">{{ visit.month }} </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const visits = ref([
      { month: "01.2023", count: 500 },
      { month: "02.2023", count: 1800 },
      { month: "03.2023", count: 2700 },
      { month: "04.2023", count: 2200 },
      { month: "05.2023", count: 2500 },
      { month: "06.2023", count: 2800 },
      { month: "07.2023", count: 1000 },
      { month: "08.2023", count: 3200 },
      { month: "09.2023", count: 1500 },
      { month: "10.2023", count: 800 },
      { month: "11.2023", count: 4000 },
      { month: "12.2023", count: 200 },
    ]);

    const maxCount = Math.max(...visits.value.map((o) => o.count));

    return {
      visits,
      maxCount,
    };
  },
});
</script>


<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 338px;
  display: flex;
  align-items: flex-end;
  overflow-x: auto;
  padding-bottom: 20px;

  &__item {
    background-color: darksalmon;
    margin: 0 1px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    position: relative;
    white-space: nowrap;
  }

  &__item-month {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    color: #000;
  }
}
</style>