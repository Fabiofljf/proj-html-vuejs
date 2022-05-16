<template>
  <div id="site_main">
    <div id="upMain">
      <CardPosts />
      <!-- /#cardPost -->

      <MiniCards />
      <!-- /#minicards -->
    </div>
    <!-- /#upMain -->

    <section id="barraNav" class="bg-mare p-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col">
            <div class="prev" @click="prev">
              <a href="#">
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
              </a>
            </div>
          </div>
          <!-- /.col arrow sx-->
          <div class="col-11">
            <ul class="d-flex justify-content-between m-0 p-0">
              <li v-for="(categorie, index) in categories" :key="index">
                <div class="categoryCard">
                  <a class="text-light" href="#">{{ categorie.type }}</a>
                </div>
              </li>
            </ul>
          </div>
          <!-- /.col menu-->
          <div class="col d-flex justify-content-end">
            <div class="next" @click="next">
              <a href="#">
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
              </a>
            </div>
          </div>
          <!-- /.col arrow dx-->
        </div>
      </div>
    </section>
    <!-- /#barraNav -->

    <div id="downMain">
      <section id="postShare">
        <div class="container">
          <div class="row">
            <PostsShared />
            <div class="col">
              <div class="twitter">
                <div class="textSocial mb-2">Lastest from Twitter</div>
                <ul class="ps-0">
                  <li class="d-flex">
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                    <div class="size-11 ps-2">
                      <p class="mb-0 text-s-grey">
                        We have just updated Porto Admin. Check the changelog
                        for more infomartion.
                      </p>
                      <p class="text-mare mb-0">01:05 PM Sep 18th</p>
                    </div>
                  </li>
                  <li class="d-flex">
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                    <div class="size-11 ps-2">
                      <p class="mb-0 text-s-grey">
                        If you have any suggestions for the next updates, let us
                        know.
                      </p>
                      <p class="text-mare mb-0">01:05 PM Sep 18th</p>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- /.twitter -->
              <div class="instagram">
                <div class="textSocial">Photo from Instagram</div>
                <div class="d-flex flex-wrap my-2">
                  <img src="@/assets/img/img1.jpg" alt="foto instagram">
                  <img src="@/assets/img/img2.jpg" alt="foto instagram">
                  <img src="@/assets/img/img3.jpg" alt="foto instagram">
                  <img src="@/assets/img/img4.jpg" alt="foto instagram">
                  <img src="@/assets/img/img5.jpg" alt="foto instagram">
                  <img src="@/assets/img/img6.jpg" alt="foto instagram">
                </div>
              </div>
              <!-- /.instagram -->
              <div class="tag">
                <div class="textSocial">Tags</div>
                <ul class="ps-0 d-flex">
                  <li class="tags me-2">
                    <a href="#"> Design </a>
                  </li>
                  <li class="tags me-2">
                    <a href="#"> Brands </a>
                  </li>
                  <li class="tags me-2">
                    <a href="#"> Video </a>
                  </li>
                  <li class="tags me-2">
                    <a href="#"> Business </a>
                  </li>
                  <li class="tags">
                    <a href="#"> Travel </a>
                  </li>
                </ul>
              </div>
              <!-- /.tag -->
              <div class="facebook">
                <div class="textSocial mb-3">Find Us On Facebook</div>
                <div>
                  <a class="border-start border-5" href="#">Okler Themes</a>
                </div>
              </div>
              <!-- /.facebook -->
            </div>
            <!-- /.col Social-->
          </div>
        </div>
      </section>
    </div>
    <!-- /#downMain -->
  </div>
  <!-- /#site_main -->
</template>

<script>
import CardPosts from "@/components/CardPosts.vue";
import MiniCards from "@/components/MiniCards.vue";
import PostsShared from "@/components/PostsShared.vue";

export default {
  name: "SiteMain",
  components: {
    CardPosts,
    MiniCards,
    PostsShared,
  },
  data() {
    return {
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
      ],
      activeImage: 0
    };
  },
  methods: {
    next() {
      console.log("next");
      this.activeImage++;
      if (this.activeImage === this.images.length) {
        this.activeImage = 0;
      }
    },
    prev() {
      console.log("prev");
      if (this.activeImage === 0) {
        this.activeImage = this.images.length - 1;
      }
      this.activeImage--;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>