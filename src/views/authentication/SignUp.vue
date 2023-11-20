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
                  <h1 class="h5 mb-1">Создать аккаунт!</h1>
                  <p class="text-muted mb-4">
                    У вас нет учетной записи? Создайте свою учетную запись, это
                    займет меньше минуты
                  </p>
                  <Form
                    class="user"
                    id="kt_login_signin_form"
                    @submit="onSubmit"
                    :validation-schema="register"
                  >
                    <div class="form-group row">
                      <div class="col-sm-6 mb-3 mb-sm-0">
                        <Field
                          type="text"
                          name="first_name"
                          class="form-control form-control-user"
                          placeholder="Имя"
                        />
                        <ErrorMessage class="text-danger" name="first_name" />
                      </div>
                      <div class="col-sm-6">
                        <Field
                          type="text"
                          name="last_name"
                          class="form-control form-control-user"
                          placeholder="Фамилия"
                        />
                        <ErrorMessage class="text-danger" name="last_name" />
                      </div>
                    </div>
                    <div class="form-group">
                      <Field
                        type="email"
                        name="email"
                        class="form-control form-control-user"
                        placeholder="Email адрес"
                      />
                      <ErrorMessage class="text-danger" name="email" />
                    </div>
                    <div class="form-group">
                      <Field
                        type="text"
                        name="organization_title"
                        class="form-control form-control-user"
                        placeholder="Название организации"
                      />
                      <ErrorMessage
                        class="text-danger"
                        name="organization_title"
                      />
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-6 mb-3 mb-sm-0">
                        <Field
                          type="password"
                          name="password"
                          class="form-control form-control-user"
                          placeholder="Пароль"
                        />
                        <ErrorMessage class="text-danger" name="password" />
                      </div>
                      <div class="col-sm-6">
                        <Field
                          type="password"
                          name="password_confirm"
                          class="form-control form-control-user"
                          placeholder="Повторите пароль"
                        />
                        <ErrorMessage
                          class="text-danger"
                          name="password_confirm"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-success btn-block"
                      :disabled="loading"
                    >
                      <span class="indicator-label"> Зарегистрироваться </span>

                      <span
                        v-if="loading"
                        class="spinner-border spinner-border-sm align-middle ml-2"
                      ></span>
                    </button>
                  </Form>

                  <div class="row mt-4">
                    <div class="col-12 text-center">
                      <p class="text-muted mb-0">
                        Уже есть аккаунт?
                        <router-link
                          to="/sign-in"
                          class="text-muted font-weight-medium ml-1"
                          ><b>Войти</b></router-link
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
      first_name: Yup.string().required("Это поле обязательное"),
      last_name: Yup.string().required("Это поле обязательное"),
      email: Yup.string()
        .email("Некоректный e-mail")
        .required("Это поле обязательное"),
      organization_title: Yup.string().required("Это поле обязательное"),
      password: Yup.string().required("Это поле обязательное"),
      password_confirm: Yup.string()
        .required("Это поле обязательное")
        .oneOf([Yup.ref("password"), null], "Пароли не совпадают"),
    });

    const onSubmit = async (values: any) => {
      loading.value = true;

      setTimeout(() => {
        loading.value = false;

        if (values)
          Swal.fire({
            width: 310,
            text: "Вы успешно зарегистрировались!",
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