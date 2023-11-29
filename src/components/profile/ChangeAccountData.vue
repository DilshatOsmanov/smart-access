<template>
  <div class="card card-body">
    <h4 class="card-title">Профиль</h4>

    <div class="avatar__wrapper dropdown">
      <i
        class="dripicons-dots-3 position-absolute font-size-20 px-3 pt-3 pb-0 top-0 right-0 cursor-pointer"
        id="user-avatar-dropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      ></i>

      <label
        for="avatar_img"
        class="m-0 cursor-pointer position-relative"
        :class="{ 'pe-none': avatar_loading }"
      >
        <div
          v-if="avatar_loading"
          class="avatar__loading w-100 d-flex justify-content-center align-items-center position-absolute rounded-circle"
        >
          <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
        </div>
        <img
          :src="photoUrl"
          alt="image"
          class="img-fluid rounded-circle avatar__img"
        />
      </label>

      <input
        type="file"
        name="avatar_img "
        id="avatar_img"
        class="d-none"
        accept=".png, .jpg"
        @change="changePhoto"
      />

      <div
        class="dropdown-menu dropdown-menu-right"
        aria-labelledby="user-avatar-dropdown"
      >
        <button
          @click="deletePhoto"
          class="dropdown-item d-flex align-items-center justify-content-between"
        >
          Удалить
        </button>
      </div>

      <span class="text-danger d-block">
        {{ fileSizeWarning ? "Файл не должен превышать более 3 МБ" : "" }}
      </span>
      <span class="text-danger d-block">
        {{ fileTypeWarning ? "Файл должен быть формата .png" : "" }}
      </span>
    </div>

    <Form
      class="user w-100"
      id="kt_profile_form"
      @submit="onSubmitProfile"
      :validation-schema="profile_schema"
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
          type="text"
          name="organization_title"
          class="form-control form-control-user"
          placeholder="Название организации"
        />
        <ErrorMessage class="text-danger" name="organization_title" />
      </div>

      <button
        type="submit"
        class="btn btn-success btn-block"
        :disabled="profile_loading"
      >
        <span class="indicator-label"> Обновить </span>

        <span
          v-if="profile_loading"
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
  name: "change-profile-form",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup() {
    const profile_loading = ref(false);
    const avatar_loading = ref(false);

    const photoUrl = ref(require("@/assets/images/users/avatar-6.jpg"));
    const fileSizeWarning = ref(false);
    const fileTypeWarning = ref(false);

    function deletePhoto() {
      avatar_loading.value = true;

      setTimeout(() => {
        photoUrl.value = require("@/assets/images/users/avatar-6.jpg");
        avatar_loading.value = false;
        Swal.fire({
          width: 310,
          text: "Аватар удален!",
          buttonsStyling: false,
          confirmButtonText: "Ок",
          customClass: {
            confirmButton: "btn btn-success",
          },
        });
      }, 1000);
    }

    function changePhoto(e) {
      if (e.target.files.length) {
        let files = e.target.files || e.dataTransfer.files;

        if (files[0].size <= 2621440) {
          fileSizeWarning.value = false;
        } else {
          fileSizeWarning.value = true;
          return;
        }

        if (["image/png", "image/jpeg"].includes(files[0].type)) {
          fileTypeWarning.value = false;
        } else {
          fileTypeWarning.value = true;
          return;
        }

        avatar_loading.value = true;
        setTimeout(() => {
          photoUrl.value = URL.createObjectURL(e.target.files[0]);
          avatar_loading.value = false;
          Swal.fire({
            width: 310,
            text: "Аватар обновлен!",
            buttonsStyling: false,
            confirmButtonText: "Ок",
            customClass: {
              confirmButton: "btn btn-success",
            },
          });
        }, 1000);
      } else photoUrl.value = "";
    }

    const profile_schema = Yup.object().shape({
      first_name: Yup.string().required("Это поле обязательное"),
      last_name: Yup.string().required("Это поле обязательное"),
      organization_title: Yup.string().required("Это поле обязательное"),
    });

    const onSubmitProfile = async (values: any) => {
      profile_loading.value = true;

      setTimeout(() => {
        profile_loading.value = false;

        if (values)
          Swal.fire({
            width: 310,
            text: "Профиль успешно обновлен!",
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
      profile_schema,
      onSubmitProfile,
      profile_loading,

      changePhoto,
      deletePhoto,
      photoUrl,
      fileSizeWarning,
      fileTypeWarning,
      avatar_loading,
    };
  },
});
</script>

<style lang="scss" scoped>
.avatar__wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  padding: 30px;
  margin-bottom: 20px;
}
.avatar__img {
  width: 160px;
  height: 160px;
  object-fit: cover;
  background-color: #fff;
  min-width: 160px;
  min-height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
}
.avatar__loading {
  background-color: rgba(92, 85, 85, 0.493);
  height: calc(100% - 8px);
}
</style>