<template>
  <div class="card card-body">
    <h4 class="card-title">Изменить пароль</h4>

    <Form
      class="user w-100"
      id="kt_password_form"
      @submit="onSubmitPassword"
      :validation-schema="password_schema"
    >
      <div class="form-group">
        <Field
          type="password"
          name="old_password"
          class="form-control form-control-user"
          placeholder="Текущий пароль"
        />
        <ErrorMessage class="text-danger" name="old_password" />
      </div>

      <div class="form-group">
        <Field
          type="password"
          name="new_password"
          class="form-control form-control-user"
          placeholder="Новый пароль"
        />
        <ErrorMessage class="text-danger" name="new_password" />
      </div>

      <div class="form-group">
        <Field
          type="password"
          name="confirm_password"
          class="form-control form-control-user"
          placeholder="Повторите пароль"
        />
        <ErrorMessage class="text-danger" name="confirm_password" />
      </div>

      <button
        type="submit"
        class="btn btn-success btn-block"
        :disabled="password_loading"
      >
        <span class="indicator-label"> Обновить </span>

        <span
          v-if="password_loading"
          class="spinner-border spinner-border-sm align-middle ml-2"
        ></span>
      </button>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { ErrorMessage, Field, Form } from "vee-validate";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.min.js";

export default defineComponent({
  name: "change-password-form",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup() {
    const password_loading = ref(false);

    const password_schema = Yup.object().shape({
      old_password: Yup.string().required("Это поле обязательное"),
      new_password: Yup.string().required("Это поле обязательное"),
      confirm_password: Yup.string()
        .required("Это поле обязательное")
        .oneOf([Yup.ref("new_password"), null], "Пароли не совпадают"),
    });

    const onSubmitPassword = async (values: any) => {
      password_loading.value = true;

      setTimeout(() => {
        password_loading.value = false;

        if (values)
          Swal.fire({
            width: 310,
            text: "Пароль успешно обновлен!",
            buttonsStyling: false,
            confirmButtonText: "Ок",
            customClass: {
              confirmButton: "btn btn-success",
            },
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
      password_schema,
      onSubmitPassword,
      password_loading,
    };
  },
});
</script>