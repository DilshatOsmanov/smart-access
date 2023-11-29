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
                    type="search"
                    class="form-control"
                    id="inputPassword2"
                    placeholder="Поиск..."
                  />
                </div>
                <div class="form-group mx-sm-3">
                  <select class="custom-select" id="status-select">
                    <option selected="">Все</option>
                    <option value="1">1 этаж</option>
                    <option value="2">2 этаж</option>
                    <option value="3">Цокольный этаж</option>
                  </select>
                </div>
              </form>
            </div>
            <div class="col-lg-4">
              <div class="text-lg-right mt-3 mt-lg-0">
                <button type="button" class="btn btn-success mr-1">
                  <i class="mdi mdi-settings"></i>
                </button>
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
      v-for="tourniquest in tourniquests"
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
            Тэг: {{ $t(tourniquest.tag) }}
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
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "tourniquests",
  setup() {
    const tourniquests = ref([
      {
        id: 1,
        title: "Турникет 1",
        status: "online",
        type: "one-door",
        tag: "1 этаж",
        lastUpdated: "3",
        applicationDate: null,
      },
      {
        id: 2,
        title: "Турникет 2",
        status: "offline",
        type: "one-door",
        tag: "1 этаж",
        lastUpdated: "4",
        applicationDate: null,
      },
      {
        id: 3,
        title: "Турникет 3",
        status: "not-connected",
        type: "two-door",
        tag: "",
        lastUpdated: null,
        applicationDate: "29.11.2023",
      },
      {
        id: 4,
        title: "Турникет 4",
        status: "online",
        type: "one-door",
        tag: "1 этаж",
        lastUpdated: "3",
        applicationDate: null,
      },
      {
        id: 5,
        title: "Турникет 5",
        status: "offline",
        type: "one-door",
        tag: "1 этаж",
        lastUpdated: "4",
        applicationDate: null,
      },
      {
        id: 6,
        title: "Турникет 6",
        status: "not-connected",
        type: "two-door",
        tag: "",
        lastUpdated: null,
        applicationDate: "29.11.2023",
      },
    ]);

    return {
      tourniquests,
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