<template>
  <header id="page-topbar">
    <div class="container-fluid">
      <div class="navbar-header">
        <div class="d-flex align-items-center">
          <div class="navbar-brand-box mr-3 mr-lg-5">
            <router-link to="/main" class="logo">
              <span class="d-none d-lg-block">
                <img src="@/assets/images/logo.svg" alt="" height="22" />
              </span>
              <i class="d-lg-none">
                <img src="@/assets/images/logo-small.svg" alt="" height="24" />
              </i>
            </router-link>
          </div>
        </div>

        <router-link to="/profile" class="btn header-item header-btn p-0">
          <img
            class="rounded-circle header-profile-user"
            src="@/assets/images/users/avatar-1.jpg"
            alt="Header Avatar"
          />
        </router-link>
      </div>
    </div>
  </header>
</template>