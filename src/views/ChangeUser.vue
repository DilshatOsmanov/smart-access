<template>
  <div class="row justify-content-center">
    <div v-if="!loading" class="col-lg-8">
      <div class="card card-body">
        <h4 class="card-title">Профиль пользователя</h4>

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

        <form class="user w-100" id="kt_profile_form" @submit="onSubmit">
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

          <div class="form-group row">
            <div class="col-sm-6 mb-3 mb-sm-0">
              <Field
                type="text"
                name="middle_name"
                class="form-control form-control-user"
                placeholder="Отчество"
              />
              <ErrorMessage class="text-danger" name="middle_name" />
            </div>
            <div class="col-sm-6">
              <Field
                type="text"
                name="email"
                class="form-control form-control-user"
                placeholder="Почта"
              />
              <ErrorMessage class="text-danger" name="email" />
            </div>
          </div>

          <div class="form-group row">
            <div class="col-sm-6 mb-3 mb-sm-0">
              <Field
                type="text"
                name="phone_number"
                class="form-control form-control-user"
                placeholder="Номер телефона"
                v-maska="'8 (###) ### ## ##'"
              />
              <ErrorMessage class="text-danger" name="phone_number" />
            </div>

            <div class="col-sm-6">
              <Field
                class="custom-select"
                id="status-select"
                name="group_id"
                as="select"
              >
                <option value="">Без группы</option>
                <option
                  :value="group.id"
                  v-for="group in groups"
                  :key="group.id"
                >
                  {{ group.title }}
                </option>
              </Field>
              <ErrorMessage class="text-danger" name="group_id" />
            </div>
          </div>

          <button
            type="submit"
            class="btn btn-outline-success btn-block"
            :disabled="user_loading"
          >
            <span class="indicator-label"> Обновить </span>

            <span
              v-if="user_loading"
              class="spinner-border spinner-border-sm align-middle ml-2"
            ></span>
          </button>
        </form>
      </div>
    </div>

    <Loader v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import { ErrorMessage, Field } from "vee-validate";
import { useForm } from "vee-validate";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.min.js";

import Loader from "@/components/Loader.vue";

interface UserInterface {
  user_avatar: any;
  last_name: string;
  first_name: string;
  middle_name: string;
  email: string;
  phone_number: string;
  group_id: any;
}

export default defineComponent({
  name: "change-profile-form",
  components: {
    Field,
    ErrorMessage,
    Loader,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const id = ref(parseInt(route.params.id as any));
    const loading = ref(false);
    const user_loading = ref(false);
    const avatar_loading = ref(false);

    const users = ref([
      {
        id: 1,
        firstName: "Дильшат",
        lastName: "Османов",
        middleName: "",
        phoneNumber: "8 (708) 418 47 50",
        email: "dilshat.osmanov05@gmail.com",
        group: {
          id: 1,
          title: "ПН-ВТ-СР",
        },
        imageUrl: "",
      },
      {
        id: 2,
        firstName: "Павел",
        lastName: "Семенов",
        middleName: "",
        phoneNumber: "8 (707) 511 47 50",
        email: "pavel.semen@gmail.com",
        group: {
          id: 2,
          title: "ВТ-СР",
        },
        imageUrl: "",
      },
      {
        id: 3,
        firstName: "Иван",
        lastName: "Иванов",
        middleName: "",
        phoneNumber: "8 (701) 123 45 67",
        email: "ivan.ivanov@gmail.com",
        group: {
          id: 1,
          title: "ПН-ВТ-СР",
        },
        imageUrl: "",
      },
      {
        id: 4,
        firstName: "Елена",
        lastName: "Смирнова",
        middleName: "",
        phoneNumber: "8 (702) 987 65 43",
        email: "elena.smirnova@gmail.com",
        group: {
          id: 2,
          title: "ВТ-СР",
        },
        imageUrl: "",
      },
      {
        id: 5,
        firstName: "Алексей",
        lastName: "Петров",
        middleName: "",
        phoneNumber: "8 (703) 567 89 01",
        email: "alexey.petrov@gmail.com",
        group: {
          id: 1,
          title: "ПН-ВТ-СР",
        },
        imageUrl: "",
      },
      {
        id: 6,
        firstName: "Мария",
        lastName: "Козлова",
        middleName: "",
        phoneNumber: "8 (704) 321 09 87",
        email: "maria.kozlova@gmail.com",
        group: {
          id: 2,
          title: "ВТ-СР",
        },
        imageUrl: "",
      },
      {
        id: 7,
        firstName: "Сергей",
        lastName: "Николаев",
        middleName: "",
        phoneNumber: "8 (705) 765 43 21",
        email: "sergey.nikolaev@gmail.com",
        group: {
          id: 1,
          title: "ПН-ВТ-СР",
        },
        imageUrl: "",
      },
      {
        id: 8,
        firstName: "Анна",
        lastName: "Игнатьева",
        middleName: "",
        phoneNumber: "8 (706) 210 98 76",
        email: "anna.ignatieva@gmail.com",
        group: {
          id: 2,
          title: "ВТ-СР",
        },
        imageUrl: "",
      },
    ]);

    const groups = ref([
      {
        id: 1,
        title: "ПН-ВТ-СР",
      },
      {
        id: 2,
        title: "ВТ-СР",
      },
      {
        id: 3,
        title: "ВТ-ПТ-СБ",
      },
    ]);

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

    const formData = ref<UserInterface>({
      user_avatar: [],
      last_name: "",
      first_name: "",
      middle_name: "",
      email: "",
      phone_number: "",
      group_id: "",
    });

    const UserValidator = Yup.object().shape({
      user_avatar: Yup.mixed().nullable(),
      first_name: Yup.string().required("Это поле обязательное"),
      last_name: Yup.string().required("Это поле обязательное"),
      middle_name: Yup.string().required("Это поле обязательное"),
      email: Yup.string()
        .email("Неверный формат")
        .required("Это поле обязательное"),
      phone_number: Yup.string()
        .matches(
          /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
          "Неверный формат"
        )
        .min(17, "Неверный формат")
        .max(17, "Неверный формат")
        .required("Это поле обязательное"),
      group_id: Yup.string().nullable(),
    });

    const { values, resetForm, handleSubmit, setValues } =
      useForm<UserInterface>({
        validationSchema: UserValidator,
      });

    resetForm({
      values: {
        ...formData.value,
      },
    });

    const onSubmit = handleSubmit(() => {
      user_loading.value = true;

      setTimeout(() => {
        user_loading.value = false;

        if (values)
          Swal.fire({
            width: 310,
            text: "Данные пользователя успешно обновлены!",
            buttonsStyling: false,
            confirmButtonText: "Продолжить",
            customClass: {
              confirmButton: "btn btn-success",
            },
          }).then(() => {
            router.push({ path: "/users" });
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
    });

    onMounted(() => {
      loading.value = true;
      setTimeout(() => {
        let currentUser = users.value.find(
          (item) => item.id == (id.value as any)
        );
        setValues({
          last_name: currentUser?.lastName,
          first_name: currentUser?.firstName,
          middle_name: currentUser?.middleName,
          email: currentUser?.email,
          phone_number: currentUser?.phoneNumber,
          group_id: currentUser?.group.id,
        });
        loading.value = false;
      }, 1000);
    });

    return {
      loading,
      groups,
      onSubmit,
      user_loading,

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