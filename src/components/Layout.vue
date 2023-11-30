<template>
  <div id="layout-wrapper">
    <div class="main-content">
      <div class="header-fixed">
        <Header />
        <Navbar />
      </div>

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

<style lang="scss" scoped>
.main-content {
  padding-top: 135px;

  @media screen and (max-width: 992px) {
    padding-top: 128px;
  }
  @media screen and (max-width: 576px) {
    padding-top: 80px;
  }
}

.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
</style>