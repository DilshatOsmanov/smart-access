<template>
  <header id="page-topbar">
    <div class="container-fluid">
      <div class="navbar-header">
        <div class="d-flex align-items-center">
          <div class="navbar-brand-box mr-3 mr-lg-5">
            <router-link to="/main" class="logo">
              <span class="d-none d-sm-block">
                <img src="@/assets/images/logo.svg" alt="" height="22" />
              </span>
              <i class="d-sm-none">
                <img
                  v-if="!hasHistory"
                  src="@/assets/images/logo-small.svg"
                  alt=""
                  height="24"
                />
                <i
                  v-else
                  @click="$router.go(-1)"
                  class="feather-chevron-left font-size-36"
                ></i>
              </i>
            </router-link>
          </div>
        </div>

        <router-link to="/profile" class="btn header-item header-btn p-0">
          <img
            class="rounded-circle header-profile-user"
            src="@/assets/images/users/avatar-1.jpg"
            alt="Header Avatar"
          />
        </router-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const hasHistory = ref(false);

    watch(route, () => {
      if (
        route.path == "/main" ||
        route.path == "/attendance" ||
        route.path == "/users" ||
        route.path == "/tourniquets" ||
        route.path == "/profile"
      )
        hasHistory.value = false;
      else hasHistory.value = true;
    });

    return {
      hasHistory,
    };
  },
});
</script>