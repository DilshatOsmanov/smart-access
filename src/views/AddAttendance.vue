<template>
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <div class="card card-body">
        <h4 class="card-title">Создать группу</h4>

        <form class="user w-100" id="kt_profile_form" @submit="onSubmit">
          <div class="form-group">
            <Field
              type="text"
              name="title"
              class="form-control"
              placeholder="Название"
            />
            <ErrorMessage class="text-danger" name="title" />
          </div>

          <div class="form-group">
            <h6 class="fw-700">Расписание</h6>

            <div class="row">
              <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="custom-control custom-checkbox">
                  <Field
                    type="checkbox"
                    class="custom-control-input"
                    id="onMonday"
                    name="onMonday"
                    :value="!values.onMonday"
                  />
                  <label class="custom-control-label" for="onMonday"
                    >Понедельник</label
                  >
                </div>
                <div class="custom-control custom-checkbox">
                  <Field
                    type="checkbox"
                    class="custom-control-input"
                    id="onTuesday"
                    name="onTuesday"
                    :value="!values.onTuesday"
                  />
                  <label class="custom-control-label" for="onTuesday"
                    >Вторник</label
                  >
                </div>
                <div class="custom-control custom-checkbox">
                  <Field
                    type="checkbox"
                    class="custom-control-input"
                    id="onWednesday"
                    name="onWednesday"
                    :value="!values.onWednesday"
                  />
                  <label class="custom-control-label" for="onWednesday"
                    >Среда</label
                  >
                </div>
                <div class="custom-control custom-checkbox">
                  <Field
                    type="checkbox"
                    class="custom-control-input"
                    id="onThursday"
                    name="onThursday"
                    :value="!values.onThursday"
                  />
                  <label class="custom-control-label" for="onThursday"
                    >Четверг</label
                  >
                </div>
                <div class="custom-control custom-checkbox">
                  <Field
                    type="checkbox"
                    class="custom-control-input"
                    id="onFriday"
                    name="onFriday"
                    :value="!values.onFriday"
                  />
                  <label class="custom-control-label" for="onFriday"
                    >Пятница</label
                  >
                </div>
                <div class="custom-control custom-checkbox">
                  <Field
                    type="checkbox"
                    class="custom-control-input"
                    id="onSaturday"
                    name="onSaturday"
                    :value="!values.onSaturday"
                  />
                  <label class="custom-control-label" for="onSaturday"
                    >Суббота</label
                  >
                </div>
                <div class="custom-control custom-checkbox">
                  <Field
                    type="checkbox"
                    class="custom-control-input"
                    id="onSunday"
                    name="onSunday"
                    :value="!values.onSunday"
                  />
                  <label class="custom-control-label" for="onSunday"
                    >Воскресенье</label
                  >
                </div>

                <ErrorMessage class="text-danger" name="" />
              </div>
              <div class="col-sm-6">
                <div class="mb-2">
                  <Datepicker
                    v-model="values.startTime"
                    autoApply
                    placeholder="Время начала"
                    :clearable="false"
                    timePicker
                  ></Datepicker>
                  <ErrorMessage class="text-danger" name="startTime" />
                </div>

                <div>
                  <Datepicker
                    v-model="values.endTime"
                    autoApply
                    placeholder="Время завершения"
                    :clearable="false"
                    timePicker
                  ></Datepicker>
                  <ErrorMessage class="text-danger" name="endTime" />
                </div>
              </div>
            </div>
          </div>

          <div class="alert alert-info" role="alert">
            Добавление участников: <br />
            После создания группы у вас будет возможность добавлять новых
            участников.
          </div>

          <button
            type="submit"
            class="btn btn-outline-success btn-block"
            :disabled="loading"
          >
            <span class="indicator-label"> Создать </span>

            <span
              v-if="loading"
              class="spinner-border spinner-border-sm align-middle ml-2"
            ></span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

import { ErrorMessage, Field } from "vee-validate";
import { useForm } from "vee-validate";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.min.js";

import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

interface GroupInterface {
  title: string;
  onMonday: any;
  onTuesday: any;
  onWednesday: any;
  onThursday: any;
  onFriday: any;
  onSaturday: any;
  onSunday: any;
  startTime: any;
  endTime: any;
}

export default defineComponent({
  name: "add-attendance-form",
  components: {
    Field,
    ErrorMessage,
    Datepicker,
  },
  setup() {
    const router = useRouter();
    const loading = ref(false);

    const formData = ref<GroupInterface>({
      title: "",
      onMonday: false,
      onTuesday: false,
      onWednesday: false,
      onThursday: false,
      onFriday: false,
      onSaturday: false,
      onSunday: false,
      startTime: null,
      endTime: null,
    });

    const GroupValidator = Yup.object()
      .shape({
        title: Yup.string().required("Это поле обязательное"),
        onMonday: Yup.boolean(),
        onTuesday: Yup.boolean(),
        onWednesday: Yup.boolean(),
        onThursday: Yup.boolean(),
        onFriday: Yup.boolean(),
        onSaturday: Yup.boolean(),
        onSunday: Yup.boolean(),
        startTime: Yup.mixed().required("Это поле обязательное"),
        endTime: Yup.mixed().required("Это поле обязательное"),
      })
      .test("", "Выберите хотя бы один день недели", (values) => {
        const {
          onMonday,
          onTuesday,
          onWednesday,
          onThursday,
          onFriday,
          onSaturday,
          onSunday,
        } = values;

        if (
          !onMonday &&
          !onTuesday &&
          !onWednesday &&
          !onThursday &&
          !onFriday &&
          !onSaturday &&
          !onSunday
        ) {
          return false;
        }

        return true;
      });

    const { values, resetForm, handleSubmit } = useForm<GroupInterface>({
      validationSchema: GroupValidator,
    });

    resetForm({
      values: {
        ...formData.value,
      },
    });

    const onSubmit = handleSubmit(() => {
      loading.value = true;

      setTimeout(() => {
        loading.value = false;

        if (values)
          Swal.fire({
            width: 310,
            text: "Группа успешно создана!",
            buttonsStyling: false,
            confirmButtonText: "Продолжить",
            customClass: {
              confirmButton: "btn btn-success",
            },
          }).then(() => {
            router.push({ path: "/attendance" });
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

    return {
      loading,
      values,
      onSubmit,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>