<template>
  <div class="bg-primary">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="d-flex align-items-center min-vh-100">
            <div class="w-100 d-block bg-white shadow-lg rounded my-5">
              <div class="row">
                <div
                  class="col-lg-5 d-none d-lg-block bg-login rounded-left"
                ></div>
                <div class="col-lg-7">
                  <div class="p-5">
                    <div class="text-center">
                      <router-link to="/" class="d-block mb-5">
                        <img
                          src="@/assets/images/logo.svg"
                          alt="app-logo"
                          height="35"
                        />
                      </router-link>
                    </div>
                    <h1 class="h5 mb-1">Добро пожаловать!</h1>
                    <p class="text-muted mb-4">
                      Введите адрес электронной почты и пароль для доступа к
                      панели администратора.
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
                      <router-link to="/404" class="btn btn-success btn-block">
                        Авторизоваться
                      </router-link>

                      <div class="text-center mt-4">
                        <h5 class="text-muted font-size-16">
                          Войдите, используя
                        </h5>

                        <ul class="list-inline mt-3 mb-0">
                          <li class="list-inline-item">
                            <a
                              href="javascript: void(0);"
                              class="social-list-item border-primary text-primary"
                              ><i class="mdi mdi-facebook"></i
                            ></a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              href="javascript: void(0);"
                              class="social-list-item border-danger text-danger"
                              ><i class="mdi mdi-google"></i
                            ></a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              href="javascript: void(0);"
                              class="social-list-item border-info text-info"
                              ><i class="mdi mdi-twitter"></i
                            ></a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              href="javascript: void(0);"
                              class="social-list-item border-secondary text-secondary"
                              ><i class="mdi mdi-github-circle"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </form>

                    <div class="row mt-4">
                      <div class="col-12 text-center">
                        <p class="text-muted mb-2">
                          <router-link
                            to="/404"
                            class="text-muted font-weight-medium ml-1"
                            >Забыли пароль?</router-link
                          >
                        </p>
                        <p class="text-muted mb-0">
                          У вас нет учетной записи?
                          <router-link
                            to="/sign-up"
                            class="text-muted font-weight-medium ml-1"
                            ><b>Зарегистрироваться</b></router-link
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
  </div>
  <!-- end page -->
</template>
