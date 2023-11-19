<template>
  <div class="container">
    <div class="row mw-500px m-auto">
      <div class="col-12">
        <div class="d-flex align-items-center min-vh-100">
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
                  <h1 class="h5 mb-1">Сброс пароля</h1>
                  <p class="text-muted mb-4">
                    Введите свой адрес электронной почты, и мы вышлем вам
                    электронное письмо с инструкциями по сбросу пароля.
                  </p>
                  <form>
                    <div class="form-group">
                      <label for="exampleInputEmail"
                        >Адрес электронной почты</label
                      >
                      <input
                        type="email"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        placeholder="Email адрес"
                      />
                    </div>
                    <button class="btn btn-success btn-block">Отправить</button>
                  </form>

                  <div class="row mt-5">
                    <div class="col-12 text-center">
                      <p class="text-muted mb-1">
                        Уже есть аккаунт?
                        <router-link
                          to="/sign-in"
                          class="text-muted font-weight-medium ml-1"
                          ><b>Войти</b></router-link
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