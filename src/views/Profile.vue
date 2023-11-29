<template>
  <div class="wrapper-forms">
    <div class="content-forms">
      <div class="row d-none d-lg-flex">
        <div class="col-lg-8">
          <ChangeAccountData />
        </div>

        <div class="col-lg-4">
          <ChangePassword />
        </div>
      </div>

      <div class="d-lg-none">
        <div class="card card-body p-2 px-3">
          <router-link
            to="/change-account"
            class="text-secondary d-flex align-items-center"
          >
            <span>Изменить данные профиля</span>
            <i class="ml-auto feather-chevron-right font-size-18"></i>
          </router-link>
        </div>
        <div class="card card-body p-2 px-3">
          <router-link
            to="/change-password"
            class="text-secondary d-flex align-items-center"
          >
            <span>Изменить пароль</span>
            <i class="ml-auto feather-chevron-right font-size-18"></i>
          </router-link>
        </div>
      </div>

      <div class="card card-body">
        <h4 class="card-title">Язык приложения</h4>

        <div class="d-flex">
          <button class="btn btn-primary mw-mc mr-1">Русский</button>
          <button class="btn btn-secondary mw-mc">Казахский</button>
        </div>
      </div>
    </div>

    <div class="exit-inner">
      <div class="card card-body text-center p-2">
        <router-link to="/sign-in" class="text-danger">Выйти</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ChangeAccountData from "@/components/profile/ChangeAccountData.vue";
import ChangePassword from "@/components/profile/ChangePassword.vue";

export default defineComponent({
  name: "sign-in",
  components: {
    ChangeAccountData,
    ChangePassword,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.wrapper-forms {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: calc(
    100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 220px
  );

  @media screen and (max-width: 576px) {
    min-height: calc(
      100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 180px
    );
  }
}
.content-forms {
  flex: 1 0 auto;
}
.exit-inner {
  flex: 0 0 auto;
}
</style>