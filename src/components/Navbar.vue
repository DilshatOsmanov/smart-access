<template>
  <div class="topnav">
    <div class="container-fluid">
      <nav class="navbar navbar-dark navbar-expand-sm topnav-menu">
        <div class="collapse navbar-collapse" id="topnav-menu-content">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/main" class="nav-link text-nowrap">
                <i class="feather-home mr-2"></i>Главная
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/attendance" class="nav-link text-nowrap">
                <i class="mdi mdi-table-edit mr-2"></i>Посещаемость
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/users" class="nav-link text-nowrap">
                <i class="feather-users mr-2"></i>Пользователи
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/tourniquets" class="nav-link text-nowrap">
                <i class="feather-server mr-2"></i>Турникеты
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>

  <div class="bottom-nav d-sm-none">
    <div class="container-fluid">
      <ul class="bottom-nav__inner">
        <router-link to="/main" class="bottom-nav__link">
          <i class="feather-home"></i>
          <span>Главная</span>
        </router-link>

        <router-link to="/attendance" class="bottom-nav__link">
          <i class="mdi mdi-table-edit"></i>
          <span>Посещаемость</span>
        </router-link>

        <router-link to="/users" class="bottom-nav__link">
          <i class="feather-users"></i>
          <span>Пользователи</span>
        </router-link>

        <router-link to="/tourniquets" class="bottom-nav__link">
          <i class="feather-server"></i>
          <span>Турникеты</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #fff !important;
}
.bottom-nav .router-link-exact-active {
  color: #2e7ce4 !important;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 60px;
  border-top: 1px solid #dee2e6;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    padding: 12px 0 36px 0;
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #8c9399;

    & i {
      font-size: 22px;
      line-height: 22px;
      height: 22px;
      margin-bottom: 2px;
    }

    & span {
      font-size: 12px;

      @media screen and (max-width: 360px) {
        font-size: 11px;
      }
    }
  }
}
</style>