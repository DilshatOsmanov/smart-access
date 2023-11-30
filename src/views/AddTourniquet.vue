<template>
  <div class="row">
    <div class="col-lg-8">
      <div class="card card-body">
        <h4 class="card-title">Заявка на добавление турникета</h4>
        <Form class="user w-100" @submit="onSubmit" :validation-schema="schema">
          <div class="alert alert-info" role="alert">
            После отправки заявки мы свяжемся с вами для уточнения
            дополнительных данных. Пожалуйста, гарантируйте правильность и
            полноту предоставляемой информации. Оставайтесь на связи!
          </div>

          <div class="form-group row">
            <div class="col-sm-6 mb-3 mb-sm-0">
              <label>Номер телефона* </label>
              <Field
                type="text"
                name="phone_number"
                class="form-control form-control-user"
                v-maska="'8 (###) ### ## ##'"
              />
              <ErrorMessage class="text-danger" name="phone_number" />
            </div>
            <div class="col-sm-6">
              <label>Выберите тэг</label>
              <Field
                class="custom-select"
                id="status-select"
                name="tourniquet_tag"
                as="select"
              >
                <option value="">Без тэга</option>
                <option :value="tag.id" v-for="tag in tags" :key="tag.id">
                  {{ tag.title }}
                </option>
              </Field>
              <ErrorMessage class="text-danger" name="tourniquet_tag" />
            </div>
          </div>

          <div class="form-group">
            <label>Адрес* </label>
            <Field
              type="text"
              name="address"
              class="form-control form-control-user"
            />
            <ErrorMessage class="text-danger" name="address" />
          </div>

          <div class="form-group">
            <label>Тип турникета* </label>

            <div class="row">
              <div class="col-6 mb-3 mb-sm-0">
                <label class="w-100" for="tourniquet_type_one-door">
                  <div class="card w-100 mb-0">
                    <img
                      class="card-img-top mh-200px object-fit-contain"
                      src="@/assets/images/one-door.jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body p-3 p-es-1">
                      <h5 class="d-flex align-items-center mb-1">
                        <Field
                          class="mr-1"
                          name="tourniquet_type"
                          type="radio"
                          value="one-door"
                          id="tourniquet_type_one-door"
                        />
                        <span class="text-dark text-radio">Однодверный</span>
                      </h5>
                    </div>
                  </div>
                </label>
              </div>
              <div class="col-6">
                <label class="w-100" for="tourniquet_type_two-door">
                  <div class="card w-100 mb-0">
                    <img
                      class="card-img-top mh-200px object-fit-contain"
                      src="@/assets/images/two-door.jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body p-3 p-es-1">
                      <h5 class="d-flex align-items-center mb-1">
                        <Field
                          class="mr-1"
                          name="tourniquet_type"
                          type="radio"
                          value="two-door"
                          id="tourniquet_type_two-door"
                        />
                        <span class="text-dark text-radio">Двухдверный</span>
                      </h5>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <ErrorMessage class="text-danger" name="tourniquet_type" />
          </div>

          <button
            type="submit"
            class="btn btn-outline-success btn-block"
            :disabled="loading"
          >
            <span class="indicator-label"> Отправить заявку </span>

            <span
              v-if="loading"
              class="spinner-border spinner-border-sm align-middle ml-2"
            ></span>
          </button>
        </Form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

import { ErrorMessage, Field, Form } from "vee-validate";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.min.js";

export default defineComponent({
  name: "add-tourniquet-form",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup() {
    const router = useRouter();
    const tags = ref([
      { id: 1, title: "1 этаж" },
      { id: 2, title: "2 этаж" },
      { id: 3, title: "Цокольный этаж" },
    ]);
    const types = ref([
      { id: 1, title: "Однодверный" },
      { id: 2, title: "Двухдверный" },
    ]);
    const loading = ref(false);

    const schema = Yup.object().shape({
      phone_number: Yup.string()
        .matches(
          /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
          "Неверный формат"
        )
        .min(17, "Неверный формат")
        .max(17, "Неверный формат")
        .required("Это поле обязательное"),
      address: Yup.string().required("Это поле обязательное"),
      tourniquet_type: Yup.string().required("Это поле обязательное"),
      tourniquet_tag: Yup.string().nullable(),
    });

    const onSubmit = async (values: any) => {
      loading.value = true;

      setTimeout(() => {
        loading.value = false;

        if (values)
          Swal.fire({
            width: 510,
            html: `Ваш запрос на добавление турникета успешно оформлен! <br> В течение трех дней наш менеджер свяжется с вами по указанному номеру <b class='text-nowrap'>${values.phone_number}</b>.<br> Благодарим за ожидание и ожидаем продуктивного разговора!`,
            buttonsStyling: false,
            confirmButtonText: "Продолжить",
            customClass: {
              confirmButton: "btn btn-success",
            },
          }).then(() => {
            router.push({ path: "/tourniquets" });
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
      tags,
      types,
      schema,
      onSubmit,
      loading,
    };
  },
});
</script>

<style lang="scss" scoped>
.text-radio {
  font-size: 16px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 576px) {
    font-size: 12px;
  }

  @media screen and (max-width: 366px) {
    font-size: 10px;
  }
}

.p-es-1 {
  @media screen and (max-width: 366px) {
    padding: 10px 5px !important;
  }
}
</style>