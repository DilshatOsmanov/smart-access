<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="d-flex align-items-center min-vh-100">
          <div class="w-100 d-block bg-white shadow rounded my-5">
            <div class="row">
              <div
                class="col-lg-5 d-none d-lg-block bg-login rounded-left"
              ></div>
              <div class="col-lg-7">
                <div class="p-5">
                  <div class="text-center">
                    <a href="index.html" class="d-block mb-5">
                      <img
                        src="@/assets/images/logo.svg"
                        alt="app-logo"
                        height="25"
                      />
                    </a>
                  </div>

                  <div class="text-center">
                    <img
                      src="@/assets/images/404-error.svg"
                      alt="error"
                      height="140"
                    />
                    <h1 class="h4 mb-3 mt-4">Страница не найдена</h1>
                    <p class="text-muted mb-4 w-75 m-auto">
                      Похоже, вы свернули не туда. Не волнуйся... такое
                      случается с лучшими из нас. Вот небольшой совет, который
                      может помочь вам вернуться на правильный путь.
                    </p>
                  </div>

                  <div class="row mt-4">
                    <div class="col-12 text-center">
                      <button
                        @click="
                          hasHistory() ? $router.go(-1) : $router.push('/')
                        "
                        class="btn btn-success"
                      >
                        <i class="mdi mdi-home mr-2"></i>Вернуться назад
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const hasHistory = () => {
      return window.history.length > 2;
    };

    return {
      hasHistory,
    };
  },
});
</script>