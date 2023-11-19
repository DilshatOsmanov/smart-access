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
        <div class="d-flex align-items-center">
          <div class="dropdown d-inline-block ml-2">
            <button
              type="button"
              class="btn header-item p-0"
              id="page-header-user-dropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                class="rounded-circle header-profile-user"
                src="@/assets/images/users/avatar-1.jpg"
                alt="Header Avatar"
              />
            </button>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="page-header-user-dropdown"
            >
              <router-link
                class="dropdown-item d-flex align-items-center justify-content-between"
                to="/profile"
              >
                Профиль
              </router-link>
              <router-link
                class="dropdown-item d-flex align-items-center justify-content-between"
                to="/settings"
              >
                Настройки
              </router-link>
              <router-link
                to="/sign-in"
                class="dropdown-item d-flex align-items-center justify-content-between"
              >
                <span>Выйти</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>