<template>
  <div class="topnav">
    <div class="container-fluid">
      <nav class="navbar navbar-dark navbar-expand-lg topnav-menu">
        <div class="collapse navbar-collapse" id="topnav-menu-content">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/main" class="nav-link">
                <i class="feather-home mr-2"></i>Главная
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/attendance" class="nav-link">
                <i class="mdi mdi-table-edit mr-2"></i>Посещаемость
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/users" class="nav-link">
                <i class="feather-users mr-2"></i>Пользователи
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/tourniquets" class="nav-link">
                <i class="feather-server mr-2"></i>Турникеты
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #fff !important;
}
</style>