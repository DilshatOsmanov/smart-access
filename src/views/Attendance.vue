<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-8">
              <div class="form-inline">
                <div class="form-group w-sm-100">
                  <input
                    type="search"
                    class="form-control"
                    placeholder="Поиск..."
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="text-lg-right mt-sm-3 mt-lg-0">
                <router-link to="/add-attendance" class="btn btn-danger"
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
        <table class="table table-centered table-striped table-nowrap mb-0">
          <thead>
            <tr>
              <th>Название</th>
              <th>Расписание</th>
              <th>Количество участников</th>
              <th class="w-40px"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="group in groups" :key="group.id">
              <th>
                {{ group.title }}
              </th>
              <td>{{ group.timesheet }}</td>
              <td>{{ group.count }}</td>
              <td>
                <router-link
                  :to="`/attendance/${group.id}`"
                  class="btn btn-primary"
                >
                  <i class="feather-arrow-right"></i>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div v-if="groups.length > 8" class="row">
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
  name: "attendance",
  setup() {
    const groups = ref([
      {
        id: 1,
        title: "ПН-ВТ-СР",
        timesheet: "ПН-ВТ-СР | 8:00-17:00",
        count: 5,
      },
      {
        id: 2,
        title: "ВТ-СР",
        timesheet: "ВТ-СР | 9:00-18:00",
        count: 6,
      },
      {
        id: 3,
        title: "ВТ-ПТ-СБ",
        timesheet: "ВТ-ПТ-СБ | 8:00-17:00",
        count: 4,
      },
    ]);

    return { groups };
  },
});
</script>