<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-8">
              <form class="form-inline">
                <div class="form-group">
                  <input
                    v-model="searchQuery"
                    type="search"
                    class="form-control"
                    id="inputPassword2"
                    placeholder="Поиск..."
                  />
                </div>
                <div class="form-group mx-sm-3">
                  <select
                    v-model="tagQuery"
                    class="custom-select"
                    id="status-select"
                  >
                    <option value="all">Все</option>
                    <option :value="tag.id" v-for="tag in tags" :key="tag.id">
                      {{ tag.title }}
                    </option>
                  </select>
                </div>
              </form>
            </div>
            <div class="col-lg-4">
              <div class="text-lg-right mt-3 mt-lg-0">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-success dropdown-toggle mr-1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    :disabled="settingsLoader"
                  >
                    <i v-if="!settingsLoader" class="mdi mdi-settings"></i>
                    <span
                      v-else
                      class="spinner-border spinner-border-sm w-14px h-14px"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  </button>

                  <div class="dropdown-menu dropdown-menu-right">
                    <button @click="allTourniquestsOff" class="dropdown-item">
                      Отключить все турникеты
                    </button>
                  </div>
                </div>

                <router-link to="/add-tourniquest" class="btn btn-danger"
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

  <div class="row">
    <div
      class="col-xl-3 col-lg-6"
      v-for="tourniquest in filteredTourniquests"
      :key="tourniquest.id"
    >
      <div class="card">
        <img
          class="card-img-top tourniquest-img"
          :src="require(`@/assets/images/${tourniquest.type}.jpg`)"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="mb-1">
            <span class="text-dark">{{ tourniquest.title }}</span>
          </h5>
          <p v-if="tourniquest.tag" class="text-muted font-size-14 mb-1">
            Тэг: {{ tourniquest.tag.title }}
          </p>
          <p class="text-muted font-size-14 mb-1">
            Статус:
            <span class="badge" :class="'badge-soft-' + tourniquest.status">{{
              $t(tourniquest.status)
            }}</span>
          </p>
          <p class="text-muted font-size-14">Тип: {{ $t(tourniquest.type) }}</p>

          <div
            v-if="tourniquest.status == 'offline'"
            class="alert alert-warning p-2 px-3"
            role="alert"
          >
            Турникет работает в режиме оффлайн!
          </div>

          <div
            v-if="tourniquest.status == 'not-connected'"
            class="alert alert-danger p-2 px-3 mb-0"
            role="alert"
          >
            Турникет не подключен! Пожалуйста, ожидайте связи с мастером.
          </div>

          <div v-if="tourniquest.status == 'online'">
            <button class="btn btn-sm btn-primary mr-1">Открыть</button>
            <button class="btn btn-sm btn-warning">Отключить</button>
          </div>

          <button
            v-if="tourniquest.status == 'offline'"
            class="btn btn-sm btn-success"
          >
            Включить
          </button>

          <p v-if="tourniquest.lastUpdated" class="card-text mt-2">
            <small class="text-muted"
              >Последнее обновление {{ tourniquest.lastUpdated }} минуты
              назад</small
            >
          </p>
          <p
            v-if="tourniquest.status == 'not-connected'"
            class="card-text mt-2"
          >
            <small class="text-muted"
              >Дата заявки: {{ tourniquest.applicationDate }}</small
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import Swal from "sweetalert2/dist/sweetalert2.min.js";

export default defineComponent({
  name: "tourniquests",
  setup() {
    const settingsLoader = ref(false);
    const searchQuery = ref("");
    const tagQuery = ref("all");

    const tags = ref([
      { id: 1, title: "1 этаж" },
      { id: 2, title: "2 этаж" },
      { id: 3, title: "Цокольный этаж" },
    ]);
    const tourniquests = ref([
      {
        id: 1,
        title: "Турникет 1",
        status: "online",
        type: "one-door",
        tag: { id: 1, title: "1 этаж" },
        lastUpdated: "3",
        applicationDate: null,
      },
      {
        id: 2,
        title: "Турникет 2",
        status: "offline",
        type: "one-door",
        tag: { id: 1, title: "1 этаж" },
        lastUpdated: "4",
        applicationDate: null,
      },
      {
        id: 3,
        title: "Турникет 3",
        status: "not-connected",
        type: "two-door",
        tag: null,
        lastUpdated: null,
        applicationDate: "29.11.2023",
      },
      {
        id: 4,
        title: "Турникет 4",
        status: "online",
        type: "one-door",
        tag: { id: 1, title: "1 этаж" },
        lastUpdated: "3",
        applicationDate: null,
      },
      {
        id: 5,
        title: "Турникет 5",
        status: "offline",
        type: "one-door",
        tag: { id: 1, title: "1 этаж" },
        lastUpdated: "4",
        applicationDate: null,
      },
      {
        id: 6,
        title: "Турникет 6",
        status: "not-connected",
        type: "two-door",
        tag: null,
        lastUpdated: null,
        applicationDate: "29.11.2023",
      },
    ]);

    const filteredTourniquests = computed(() =>
      (tourniquests.value as any)
        .filter((item) =>
          tagQuery.value != "all" ? item?.tag?.id == tagQuery.value : true
        )
        .filter((item) =>
          item.title
            .toLowerCase()
            .includes(searchQuery.value.trim().toLowerCase())
        )
    );

    const allTourniquestsOff = () => {
      settingsLoader.value = true;

      setTimeout(() => {
        settingsLoader.value = false;

        Swal.fire({
          width: 310,
          text: "Все турникеты выключены!",
          buttonsStyling: false,
          confirmButtonText: "Ок",
          customClass: {
            confirmButton: "btn btn-success",
          },
        });
      }, 1000);
    };

    return {
      filteredTourniquests,
      searchQuery,
      tagQuery,
      tags,
      allTourniquestsOff,
      settingsLoader,
    };
  },
});
</script>

<style lang="scss" scoped>
.badge-soft-online {
  color: #00c2b2;
  background-color: rgba(0, 194, 178, 0.18);
}
.badge-soft-offline {
  color: #f1bf43;
  background-color: rgba(241, 191, 67, 0.18);
}
.badge-soft-not-connected {
  color: #df3554;
  background-color: rgba(223, 53, 84, 0.18);
}

.tourniquest-img {
  max-height: 200px;
  object-fit: contain;
}
</style>