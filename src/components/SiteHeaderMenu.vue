<template>
  <a class="text-light" :href="id_menu">{{ nav_menu }}</a>
</template>

<script>
export default {
  name: "SiteHeader-Menu",
  props:{
    nav_menu: String,
    id_menu: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
