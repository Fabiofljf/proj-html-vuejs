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
      <div class="navbar_menu">
        <div class="container">
          <div class="row flex-column">
            <div class="col border-bottom">
              <img
                src="./assets/img/logo-default-slim.png"
                alt="logo-default"
              />
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
      <div id="footer" class="bg-footer">
        <div class="container">
          <div class="row special_padding">
            <div class="col">
              <h6 class="text-uppercase text-light">about the blog</h6>
              <p class="text-xs-grey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                aut ratione eos praesentium itaque!
              </p>
              <br>
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
                <li class="d-flex" v-for="(article, index) in articles" :key="index">
                  <img :src="'./assets/img' + article.photo" alt="articolo">
                  <div class="text-ligth ps-2">
                    <p class="text-light mb-0">{{article.description}}</p>
                    <p class="text-light mb-0">{{article.date}}</p>
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
                      <a href="#">>
                        <span class="text-light">{{comment.name}}</span> commented on <span class="text-mare">{{comment.comment}}</span>
                      </a>
                    </p>
                    <p class="text-light mb-0">{{comment.date}}</p>
                </li>
              </ul>
            </div>
            <!-- /.col -->
            <div class="col">ciao</div>
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
          photo: 'our-office-4-square.jpg',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
          date: '12.53 AM Dec 19th'
        },
        {
          id: 2,
          photo: 'our-office-5-square.jpg',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
          date: '12.53 AM Dec 19th'
        }
      ],
      recentComments: [
        {
          id: 1,
          name: 'John Doe',
          comment: 'Lorem ipsum dolor sit amet.',
          date: '12.53 AM Dec 19th'
        },
        {
          id: 2,
          name: 'John Doe',
          comment: 'Lorem ipsum dolor sit amet.',
          date: '12.53 AM Dec 19th'
        }
      ]
    };
  },
};
</script>

<style lang="scss">
.bg-footer {
  background-color: $Bg-footer;
}

.bg-info_footer {
  background-color: $Bg-info_footer;
}

.special_padding {
  padding: 50px 0 150px;
}

#footer{
  li{
    img{
      border-radius: 50%;
    }
  }
  p{
    a{
      color: $C-s-grey;
    }
  }
}

#info_footer {
  img {
    width: 100px;
    padding: 50px 20px 50px 0px;
    filter: grayscale(1);
  }
  .flex-grow-4 {
    flex-grow: 4;
  }
  p {
    color: $C-s-grey;
    margin-bottom: 0;
    a {
      color: $C-s-grey;
    }
  }
}

@import "@/assets/scss/style.scss"; // - Import style.scss
</style>
