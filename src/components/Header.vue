<template>
  <header id="page-topbar">
    <div class="container-fluid">
      <div class="navbar-header">
        <div class="d-flex align-items-center">
          <div class="navbar-brand-box mr-3 mr-lg-5">
            <router-link to="/" class="logo">
              <span class="d-none d-lg-block">
                <img src="@/assets/images/logo.svg" alt="" height="35" />
              </span>
              <i class="d-lg-none">
                <img src="@/assets/images/logo-small.svg" alt="" height="30" />
              </i>
            </router-link>
          </div>

          <button
            type="button"
            class="btn btn-sm mr-2 d-lg-none header-item"
            data-toggle="collapse"
            data-target="#topnav-menu-content"
          >
            <i class="fa fa-fw fa-bars"></i>
          </button>
        </div>
        <div class="d-flex align-items-center">
          <div class="dropdown d-inline-block ml-2">
            <button
              type="button"
              class="btn header-item"
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
              <button
                class="dropdown-item d-flex align-items-center justify-content-between"
              >
                <span>Выйти</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>