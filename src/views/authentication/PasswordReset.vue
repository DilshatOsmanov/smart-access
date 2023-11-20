<template>
  <div class="container">
    <div class="row mw-500px m-auto">
      <div class="col-12">
        <div class="d-flex align-items-center min-vh-100">
          <div class="w-100 d-block bg-white shadow rounded my-0">
            <div class="row">
              <div class="col-lg-12">
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
                  <h1 class="h5 mb-1">Сброс пароля</h1>
                  <p class="text-muted mb-4">
                    Введите свой адрес электронной почты, и мы вышлем вам
                    электронное письмо с инструкциями по сбросу пароля.
                  </p>
                  <Form
                    class="user"
                    id="kt_login_signin_form"
                    @submit="onSubmit"
                    :validation-schema="register"
                  >
                    <div class="form-group">
                      <label for="exampleInputEmail"
                        >Адрес электронной почты</label
                      >
                      <Field
                        type="email"
                        name="email"
                        class="form-control form-control-user"
                        placeholder="Email адрес"
                      />
                      <ErrorMessage class="text-danger" name="email" />
                    </div>
                    <button
                      type="submit"
                      class="btn btn-success btn-block"
                      :disabled="loading"
                    >
                      <span class="indicator-label"> Отправить </span>

                      <span
                        v-if="loading"
                        class="spinner-border spinner-border-sm align-middle ml-2"
                      ></span>
                    </button>
                  </Form>

                  <div class="row mt-5">
                    <div class="col-12 text-center">
                      <p class="text-muted mb-1">
                        Уже есть аккаунт?
                        <router-link
                          to="/sign-in"
                          class="text-muted font-weight-medium ml-1"
                          ><b>Войти</b></router-link
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
                  <!-- end row -->
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
    const register = Yup.object().shape({
      email: Yup.string()
        .email("Некоректный e-mail")
        .required("Это поле обязательное"),
    });

    const onSubmit = async (values: any) => {
      loading.value = true;

      setTimeout(() => {
        loading.value = false;

        if (values)
          Swal.fire({
            width: 310,
            html: `На указанную почту <b>${values.email}</b> выслан новый пароль!`,
            buttonsStyling: false,
            confirmButtonText: "Ок",
            customClass: {
              confirmButton: "btn btn-success",
            },
          }).then(() => {
            router.push({
              path: "/sign-in",
            });
          });
        else {
          Swal.fire({
            width: 310,
            text: "Ошибка сервера!",
            buttonsStyling: false,
            confirmButtonText: "Ок",
            customClass: {
              confirmButton: "btn btn-success",
            },
          });
        }
      }, 1000);
    };

    return {
      register,
      onSubmit,
      loading,
    };
  },
});
</script>