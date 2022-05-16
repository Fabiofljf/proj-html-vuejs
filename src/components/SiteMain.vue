<template>
  <div id="upMain">
    <CardPosts />
    <!-- /#cardPost -->

    <MiniCards />
    <!-- /#minicards -->
  </div>

  <!-- <section id="barraNav">
  </section> -->
  <!-- /#barraNav -->
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>