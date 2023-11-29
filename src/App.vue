<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import { useI18n } from "vue-i18n/index";

export default defineComponent({
  name: "app",
  setup() {
    const i18n = useI18n();

    onMounted(() => {
      if (localStorage.getItem("lang")) {
        i18n.locale.value = localStorage.getItem("lang") as string;
      } else {
        i18n.locale.value = "ru";
      }
    });
  },
});
</script>