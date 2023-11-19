<template>
  <div class="container">
    <div class="row mw-500px m-auto">
      <div class="col-12">
        <div class="d-flex align-items-center min-vh-env-100">
          <div class="w-100 d-block bg-white shadow rounded my-0">
            <div class="row">
              <div class="p-5">
                <div class="text-center">
                  <router-link to="/" class="d-block mb-5">
                    <img
                      src="@/assets/images/logo.svg"
                      alt="app-logo"
                      height="25"
                    />
                  </router-link>
                </div>
                <h1 class="h5 mb-1">Добро пожаловать!</h1>
                <p class="text-muted mb-4">
                  Введите адрес электронной почты и пароль для доступа к панели
                  администратора.
                </p>
                <form class="user">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control form-control-user"
                      id="exampleInputEmail"
                      placeholder="Логин"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control form-control-user"
                      id="exampleInputPassword"
                      placeholder="Пароль"
                    />
                  </div>
                  <router-link to="/main" class="btn btn-success btn-block">
                    Авторизоваться
                  </router-link>
                </form>

                <div class="row mt-4">
                  <div class="col-12 text-center">
                    <p class="text-muted mb-2">
                      <router-link
                        to="/reset-password"
                        class="text-muted font-weight-medium ml-1"
                        >Забыли пароль?</router-link
                      >
                    </p>
                    <p class="text-muted mb-0">
                      Нет учетной записи?
                      <router-link
                        to="/sign-up"
                        class="text-muted font-weight-medium ml-1"
                        ><b>Создать аккаунт</b></router-link
                      >
                    </p>
                  </div>
                  <!-- end col -->
                </div>
                <!-- end .padding-5 -->
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <!-- end .w-100 -->
        </div>
        <!-- end .d-flex -->
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->
  </div>
  <!-- end container -->
</template>
