<template>
  <section id="cardPost">
    <div class="container">
      <div class="row row-cols-3">
        <div class="card" v-for="(card, index) in cardsPost" :key="index">
          <img :src="card.photo" alt="card" />
          <div class="bannerCardPost">{{card.category}}</div>
          <p class="textCardPost">{{card.post}}</p>
        </div>
      </div>
    </div>
  </section>
  <!-- /#cardPost -->
</template>

<script>
export default {
  name: "SiteMain",
  data() {
    return {
      cardsPost: [
        {
          id: 1,
          photo: require("@/assets/img/blog-46.jpg"),
          category: "photography",
          post: "How To Take Better Concert Pictures in 30 Seconds",
        },
        {
          id: 2,
          photo: require("@/assets/img/blog-47.jpg"),
          category: "gadgets",
          post: "Gadgets That Make Yout Smartphone Even Smarter",
        },
        {
          id: 3,
          photo: require("@/assets/img/blog-48.jpg"),
          category: "travel",
          post: "20Top-Rated Tourist Attractions in Manhattan",
        },
        {
          id: 4,
          photo: require("@/assets/img/blog-49.jpg"),
          category: "lifestyle",
          post: "The Best Way To Ride a Motorcycle",
        },
        {
          id: 5,
          photo: require("@/assets/img/blog-50.jpg"),
          category: "travel",
          post: "5 Fun Things to Do at the Beach",
        },
        {
          id: 6,
          photo: require("@/assets/img/blog-51.jpg"),
          category: "recipes",
          post: "Amazingly Fresh Fruit And Herb Drinks For Summer",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#cardPost {
  background-color: $Bg-xs-grey;
  .row {
    padding: 30px 0 30px;
    .card {
      width: calc(100% / 3 - 20px);
      margin: 10px;
      padding: 0;
      border: 0;
      .bannerCardPost {
        background-color: $Bg-mare;
        color: $C-light;
        text-transform: uppercase;
        font-size: 10px;
        font-weight: bold;
        width: fit-content;
        padding: 3px;
        position: absolute;
        bottom: 30%;
        left: 5%;
      }
      .textCardPost{
        color: $C-light;
        font-weight: bold;
        position: absolute;
        margin-bottom: 0;
        bottom: 10%;
        left: 5%;
      }
    }
  }
}
</style>