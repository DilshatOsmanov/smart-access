<template>
  <div class="row">
    <div class="col-lg-3">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Ваш QR</h4>
          <p class="card-subtitle mb-4">Отсканируйте при входе</p>
          <img
            class="d-block img-fluid mx-auto"
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
    <div class="col-xl-6">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Sales Analytics</h4>
          <p class="card-subtitle mb-4">
            From date of 1st Jan 2019 to continue
          </p>

          <DoughnutGraph />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import LastVisitTable from "@/components/LastVisitTable.vue";
import DoughnutGraph from "@/components/DoughnutGraph.vue";

export default defineComponent({
  name: "main-page",
  components: {
    LastVisitTable,
    DoughnutGraph,
  },
  setup() {
    return {};
  },
});
</script>
