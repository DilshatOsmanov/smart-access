<template>
  <div id="layout-wrapper">
    <div class="main-content">
      <Header />
      <Navbar />

      <div class="page-content">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </div>

      <Footer />
    </div>
  </div>

  <div class="menu-overlay"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  components: {
    Header,
    Footer,
    Navbar,
  },
});
</script>
