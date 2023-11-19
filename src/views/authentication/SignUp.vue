<template>
  <div class="container">
    <div class="row mw-500px m-auto">
      <div class="col-12">
        <div class="d-flex align-items-center min-vh-env-100">
          <div class="w-100 d-block bg-white shadow rounded my-0">
            <div class="row">
              <div class="col-lg-12">
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
                  <h1 class="h5 mb-1">Создать аккаунт!</h1>
                  <p class="text-muted mb-4">
                    У вас нет учетной записи? Создайте свою учетную запись, это
                    займет меньше минуты
                  </p>
                  <form class="user">
                    <div class="form-group row">
                      <div class="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="text"
                          class="form-control form-control-user"
                          id="exampleFirstName"
                          placeholder="Имя"
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control form-control-user"
                          id="exampleLastName"
                          placeholder="Фамилия"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        placeholder="Email адрес"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        id="exampleInputOrgName"
                        placeholder="Название организации"
                      />
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Пароль"
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="exampleRepeatPassword"
                          placeholder="Повторите пароль"
                        />
                      </div>
                    </div>
                    <button class="btn btn-success btn-block">
                      Зарегистрироваться
                    </button>
                  </form>

                  <div class="row mt-4">
                    <div class="col-12 text-center">
                      <p class="text-muted mb-0">
                        Уже есть аккаунт?
                        <router-link
                          to="/sign-in"
                          class="text-muted font-weight-medium ml-1"
                          ><b>Войти</b></router-link
                        >
                      </p>
                    </div>
                    <!-- end col -->
                  </div>
                  <!-- end row -->
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
