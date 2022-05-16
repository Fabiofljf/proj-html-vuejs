<template>
  <section id="site_footer">
    <div id="footer">
      <div class="container">
        <div class="row special_padding">
          <div class="col">
            <h6 class="text-uppercase text-light size-12 semiBold">
              about the blog
            </h6>
            <p class="text-s-grey size-11">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              aut ratione eos praesentium itaque!
            </p>
            <br />
            <p class="text-s-grey size-11">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              porro distinctio adipisci accusamus deleniti.
            </p>
            <a href="#" class="text-uppercase text-light size-12 semiBold"
              >> view more</a
            >
          </div>
          <!-- /.col about the blog -->
          <div class="col">
            <h6 class="text-uppercase text-light size-12 semiBold">
              recent post
            </h6>
            <ul class="ps-0">
              <li
                class="d-flex"
                v-for="(article, index) in articles"
                :key="index"
              >
                <img :src="article.photo" alt="articolo" />
                <div class="size-11 text-xs-grey ps-2">
                  <p class="mb-0">{{ article.description }}</p>
                  <p class="text-s-grey mb-0">{{ article.date }}</p>
                </div>
              </li>
            </ul>
          </div>
          <!-- /.col recent post -->
          <div class="col">
            <h6 class="text-uppercase text-light size-12 semiBold">
              recent comment
            </h6>
            <ul class="ps-0">
              <li v-for="(comment, index) in recentComments" :key="index">
                <p class="mb-0 size-11">
                  <a class="text-xs-grey" href="#">
                    <span class="text-mare">> </span>
                    <span class="text-light">{{ comment.name }}</span>
                    commented on
                    <span class="text-mare">{{ comment.comment }}</span>
                  </a>
                </p>
                <p class="text-s-grey mb-0 size-11">{{ comment.date }}</p>
              </li>
            </ul>
          </div>
          <!-- /.col recent comment -->
          <div class="col">
            <h6 class="text-uppercase text-light size-12 semiBold">
              categories
            </h6>
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
    <div id="info_footer">
      <div class="container">
        <div class="row">
          <div class="col d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center flex-grow-4">
              <img src="../assets/img/logo-footer.png" alt="logo" />
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
      <div class="btnToUp rounded-top">
        <a href="#">
          <font-awesome-icon icon="fa-solid fa-chevron-up" />
        </a>
      </div>
    </div>
    <!-- /#info_footer -->
  </section>
  <!-- /#site_footer -->
</template>

<script>
export default {
  name: "SiteFooter",
  data() {
    return {
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
          photo: require("@/assets/img/our-office-4-square.jpg"),
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
          date: "12.53 AM Dec 19th",
        },
        {
          id: 2,
          photo: require("@/assets/img/our-office-5-square.jpg"),
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>