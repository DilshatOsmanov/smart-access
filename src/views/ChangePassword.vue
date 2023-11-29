<template>
  <div class="row">
    <div class="col-12">
      <ChangePassword />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ChangePassword from "@/components/profile/ChangePassword.vue";

export default defineComponent({
  name: "change-password",
  components: {
    ChangePassword,
  },
  setup() {
    return {};
  },
});
</script>
