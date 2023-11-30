<template>
  <div class="row">
    <div class="col-lg-8">
      <div class="card card-body">
        <h4 class="card-title">Теги</h4>

        <div class="form-group d-flex" v-for="tag in tags" :key="tag.id">
          <input
            :id="`my-tag-${tag.id}`"
            @input="changeTag(tag.id)"
            :value="tag.title"
            class="form-control nrounded-0 rounded-left"
            type="text"
          />
          <label
            :for="`my-tag-${tag.id}`"
            class="btn btn-success nrounded-0 mb-0"
          >
            <i class="mdi mdi-pencil"></i>
          </label>
          <button
            @click="deleteTag(tag.id)"
            type="button"
            class="btn btn-danger nrounded-0 rounded-right"
          >
            <i
              v-if="!deleteTagLoading.status || deleteTagLoading.id != tag.id"
              class="mdi mdi-delete"
            ></i>
            <span
              v-else
              class="spinner-border spinner-border-sm w-14px h-14px"
              role="status"
              aria-hidden="true"
            ></span>
          </button>
        </div>

        <div class="form-group d-flex">
          <input
            v-model="newTag"
            class="form-control nrounded-0 rounded-left"
            type="text"
          />
          <button
            @click="addTag"
            :disabled="loading"
            type="button"
            class="btn btn-success nrounded-0 rounded-right"
          >
            <i v-if="!loading" class="mdi mdi-plus-circle-outline"></i>
            <span
              v-else
              class="spinner-border spinner-border-sm w-14px h-14px"
              role="status"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "tags-page",
  setup() {
    const tags = ref([
      { id: "1", title: "1 этаж" },
      { id: "2", title: "2 этаж" },
      { id: "3", title: "Цокольный этаж" },
    ]);
    const newTag = ref("");

    const loading = ref(false);
    const deleteTagLoading = ref({ id: "", status: false });

    const addTag = async () => {
      if (newTag.value.trim().length) {
        loading.value = true;

        setTimeout(() => {
          loading.value = false;

          tags.value.push({ id: newTag.value, title: newTag.value });
          newTag.value = "";
        }, 1000);
      }
    };

    const deleteTag = async (id) => {
      deleteTagLoading.value.status = true;
      deleteTagLoading.value.id = id;

      setTimeout(() => {
        deleteTagLoading.value.status = false;

        tags.value = tags.value.filter((tag) => tag.id != id);
      }, 1000);
    };

    return {
      tags,
      addTag,
      deleteTag,
      loading,
      deleteTagLoading,
      newTag,
    };
  },
});
</script>

<style lang="scss" scoped>
.nrounded-0 {
  border-radius: 0;
}
</style>