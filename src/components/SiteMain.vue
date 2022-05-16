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
            <ul class="d-flex justify-content-around m-0">
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
          <div class="row flex-column">
            <div class="col-9">
              <div class="card" v-for="(postShare, index) in postsShare" :key="index">
                <img :src="postShare.photo" alt="foto post">
                <div class="containerTextPost d-flex ">
                  <div class="calendary">ciao</div>
                  <div class="textof d-flex flex-column">
                    <h2>{{postShare.post}}</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia, eos enim facere nobis quae ipsa laborum a voluptates odit tempora quod sit error maxime ad, libero unde praesentium non voluptatum, reprehenderit repudiandae saepe cum. Esse natus ipsam quis aperiam aliquam. Veniam, tempora ut culpa deserunt eligendi velit dolor qui.</p>
                    <div class="tagPost d-flex justify-content-between">
                      <div class="tag">ciao</div>
                      <div class="more">ciao</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.col Post shared-->
            <div class="col"></div>
            <!-- /.col info-->
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

export default {
  name: "SiteMain",
  components: {
    CardPosts,
    MiniCards,
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
      activeImage: 0,
      postsShare: [
        {
          id: 1,
          photo: require('@/assets/img/blog-54.jpg'),
          post: 'How to Make Friends as a Grown-Up',
          artist: 'John Doe',
          category: 'Lifestyle, Travel',
          comments: '12 Comments'
        },
        {
          id: 2,
          photo: require('@/assets/img/blog-55 (1).jpg'),
          post: 'Simple Ways to Have a Pretty Face',
          artist: 'John Doe',
          category: 'Photography, Travel',
          comments: '12 Comments'
        },
        {
          id: 3,
          photo: require('@/assets/img/blog-56 (1).jpg'),
          post: 'Ranking the greatest players in basketball',
          artist: 'John Doe',
          category: 'Sports, Travel',
          comments: '12 Comments'
        },
        {
          id: 4,
          photo: require('@/assets/img/blog-58 (1).jpg'),
          post: 'Top Camper Trailer Towing Tips',
          artist: 'John Doe',
          category: 'Travel, Lifestyle',
          comments: '12 Comments'
        },
        {
          id: 5,
          photo: require('@/assets/img/blog-58 (1).jpg'),
          post: '10 Best Travel Tips After 5 Years Traveling The World',
          artist: 'John Doe',
          category: 'Travel, Lifestyle',
          comments: '12 Comments'
        },
      ]
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
#postShare{
  padding: 30px 0 30px;
  .card{
    img{
      height: 250px;
      object-fit: cover;
    }
  }
}
</style>