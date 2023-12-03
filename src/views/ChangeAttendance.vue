<template>
  <router-link class="btn btn-success" :to="`/attendance/${id}/users`">
    Добавить участников
  </router-link>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "change-attendance",

  setup() {
    const route = useRoute();
    const id = ref(parseInt(route.params.id as any));

    return { id };
  },
});
</script>

<style lang="scss" scoped>
</style>