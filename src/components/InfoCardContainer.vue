<script setup lang="ts">
import InfoCard from './InfoCard.vue';

interface Item {
  icon: string;
  title: string;
  description: string;
}

interface Props {
  title: string;
  items: Item[];
}

defineProps<Props>();
</script>

<template>
  <div class="container">
    <h2 class="text-center mb-5">{{ title }}</h2>
    <div class="row text-center">
      <div class="col-md-4 mb-4" v-for="item in items" :key="item.title">
        <InfoCard :icon="item.icon" :title="item.title" :description="item.description"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>