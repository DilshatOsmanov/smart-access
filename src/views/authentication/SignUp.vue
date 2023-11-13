<template>
  <div class="bg-primary">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="d-flex align-items-center min-vh-100">
            <div class="w-100 d-block bg-white shadow-lg rounded my-5">
              <div class="row">
                <div
                  class="col-lg-5 d-none d-lg-block bg-register rounded-left"
                ></div>
                <div class="col-lg-7">
                  <div class="p-5">
                    <div class="text-center">
                      <a href="index.html" class="d-block mb-5">
                        <img
                          src="@/assets/images/logo.svg"
                          alt="app-logo"
                          height="35"
                        />
                      </a>
                    </div>
                    <h1 class="h5 mb-1">Создать аккаунт!</h1>
                    <p class="text-muted mb-4">
                      У вас нет учетной записи? Создайте свою учетную запись,
                      это займет меньше минуты
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
                      <router-link to="/404" class="btn btn-success btn-block">
                        Зарегистрироваться
                      </router-link>

                      <div class="text-center mt-4">
                        <h5 class="text-muted font-size-16">
                          Зарегистрируйтесь, используя
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
  </div>
  <!-- end page -->
</template>
