<template>
  <header id="header-section">
    <nav class="navbar navbar-expand-lg pl-3 pl-sm-0" id="navbar">
      <div class="container">
        <div class="navbar-brand-wrapper d-flex w-100">
          <router-link to="/">
            <img class="h-35px" src="@/assets/landing/images/logo.svg" alt="" />
          </router-link>
          <router-link
            to="/sign-in"
            class="navbar-btn-mobile btn btn-info ml-auto mr-2"
          >
            Войти
          </router-link>
        </div>
        <div class="collapse navbar-collapse navbar-menu-wrapper">
          <ul
            class="navbar-nav align-items-lg-center align-items-start ml-auto"
          >
            <li class="nav-item">
              <a class="nav-link text-nowrap" href="#features-section">О нас</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#digital-marketing-section"
                >Преимущества</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact-section">Контакты</a>
            </li>
            <li class="nav-item btn-contact-us pl-4 pl-lg-0">
              <router-link to="/sign-in" class="btn btn-info"
                >Войти</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <div class="banner">
    <div class="container">
      <h1 class="font-weight-semibold fz-md-28px">
        Контроль Посещаемости &<br />
        Эффективность
      </h1>
      <h6 class="font-weight-normal text-muted pb-3">
        Точные Данные, Интеллектуальный Анализ и Оптимизация Ресурсов для Вашего
        Проекта
      </h6>
      <div>
        <router-link to="/sign-in" class="btn btn-opacity-light mr-1"
          >Войти</router-link
        >
        <router-link to="/sign-up" class="btn btn-opacity-success ml-1"
          >Регистрация</router-link
        >
      </div>
      <img
        src="@/assets/landing/images/Group171.svg"
        alt=""
        class="img-fluid"
      />
    </div>
  </div>

  <div class="content-wrapper">
    <div class="container">
      <section class="features-overview" id="features-section">
        <div class="content-header">
          <h2>Как это работает</h2>
          <h6 class="section-subtitle text-muted">
            Разберитесь в Тонкостях: Детальный Обзор Функционала на Примерах
          </h6>
        </div>
        <div class="d-md-flex justify-content-between">
          <div class="grid-margin d-flex justify-content-start">
            <div class="features-width">
              <img
                src="@/assets/landing/images/Group12.svg"
                alt=""
                class="img-icons"
              />
              <h5 class="py-3">Оптимизация<br />Скорости</h5>
              <p class="text-muted">
                Мгновенная оптимизация отметки посещаемости — экономия времени в
                каждом клике. Разгрузите вашу рутину с нашей ускоренной системой
                контроля посещаемости.
              </p>
            </div>
          </div>
          <div class="grid-margin d-flex justify-content-center">
            <div class="features-width">
              <img
                src="@/assets/landing/images/Group7.svg"
                alt=""
                class="img-icons"
              />
              <h5 class="py-3">Экономия</h5>
              <p class="text-muted">
                Экономия без ущерба: наша система оптимизирует ваш бюджет через
                эффективный мониторинг посещаемости. Прокачайте свои результаты
                с умным контролем!
              </p>
            </div>
          </div>
          <div class="grid-margin d-flex justify-content-end">
            <div class="features-width">
              <img
                src="@/assets/landing/images/Group5.svg"
                alt=""
                class="img-icons"
              />
              <h5 class="py-3">Отчетность &<br />Статистика</h5>
              <p class="text-muted">
                Отчетность и статистика на ваших пальцах: наша система позволяет
                создавать детальные отчеты всего в два клика. Просто, быстро,
                эффективно.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="digital-marketing-service" id="digital-marketing-section">
        <div class="row align-items-center">
          <div
            class="col-12 col-lg-7 grid-margin grid-margin-lg-0"
            data-aos="fade-right"
          >
            <h3 class="m-0">
              Разблокируйте свой потенциал <br />
              с передовым контролем!
            </h3>
            <div class="col-lg-7 col-xl-6 p-0">
              <p class="py-4 m-0 text-muted">
                Мы предоставляем высокотехнологичную систему контроля
                посещаемости, которая позволяет вам полностью освоить свой
                потенциал.
              </p>
              <p class="font-weight-semibold text-muted">
                Наша инновационная платформа обеспечивает точные данные и
                интеллектуальный анализ, помогая вам принимать обоснованные
                решения для успешного развития вашего проекта.
              </p>
            </div>
          </div>
          <div
            class="col-12 col-lg-5 p-0 img-digital grid-margin grid-margin-lg-0"
            data-aos="fade-left"
          >
            <img
              src="@/assets/landing/images/advantages-1.png"
              alt=""
              class="img-fluid"
            />
          </div>
        </div>
        <div class="row align-items-center">
          <div
            class="col-12 col-lg-7 text-center flex-item grid-margin"
            data-aos="fade-right"
          >
            <img
              src="@/assets/landing/images/advantages-2.png"
              alt=""
              class="img-fluid"
            />
          </div>
          <div
            class="col-12 col-lg-5 flex-item grid-margin"
            data-aos="fade-left"
          >
            <h3 class="m-0">
              Оптимизируйте эффективность<br />
              с оперативными инсайтами!
            </h3>
            <div class="col-lg-9 col-xl-8 p-0">
              <p class="py-4 m-0 text-muted">
                Наша система предоставляет реальные данные в режиме реального
                времени, позволяя вам моментально оптимизировать свою
                деятельность. Получайте оперативные инсайты для принятия
                стратегических решений.
              </p>
              <p class="pb-2 font-weight-semibold text-muted">
                Следите за результатами и добивайтесь максимальной эффективности
                в управлении вашим проектом.
              </p>
            </div>
            <router-link to="/sign-up" class="btn btn-info"
              >Регистрация</router-link
            >
          </div>
        </div>
      </section>

      <section class="case-studies" id="case-studies-section">
        <div class="row grid-margin">
          <div class="col-12 text-center pb-5">
            <h2>Наши тех. решения</h2>
            <h6 class="section-subtitle text-muted">
              Оптимизация процессов с простыми и эффективными технологическими
              решениями.
            </h6>
          </div>
          <div class="col-12 col-md-6 col-lg-3 stretch-card mb-3 mb-lg-0">
            <div class="card color-cards">
              <div class="card-body p-0">
                <div class="bg-primary text-center card-contents">
                  <div class="card-image">
                    <img
                      src="@/assets/landing/images/case-studies-1.jpeg"
                      class="case-studies-card-img"
                      alt=""
                    />
                  </div>
                  <div
                    class="card-desc-box d-flex align-items-center justify-content-around"
                  >
                    <div>
                      <h6 class="text-white pb-2 px-3">
                        Узнайте больше о стратегиях SEO и маркетинга, которые
                        повышают эффективность вашего онлайн-присутствия.
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="card-details text-center pt-4">
                  <h6 class="m-0 pb-1">Онлайн-Маркетинг</h6>
                  <p>Seo, Marketing</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 stretch-card mb-3 mb-lg-0">
            <div class="card color-cards">
              <div class="card-body p-0">
                <div class="bg-warning text-center card-contents">
                  <div class="card-image">
                    <img
                      src="@/assets/landing/images/case-studies-2.jpeg"
                      class="case-studies-card-img"
                      alt=""
                    />
                  </div>
                  <div
                    class="card-desc-box d-flex align-items-center justify-content-around"
                  >
                    <div>
                      <h6 class="text-white pb-2 px-3">
                        Погрузитесь в мир веб-разработки, чтобы понять, как мы
                        создаем мощные и инновационные веб-решения.
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="card-details text-center pt-4">
                  <h6 class="m-0 pb-1">Веб-Разработка</h6>
                  <p>Js, Vue.js</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 stretch-card mb-3 mb-lg-0">
            <div class="card color-cards">
              <div class="card-body p-0">
                <div class="bg-violet text-center card-contents">
                  <div class="card-image">
                    <img
                      src="@/assets/landing/images/case-studies-3.jpeg"
                      class="case-studies-card-img"
                      alt=""
                    />
                  </div>
                  <div
                    class="card-desc-box d-flex align-items-center justify-content-around"
                  >
                    <div>
                      <h6 class="text-white pb-2 px-3">
                        Исследуйте веб-дизайн, узнайте о нашем подходе к
                        созданию привлекательных и функциональных веб-сайтов.
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="card-details text-center pt-4">
                  <h6 class="m-0 pb-1">Веб-Дизайн</h6>
                  <p>Figma, Designing</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 stretch-card">
            <div class="card color-cards">
              <div class="card-body p-0">
                <div class="bg-success text-center card-contents">
                  <div class="card-image">
                    <img
                      src="@/assets/landing/images/case-studies-4.jpeg"
                      class="case-studies-card-img"
                      alt=""
                    />
                  </div>
                  <div
                    class="card-desc-box d-flex align-items-center justify-content-around"
                  >
                    <div>
                      <h6 class="text-white pb-2 px-3">
                        Познакомьтесь с процессами разработки программного
                        обеспечения и понимайте, как мы привносим инновации в
                        каждый проект.
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="card-details text-center pt-4">
                  <h6 class="m-0 pb-1">Программная Разработка</h6>
                  <p>Java, Spring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-us" id="contact-section">
        <div class="contact-us-bgimage grid-margin">
          <div class="pb-4">
            <h4 class="px-3 px-md-0 m-0">Еще остались вопросы?</h4>
            <h4 class="pt-1">Свяжитесь с нами</h4>
          </div>
          <div data-aos="fade-up">
            <button class="btn btn-rounded btn-outline-danger">Написать</button>
          </div>
        </div>
      </section>

      <section class="contact-details" id="contact-details-section">
        <div class="row justify-content-between text-center text-md-left">
          <div class="col-12 col-md-6 col-lg-3 grid-margin">
            <router-link to="/">
              <img
                class="h-35px pb-2"
                src="@/assets/landing/images/logo.svg"
                alt=""
              />
            </router-link>
          </div>

          <div class="col-12 col-md-6 col-lg-3 grid-margin text-md-right">
            <h5 class="pb-2">Контакты</h5>
            <div class="pt-2">
              <p class="text-muted m-0">
                support@smartaccess.kz - По всем вопросам.
              </p>
              <p class="text-muted m-0">
                8 (708) 418 46 50 - Колл-центр для сообщения об ошибках.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer class="border-top">
        <p class="text-center text-muted pt-4">
          Copyright © 2024<a class="px-1">SmartAccess.</a>Все права защищены.
        </p>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style lang="scss" scoped>
@import "@/assets/landing/scss/style.scss";
.content-wrapper {
  background-color: #fff;
}
</style>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
</style>
