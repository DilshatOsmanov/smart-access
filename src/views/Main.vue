<template>
  <div class="row">
    <div class="col-lg-3">
      <div class="card" style="height: calc(100% - 24px)">
        <div class="card-body">
          <h4 class="card-title">Ваш QR</h4>
          <p class="card-subtitle mb-4">Отсканируйте при входе</p>
          <img
            class="d-block img-fluid mx-auto"
            style="height: calc(100% - 80px); object-fit: contain"
            src="@/assets/images/qr.png"
            alt="qr code"
          />
        </div>
      </div>
    </div>

    <div class="col-lg-9">
      <LastVisitTable />
    </div>
  </div>

  <div class="row">
    <div class="col-xl-8">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">График посещений</h4>
          <p class="card-subtitle mb-4">С 1 января 2023 г. и далее</p>

          <MainGraph />
        </div>
      </div>
    </div>

    <div class="col-xl-4">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Диаграмма посещений</h4>
          <p class="card-subtitle mb-4">Статистика по группам за месяц</p>

          <PieGraph />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import LastVisitTable from "@/components/LastVisitTable.vue";
import MainGraph from "@/components/MainGraph.vue";
import PieGraph from "@/components/PieGraph.vue";

export default defineComponent({
  name: "main-page",
  components: {
    LastVisitTable,
    MainGraph,
    PieGraph,
  },
  setup() {
    return {};
  },
});
</script>
