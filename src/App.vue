<script setup lang="ts">

import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<style scoped>

</style>