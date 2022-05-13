<template>
  <div id="app">
    <div id="site_header">
      <div id="menu" class="bg-mare">
        <div class="container">
          <div class="row">
            <div class="col d-flex py-3 text-light">
              <p class="m-0">Everything about Lifestyle, Travel and Gadgets!</p>
                <ul class="m-0 d-flex">
                  <li
                    class="text-uppercase ms-3"
                    v-for="(listitem, index) in menu"
                    :key="index"
                  >
                    <a class="text-light" :href="listitem.id">{{ listitem.point }}</a>
                  </li>
                </ul>
            </div>
            <!-- /.col -->
          </div>
        </div>
      </div>
      <!-- /#menu -->
      <div class="navbar_menu">
        <div class="container">
          <div class="row flex-column">
            <div class="col border-bottom">
              <img src="./assets/img/logo-default-slim.png" alt="logo-default">
            </div>
            <!-- /.col -->
            <div class="col">
              <ul class="m-0 ps-0 py-3 d-flex">
                  <li
                    class="text-uppercase me-3"
                    v-for="(nav, index) in navBarMenu"
                    :key="index"
                  >
                    <a class="text-dark" :href="nav.id">{{ nav.point }}</a>
                  </li>
                </ul>
            </div>
            <!-- /.col -->
          </div>
        </div>
      </div>
      <!-- /.navbar_menu -->
    </div>
    <!-- /#site_header -->

    <section id="site_footer">
      <div class="container">
        <div class="row flex-column">
          <div class="col">
            <div class="row">
              <div class="col">ciao</div>
              <!-- /.col -->
              <div class="col">ciao</div>
              <!-- /.col -->
              <div class="col">ciao</div>
              <!-- /.col -->
              <div class="col">ciao</div>
              <!-- /.col -->
            </div>
          </div>
          <!-- /.col -->
          <div class="col">ciao</div>
          <!-- /.col -->
        </div>
      </div>
    </section>
    <!-- /#site_footer -->
  </div>
</template>

<script>
//import SiteHeader from './components/SiteHeader.vue'
//import SiteMain from './components/SiteMain.vue'
//import SiteFooter from './components/SiteFooter.vue'

export default {
  name: "App",
  components: {
    //SiteHeader,
    //SiteMain,
    //SiteFooter,
  },
  data() {
    return {
      menu: [
        {
          id: "#sign_in",
          point: "sign in",
        },
        {
          id: "#about_us",
          point: "about us",
        },
        {
          id: "#contact_us",
          point: "contact us",
        },
        {
          id: "#buy_now",
          point: "buy now",
        },
      ],
      navBarMenu: [
        {
          id: "#home",
          point: "home",
        },
        {
          id: "#elements",
          point: "elements",
        },
        {
          id: "#features",
          point: "features",
        },
        {
          id: "#pages",
          point: "pages",
        },
        {
          id: "#portfolio",
          point: "portfolio",
        },
        {
          id: "#blog",
          point: "blog",
        },
        {
          id: "#shop",
          point: "shop",
        },
      ]
    };
  },
};
</script>

<style lang="scss">
.navbar_menu{
  img{
    width: 120px;
    padding: 50px 0;
  }
}
@import "@/assets/scss/style.scss"; // - Import style.scss
</style>
