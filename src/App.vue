<template>
  <div id="app">
    <div id="site_header">
      <div id="menu" class="bg-mare">
        <div class="container">
          <div class="row">
            <div class="col d-flex p-3 text-light">
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
            <div class="col">ciao</div>
            <!-- /.col -->
            <div class="col">ciao</div>
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
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
