<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">Последние посещения</h4>
      <p class="card-subtitle mb-4">Таблица последних пяти посещений</p>

      <div class="table-responsive">
        <table class="table table-centered table-striped table-nowrap mb-0">
          <thead>
            <tr class="d-none d-sm-table-row">
              <th>Пользователь</th>
              <th>Дата посещения</th>
              <th>Группа</th>
              <th class="w-40px"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in visits" :key="user.id">
              <th>
                <div class="d-flex align-items-center">
                  <img
                    class="rounded-circle w-40px mr-2 d-none d-sm-block"
                    src="@/assets/images/users/avatar-1.jpg"
                    alt="Avatar"
                  />
                  <span
                    >{{ user.lastName }} <br />
                    {{ user.firstName }}
                  </span>
                </div>
              </th>

              <td class="d-none d-sm-table-cell">{{ user.lastVisitDate }}</td>
              <td class="d-none d-sm-table-cell">{{ user.group.title }}</td>
              <td class="d-sm-none">
                <span>{{ user.lastVisitDate }}</span> <br />
                <span>{{ user.group.title }}</span>
              </td>
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
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "last-visit-table",
  setup() {
    const visits = ref([
      {
        id: 4,
        firstName: "Елена",
        lastName: "Смирнова",
        lastVisitDate: "14:05 02.12.2023",
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
        lastVisitDate: "16:05 02.12.2023",
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
        lastVisitDate: "14:15 02.12.2023",
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
        lastVisitDate: "14:47 02.12.2023",
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
        lastVisitDate: "15:25 02.12.2023",
        phoneNumber: "8 (706) 210 98 76",
        email: "anna.ignatieva@gmail.com",
        group: {
          id: 2,
          title: "ВТ-СР",
        },
        imageUrl: "",
      },
    ]);

    return { visits };
  },
});
</script>