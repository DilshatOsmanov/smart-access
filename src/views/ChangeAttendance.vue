<template>
  <div class="d-flex justify-content-between align-items-center flex-wrap mb-2">
    <h5 class="m-0 mr-2">Группа: ПН-ВТ-СР</h5>
    <router-link class="btn btn-primary my-2" :to="`/attendance/${id}/users`">
      Добавить участников
    </router-link>
  </div>

  <div class="card">
    <div class="card-body">
      <FullCalendar :options="calendarOptions"></FullCalendar>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { useRoute } from "vue-router";

import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import ru from "@fullcalendar/core/locales/ru";

export default defineComponent({
  name: "change-attendance",
  components: {
    FullCalendar,
  },
  setup() {
    const route = useRoute();
    const id = ref(parseInt(route.params.id as any));

    const date = new Date();
    const m = date.getMonth();
    const y = date.getFullYear();

    const calendarOptions = reactive({
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
      themeSystem: "bootstrap",
      headerToolbar: {
        left: "title",
        center: "",
        right: "prev,next today dayGridMonth",
      },
      initialDate: Date.now(),
      locale: ru,
      navLinks: true,
      selectable: false,
      selectMirror: false,
      editable: false,
      dayMaxEvents: true,
      events: [
        {
          title: "Османов Дильшат",
          start: new Date(y, m - 1, 27, 9, 30),
        },
        {
          title: "Семенов Павел",
          start: new Date(y, m - 1, 27, 10, 15),
        },
        {
          title: "Смирнова Елена",
          start: new Date(y, m - 1, 27, 8, 30),
        },
        {
          title: "Петров Алексей",
          start: new Date(y, m - 1, 27, 8, 30),
        },
        {
          title: "Козлова Мария",
          start: new Date(y, m - 1, 27, 8, 30),
        },
        {
          title: "Михал Палыч",
          start: new Date(y, m - 1, 27, 8, 30),
        },
        {
          title: "Османов Дильшат",
          start: new Date(y, m - 1, 29, 8, 30),
        },
        {
          title: "Семенов Павел",
          start: new Date(y, m - 1, 29, 8, 30),
        },
      ],
    });

    return { id, calendarOptions };
  },
});
</script>

<style lang="scss">
.fc-col-header-cell-cushion,
.fc-daygrid-day-number {
  color: #000;
}
.fc-theme-standard td,
.fc-theme-standard th {
  border: 1px solid #ddd !important;
}

.fc-daygrid-event-harness {
  background-color: #2e7ce4;
  border-radius: 5px;
  margin: 1px 0;
  & a {
    color: #fff;
  }
}
.fc-daygrid-event-dot {
  opacity: 0;
}

.fc-toolbar {
  flex-wrap: wrap;
}

.fc-toolbar-title {
  font-size: 18px !important;
  margin: 5px 20px 5px 0 !important;
}
.fc-today-button {
  margin-right: 0.75em !important;
}
.fc-dayGridMonth-button {
  margin-left: 0 !important;
  margin-top: 5px !important;
  margin-bottom: 5px !important;
}
</style>