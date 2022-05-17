<template>
  <div class="col-9 flex-column">
    <div
      class="card border-0 mb-2"
      v-for="(postShare, index) in postsShare"
      :key="index"
    >
      <img :src="postShare.photo" alt="foto post" />
      <div class="containerTextPost d-flex py-4">
        <div class="calendary me-2">
          <div class="day">12</div>
          <div class="month">JAN</div>
        </div>
        <div class="textofPost d-flex flex-column border-bottom">
          <h4>{{ postShare.post }}</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
            numquam reprehenderit sit quam est ratione! Reiciendis quam nostrum
            perspiciatis alias, eligendi laboriosam sequi? Maxime dolorem soluta
            fuga est accusamus! Esse, culpa vel! Esse vero dolor temporibus sit!
            Nobis laboriosam, esse quia rerum commodi eum ipsum eligendi? Rem
            ipsa deleniti ipsum quo aperiam [...]
          </p>
          <div
            class="tagPost d-flex justify-content-between align-items-center"
          >
            <div class="tag size-11 d-flex">
              <div class="me-2">
                <font-awesome-icon icon="fa-regular fa-user" />
                By
                <a href="#null">
                  {{ postShare.artist }}
                </a>
              </div>
              <div class="me-2">
                <font-awesome-icon icon="fa-regular fa-folder" />
                <a href="#null">
                  {{ postShare.category }}
                </a>
              </div>
              <div class="me-2">
                <font-awesome-icon icon="fa-regular fa-comments" />
                <a href="#null">
                  {{ postShare.comments }}
                </a>
              </div>
            </div>
            <div class="more border">
              <a href="#null">read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pages">
      <nav aria-label="Page navigation example">
        <ul class="pagination my-2 justify-content-end">
          <li class="page-item">
            <a class="page-link" href="#null" aria-label="Previous">
              <span aria-hidden="true">&lt;</span>
            </a>
          </li>
          <li class="page-item">
            <a
              style="background-color: #0088cc"
              class="page-link text-light"
              href="#null"
              >1</a
            >
          </li>
          <li class="page-item"><a class="page-link" href="#null">2</a></li>
          <li class="page-item"><a class="page-link" href="#null">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#null" aria-label="Next">
              <span aria-hidden="true">&gt;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- /.pages -->
  </div>
  <!-- /.col Post shared-->
</template>

<script>
export default {
  name: "PostsShared",
  data() {
    return {
      postsShare: [
        {
          id: 1,
          photo: require("@/assets/img/blog-54.jpg"),
          post: "How to Make Friends as a Grown-Up",
          artist: "John Doe",
          category: "Lifestyle, Travel",
          comments: "12 Comments",
        },
        {
          id: 2,
          photo: require("@/assets/img/blog-55 (1).jpg"),
          post: "Simple Ways to Have a Pretty Face",
          artist: "John Doe",
          category: "Photography, Travel",
          comments: "12 Comments",
        },
        {
          id: 3,
          photo: require("@/assets/img/blog-56 (1).jpg"),
          post: "Ranking the greatest players in basketball",
          artist: "John Doe",
          category: "Sports, Travel",
          comments: "12 Comments",
        },
        {
          id: 4,
          photo: require("@/assets/img/blog-58 (1).jpg"),
          post: "Top Camper Trailer Towing Tips",
          artist: "John Doe",
          category: "Travel, Lifestyle",
          comments: "12 Comments",
        },
        {
          id: 5,
          photo: require("@/assets/img/blog-555.png"),
          post: "10 Best Travel Tips After 5 Years Traveling The World",
          artist: "John Doe",
          category: "Travel, Lifestyle",
          comments: "12 Comments",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>