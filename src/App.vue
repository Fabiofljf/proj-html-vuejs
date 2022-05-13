<template>
  <div id="app">
      <div id="site_header">
        <div class="container">
          <div class="row flex-column">
            <div class="col">
              <p>Everything about Lifestyle, Travel and Gadgets!</p>
              <div class="menu">
                <ul>
                  <li class="text-uppercase" v-for="(listitem, index) in menu" :key="index">
                    {{listitem.point}}
                  </li>
                </ul>
              </div>
              <!-- /.menu -->
            </div>
            <!-- /.col -->
            <div class="col">ciao</div>
            <!-- /.col -->
            <div class="col">ciao</div>
            <!-- /.col -->
          </div>
        </div>
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
  name: 'App',
  components: {
    //SiteHeader,
    //SiteMain,
    //SiteFooter,
  },
  data() {
    return {
      menu: [
        {
          id: 1,
          point: 'sign in'
        },
        {
          id: 2,
          point: 'about us'
        },{
          id: 3,
          point: 'contact us'
        },{
          id: 4,
          point: 'buy now'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss'
</style>
