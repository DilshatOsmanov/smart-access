<template>
  <h5 class="mb-3">Группа: ПН-ВТ-СР</h5>

  <div class="row">
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Добавить участников</h4>

          <input
            type="search"
            class="form-control mb-3"
            placeholder="Поиск..."
          />

          <div class="table-responsive mh-50vh">
            <table class="table table-centered table-striped table-nowrap mb-0">
              <tbody>
                <tr v-for="user in searchedUsers" :key="user.id">
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
                  <td class="text-right">
                    <button
                      @click="addUser(user.id)"
                      class="btn btn-primary"
                      :disabled="user.loading"
                    >
                      <i v-if="!user.loading" class="mdi mdi-account-plus"></i>
                      <span
                        v-else
                        class="spinner-border spinner-border-sm w-14px h-14px"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    </button>
                  </td>
                </tr>

                <div
                  class="d-flex justify-content-center flex-column align-items-center w-100 py-5"
                  v-if="!searchedUsers.length"
                >
                  <img src="@/assets/images/users.png" alt="users" />
                  <b>Список пуст!</b>
                </div>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Список добавленных участников</h4>

          <div class="table-responsive mh-50vh">
            <table class="table table-centered table-striped table-nowrap mb-0">
              <tbody>
                <tr v-for="user in addedUsers" :key="user.id">
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
                  <td class="text-right">
                    <button
                      :disabled="user.loading"
                      @click="deleteUser(user.id)"
                      class="btn btn-danger"
                    >
                      <i v-if="!user.loading" class="mdi mdi-account-minus"></i>
                      <span
                        v-else
                        class="spinner-border spinner-border-sm w-14px h-14px"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    </button>
                  </td>
                </tr>

                <div
                  class="d-flex justify-content-center flex-column align-items-center w-100 py-5"
                  v-if="!addedUsers.length"
                >
                  <img src="@/assets/images/users.png" alt="users" />
                  <b>Список пуст!</b>
                </div>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "change-attendance",

  setup() {
    const route = useRoute();
    const id = ref(parseInt(route.params.id as any));

    const users = ref(<any>[
      {
        id: 1,
        firstName: "Дильшат",
        lastName: "Османов",
        isAdded: false,
      },
      {
        id: 2,
        firstName: "Павел",
        lastName: "Семенов",
        isAdded: false,
      },
      {
        id: 3,
        firstName: "Иван",
        lastName: "Иванов",
        isAdded: false,
      },
      {
        id: 4,
        firstName: "Елена",
        lastName: "Смирнова",
        isAdded: false,
      },
      {
        id: 5,
        firstName: "Алексей",
        lastName: "Петров",
        isAdded: false,
      },
      {
        id: 6,
        firstName: "Мария",
        lastName: "Козлова",
        isAdded: false,
      },
      {
        id: 7,
        firstName: "Сергей",
        lastName: "Николаев",
        isAdded: false,
      },
      {
        id: 8,
        firstName: "Анна",
        lastName: "Игнатьева",
        isAdded: false,
      },
    ]);

    const searchedUsers = computed(() =>
      users.value.filter((user) => user.isAdded == false)
    );

    const addedUsers = computed(() =>
      users.value.filter((user) => user.isAdded == true)
    );

    const addUser = (id) => {
      let index = users.value.findIndex((user) => user.id == id);

      if (users.value[index]) {
        users.value[index].loading = true;
      }

      setTimeout(() => {
        if (users.value[index]) {
          users.value[index].loading = false;
        }

        users.value[index].isAdded = true;
      }, 1000);
    };

    const deleteUser = (id) => {
      let index = users.value.findIndex((user) => user.id == id);

      if (users.value[index]) {
        users.value[index].loading = true;
      }

      setTimeout(() => {
        if (users.value[index]) {
          users.value[index].loading = false;
        }

        users.value[index].isAdded = false;
      }, 1000);
    };

    return { id, searchedUsers, addedUsers, addUser, deleteUser };
  },
});
</script>

<style lang="scss" scoped>
</style>