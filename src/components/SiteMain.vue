<template>
  <div id="site_main">
    <div id="upMain">
      <CardPosts />
      <!-- /#cardPost -->

      <MiniCards />
      <!-- /#minicards -->
    </div>

    <section id="barraNav" class="bg-mare p-5">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="prev" @click="prev">
              <a href="#">
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
              </a>
            </div>
          </div>
          <!-- /.col arrow sx-->
          <div class="col-10">
            <ul class="d-flex">
            <li v-for="(categorie, index) in categories" :key="index">
              <div class="categoryCard">ciao</div>
            </li>
          </ul>
          </div>
          <!-- /.col menu-->
          <div class="col">
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
    

  </div>
  <!-- /#site_main -->
</template>

<script>
import CardPosts from "@/components/CardPosts.vue"
import MiniCards from "@/components/MiniCards.vue"


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
      activeImage: 0
    }
  },
  methods: {
        next() {
            console.log('next');
            this.activeImage++
                if (this.activeImage === this.images.length) {
                    this.activeImage = 0;
                }
        },
        prev() {
            console.log('prev');
            if (this.activeImage === 0) {
                this.activeImage = this.images.length - 1;
            }
            this.activeImage--
        },
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.categoryCard{
  background-color: black;
    width: fit-content;
    padding: 5px 15px;
    color: white;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
}
#barraNav{
  a{
    color: black;
  }
}

</style>