<template>
  <div id="app">
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
                  <a class="text-light" :href="listitem.id">{{
                    listitem.point
                  }}</a>
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
                src="./assets/img/logo-default-slim.png"
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
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </div>
            <!-- /.col search-->
          </div>
        </div>
      </div>
      <!-- /.navbar_menu -->
    </div>
    <!-- /#site_header -->

    <section id="site_footer">
      <div id="footer" class="bg-footer">
        <div class="container">
          <div class="row special_padding">
            <div class="col">
              <h6 class="text-uppercase text-light">about the blog</h6>
              <p class="text-xs-grey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                aut ratione eos praesentium itaque!
              </p>
              <br />
              <p class="text-xs-grey">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam porro distinctio adipisci accusamus deleniti.
              </p>
              <a href="#" class="text-uppercase text-light">> view more</a>
            </div>
            <!-- /.col about the blog -->
            <div class="col">
              <h6 class="text-uppercase text-light">recent post</h6>
              <ul class="ps-0">
                <li
                  class="d-flex"
                  v-for="(article, index) in articles"
                  :key="index"
                >
                  <img :src="'./assets/img' + article.photo" alt="articolo" />
                  <div class="text-ligth ps-2">
                    <p class="text-light mb-0">{{ article.description }}</p>
                    <p class="text-light mb-0">{{ article.date }}</p>
                  </div>
                </li>
              </ul>
            </div>
            <!-- /.col recent post -->
            <div class="col">
              <h6 class="text-uppercase text-light">recent comment</h6>
              <ul class="ps-0">
                <li v-for="(comment, index) in recentComments" :key="index">
                  <p class="text-light mb-0">
                    <a href="#"
                      >>
                      <span class="text-light">{{ comment.name }}</span>
                      commented on
                      <span class="text-mare">{{ comment.comment }}</span>
                    </a>
                  </p>
                  <p class="text-light mb-0">{{ comment.date }}</p>
                </li>
              </ul>
            </div>
            <!-- /.col recent comment -->
            <div class="col">
              <h6 class="text-uppercase text-light">categories</h6>
              <div class="d-flex flex-wrap">
                <div
                  class="categories"
                  v-for="(category, index) in categories"
                  :key="index"
                >
                  <a :href="category.type">{{ category.type }}</a>
                </div>
              </div>
            </div>
            <!-- /.col -->
          </div>
        </div>
      </div>
      <!-- /#footer -->
      <div id="info_footer" class="bg-info_footer">
        <div class="container">
          <div class="row">
            <div class="col d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center flex-grow-4">
                <img src="./assets/img/logo-footer.png" alt="logo" />
                <p>© Copyright 2020. All Rights Reserved.</p>
              </div>
              <!-- /.logo_footer + copryright-->
              <div class="d-flex justify-content-around flex-grow-1">
                <p v-for="(link, index) in link_footer" :key="index">
                  <a :href="link.id">{{ link.link }}</a>
                </p>
              </div>
              <!-- /.link -->
            </div>
          </div>
        </div>
      </div>
      <!-- /#info_footer -->
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
      ],
      link_footer: [
        {
          id: "faq",
          link: "> FAQ's",
        },
        {
          id: "sitemap",
          link: "> Sitemap",
        },
        {
          id: "contact-us",
          link: "> Contact Us",
        },
      ],
      articles: [
        {
          id: 1,
          photo: "our-office-4-square.jpg",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
          date: "12.53 AM Dec 19th",
        },
        {
          id: 2,
          photo: "our-office-5-square.jpg",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
          date: "12.53 AM Dec 19th",
        },
      ],
      recentComments: [
        {
          id: 1,
          name: "John Doe",
          comment: "Lorem ipsum dolor sit amet.",
          date: "12.53 AM Dec 19th",
        },
        {
          id: 2,
          name: "John Doe",
          comment: "Lorem ipsum dolor sit amet.",
          date: "12.53 AM Dec 19th",
        },
      ],
      categories: [
        {
          id: 1,
          type: "gadgets",
        },
        {
          id: 2,
          type: "photography",
        },
        {
          id: 3,
          type: "lifestyle",
        },
        {
          id: 4,
          type: "fashion",
        },
        {
          id: 5,
          type: "recipes",
        },
        {
          id: 6,
          type: "travel",
        },
        {
          id: 7,
          type: "business",
        },
        {
          id: 8,
          type: "architecture",
        },
        {
          id: 9,
          type: "reviews",
        },
        {
          id: 10,
          type: "sport",
        },
        {
          id: 11,
          type: "videos",
        },
        {
          id: 12,
          type: "technology",
        },
        {
          id: 13,
          type: "design",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss"; // - Import style.scss
</style>
