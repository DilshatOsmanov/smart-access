<template>
  <div class="container">
    <div class="row mw-500px m-auto">
      <div class="col-12">
        <div class="d-flex align-items-center min-vh-100">
          <div class="w-100 d-block bg-white shadow rounded my-0">
            <div class="row">
              <div class="p-5">
                <div class="text-center">
                  <router-link to="/" class="d-block mb-5">
                    <img
                      src="@/assets/images/logo.svg"
                      alt="app-logo"
                      height="25"
                    />
                  </router-link>
                </div>
                <h1 class="h5 mb-1">Добро пожаловать!</h1>
                <p class="text-muted mb-4">
                  Введите адрес электронной почты и пароль для доступа к панели
                  администратора.
                </p>
                <Form
                  class="user"
                  id="kt_login_signin_form"
                  @submit="onSubmitLogin"
                  :validation-schema="login"
                >
                  <div class="form-group">
                    <Field
                      name="email"
                      type="email"
                      class="form-control form-control-user"
                      placeholder="Логин"
                    />
                    <ErrorMessage class="text-danger" name="email" />
                  </div>
                  <div class="form-group">
                    <Field
                      name="password"
                      type="password"
                      class="form-control form-control-user"
                      placeholder="Пароль"
                    />
                    <ErrorMessage class="text-danger" name="password" />
                  </div>
                  <button
                    type="submit"
                    class="btn btn-success btn-block"
                    :disabled="loading"
                  >
                    <span class="indicator-label"> Авторизоваться </span>

                    <span
                      v-if="loading"
                      class="spinner-border spinner-border-sm align-middle ml-2"
                    ></span>
                  </button>
                </Form>

                <div class="row mt-4">
                  <div class="col-12 text-center">
                    <p class="text-muted mb-2">
                      <router-link
                        to="/reset-password"
                        class="text-muted font-weight-medium ml-1"
                        >Забыли пароль?</router-link
                      >
                    </p>
                    <p class="text-muted mb-0">
                      Нет учетной записи?
                      <router-link
                        to="/sign-up"
                        class="text-muted font-weight-medium ml-1"
                        ><b>Создать аккаунт</b></router-link
                      >
                    </p>
                  </div>
                  <!-- end col -->
                </div>
                <!-- end .padding-5 -->
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <!-- end .w-100 -->
        </div>
        <!-- end .d-flex -->
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->
  </div>
  <!-- end container -->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

import { ErrorMessage, Field, Form } from "vee-validate";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.min.js";

export default defineComponent({
  name: "sign-in",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup() {
    const router = useRouter();
    const loading = ref(false);

    //Create form validation object
    const login = Yup.object().shape({
      email: Yup.string()
        .email("Некоректный e-mail")
        .required("Это поле обязательное"),
      password: Yup.string().required("Это поле обязательное"),
    });

    const onSubmitLogin = async ({ email, password }: any) => {
      loading.value = true;

      setTimeout(() => {
        loading.value = false;

        if (email == "dilshat.osmanov05@gmail.com" && password == "Admin123!")
          router.push({
            path: "/main",
          });
        else {
          Swal.fire({
            icon: "error",
            title: "Неверный логин или пароль!",
            buttonsStyling: false,
            confirmButtonText: "Продолжить",
            customClass: {
              confirmButton: "btn btn-success",
            },
          });
        }
      }, 1000);
    };

    return {
      login,
      onSubmitLogin,
      loading,
    };
  },
});
</script>