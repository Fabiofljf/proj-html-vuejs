<template>
  <div id="site_header">
      <div id="menu" class="bg-mare">
        <div class="container">
          <div class="row">
            <div class="col d-flex py-3 text-light">
              <p class="m-0 size-12">
                Everything about Lifestyle, Travel and Gadgets!
              </p>
              <ul class="m-0 d-flex">
                <li
                  class="text-uppercase ms-3 size-12 bold"
                  v-for="(listitem, index) in menu"
                  :key="index"
                >
                  <SiteHeaderMenu :nav_menu="listitem.point" :id_menu="listitem.id"/>
                </li>
              </ul>
            </div>
            <!-- /.col -->
          </div>
        </div>
      </div>
      <!-- /#menu -->

      <div class="logo_menu border-bottom">
        <div class="container">
          <div class="row">
            <div class="col">
              <img
                src="../assets/img/logo-default-slim.png"
                alt="logo-default"
              />
            </div>
            <!-- /.col logo-->
          </div>
        </div>
      </div>
      <!-- /.logo_menu -->

      <div class="navbar_menu">
        <div class="container">
          <div class="row">
            <div class="col">
              <ul class="m-0 ps-0 py-3 d-flex">
                <li
                  class="text-uppercase me-3 bold"
                  v-for="(nav, index) in navBarMenu"
                  :key="index"
                >
                  <a
                    class="text_dark"
                    :href="nav.id"
                    :class="nav.point === 'home' ? 'active' : ''"
                    >{{ nav.point }}</a
                  >
                </li>
              </ul>
            </div>
            <!-- /.col navbar-->
            <div class="col d-flex justify-content-end align-items-center">
              <a class="text_dark" href="#">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
              </a>
            </div>
            <!-- /.col search-->
          </div>
        </div>
      </div>
      <!-- /.navbar_menu -->
    </div>
    <!-- /#site_header -->
</template>

<script>
import SiteHeaderMenu from '@/components/SiteHeaderMenu.vue'


export default {
  name: 'SiteHeader',
  components:{
    SiteHeaderMenu,
  },
  data() {
    return {
      menu: [
        {
          id: "sign-in",
          point: "sign in",
        },
        {
          id: "about-us",
          point: "about us",
        },
        {
          id: "contact-us",
          point: "contact us",
        },
        {
          id: "buy-now",
          point: "buy now",
        },
      ],
      navBarMenu: [
        {
          id: "home",
          point: "home",
        },
        {
          id: "elements",
          point: "elements",
        },
        {
          id: "features",
          point: "features",
        },
        {
          id: "pages",
          point: "pages",
        },
        {
          id: "portfolio",
          point: "portfolio",
        },
        {
          id: "blog",
          point: "blog",
        },
        {
          id: "shop",
          point: "shop",
        },
      ]
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
