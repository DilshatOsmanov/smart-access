<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-8">
              <div class="form-inline">
                <div class="form-group">
                  <input
                    type="search"
                    class="form-control"
                    placeholder="Поиск..."
                  />
                </div>
                <div class="form-group mx-sm-3">
                  <select class="custom-select" id="status-select">
                    <option value="all">Все</option>
                    <option
                      :value="group.id"
                      v-for="group in groups"
                      :key="group.id"
                    >
                      {{ group.title }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="text-lg-right mt-3 mt-lg-0">
                <router-link to="/add-user" class="btn btn-danger"
                  ><i class="mdi mdi-plus-circle mr-1"></i>
                  Добавить</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-body">
      <div class="table-responsive">
        <table class="table mb-0">
          <thead>
            <tr>
              <th>Пользователь</th>
              <th>Почта</th>
              <th>Номер телефона</th>
              <th>Группа</th>
              <th class="w-40px"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <th>
                <div class="d-flex align-items-center">
                  <img
                    class="rounded-circle w-40px mr-2"
                    src="@/assets/images/users/avatar-1.jpg"
                    alt="Avatar"
                  />
                  <span
                    >{{ user.lastName }} <br />
                    {{ user.firstName }}
                  </span>
                </div>
              </th>
              <td>{{ user.email }}</td>
              <td>{{ user.phoneNumber }}</td>
              <td>{{ user.group.title }}</td>
              <td>
                <router-link :to="`/users/${user.id}`" class="btn btn-primary">
                  <i class="feather-arrow-right"></i>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12">
      <nav>
        <ul class="pagination justify-content-end">
          <li class="page-item">
            <button class="page-link" tabindex="-1">Назад</button>
          </li>
          <li class="page-item active">
            <button class="page-link">1</button>
          </li>
          <li class="page-item">
            <button class="page-link">2</button>
          </li>
          <li class="page-item">
            <button class="page-link">3</button>
          </li>
          <li class="page-item">
            <button class="page-link">Далее</button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "users",
  setup() {
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

    const users = ref([
      {
        id: 1,
        firstName: "Дильшат",
        lastName: "Османов",
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
        phoneNumber: "8 (706) 210 98 76",
        email: "anna.ignatieva@gmail.com",
        group: {
          id: 2,
          title: "ВТ-СР",
        },
        imageUrl: "",
      },
    ]);

    return { groups, users };
  },
});
</script>

<style lang="scss" scoped>
th,
td {
  vertical-align: middle;
}
</style>