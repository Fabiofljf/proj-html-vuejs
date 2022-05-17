<template>
  <section id="miniCards">
    <div class="container">
      <div class="row">
        <div class="col">
          <h6 class="text-title">popular post</h6>
          <ul class="ps-0">
            <li
              class="d-flex border-bottom margin-inherit"
              v-for="(popularPost, index) in popularPosts"
              :key="index"
            >
              <img :src="popularPost.photo" alt="articolo" />
              <div class="size-11 text-xs-grey ps-2">
                <p class="mb-0 text_dark">{{ popularPost.post }}</p>
                <p class="text-s-grey mb-0">{{ popularPost.date }}</p>
              </div>
            </li>
          </ul>
        </div>
        <!-- /.col popular post -->
        <div class="col">
          <h6 class="text-title">recent post</h6>
          <ul class="ps-0">
            <li
              class="d-flex border-bottom margin-inherit"
              v-for="(recentPost, index) in recentPosts"
              :key="index"
            >
              <img :src="recentPost.photo" alt="articolo" />
              <div class="size-11 text-xs-grey ps-2">
                <p class="mb-0 text_dark">{{ recentPost.post }}</p>
                <p class="text-s-grey mb-0">{{ recentPost.date }}</p>
              </div>
            </li>
          </ul>
        </div>
        <!-- /.col recent post -->
        <div class="col d-flex flex-column">
          <div class="col mb-4">
            <h6 class="text-title">featured post</h6>
            <div class="card">
              <img src="@/assets/img/blog-66.jpg" alt="card" />
              <div class="containerCardPost">
                <div class="bannerCardPost">recipes</div>
                <p class="textCardPost">
                  Tips to Help You Quickly Prepare your Lunch
                </p>
              </div>
            </div>
          </div>
          <!-- /.col featured post-->
          <div class="col">
            <h6 class="text-title">featured actor</h6>
            <ul class="ps-0">
              <li class="featuredActor d-flex">
                <img src="@/assets/img/avatar.jpg" alt="articolo" />
                <div class="size-13 text-xs-grey ps-2">
                  <p class="bold size-16 mb-0 text_dark">Jonh Doe</p>
                  <p class="text-s-grey mb-0">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Similique ipsum sapiente corporis, tempore obcaecati harum
                    dolore impedit.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <!-- /.col featured actor-->
        </div>
        <!-- /.col featured -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MiniCards",
  data() {
    return {
      popularPosts: [
        {
          id: 1,
          photo: require("@/assets/img/blog-55.jpg"),
          post: "Simple Ways To Have a Pretty Face",
          date: "January 12, 2019",
        },
        {
          id: 2,
          photo: require("@/assets/img/blog-56.jpg"),
          post: "Ranking the greatest players in basketball",
          date: "January 12, 2019",
        },
        {
          id: 3,
          photo: require("@/assets/img/blog-57.jpg"),
          post: "4 Ways to Look Cool in Glasses",
          date: "January 12, 2019",
        },
        {
          id: 4,
          photo: require("@/assets/img/blog-58.jpg"),
          post: "Top Camper Trailer Towing Tips",
          date: "January 12, 2019",
        },
        {
          id: 5,
          photo: require("@/assets/img/blog-59.jpg"),
          post: "5 Lovely Walks in New York",
          date: "January 12, 2019",
        },
      ],
      recentPosts: [
        {
          id: 11,
          photo: require("@/assets/img/blog-65.jpg"),
          post: "Main Reasons To Stop Texting And Drinving",
          date: "January 12, 2019",
        },
        {
          id: 12,
          photo: require("@/assets/img/blog-66 (1).jpg"),
          post: "Tips to Help You Quickly Prepare ypur Lunch",
          date: "January 12, 2019",
        },
        {
          id: 13,
          photo: require("@/assets/img/blog-67.jpg"),
          post: "Why should I buy a smartwatch",
          date: "January 12, 2019",
        },
        {
          id: 14,
          photo: require("@/assets/img/blog-68.jpg"),
          post: "The best augmented reality smartglasses",
          date: "January 12, 2019",
        },
        {
          id: 15,
          photo: require("@/assets/img/blog-69.jpg"),
          post: "12 Healthiest Foods to Eat for Breafast",
          date: "January 12, 2019",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>