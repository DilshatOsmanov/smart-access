<template>
  <div class="row">
    <div class="col-12">
      <ChangeAccountData />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ChangeAccountData from "@/components/profile/ChangeAccountData.vue";

export default defineComponent({
  name: "change-account-data",
  components: {
    ChangeAccountData,
  },
  setup() {
    return {};
  },
});
</script>


