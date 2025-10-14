<script setup>
import {defineProps} from 'vue';
import InfoCard from './InfoCard.vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true,
    validator: (items) => {
      return items.every(item => 'icon' in item && 'title' in item && 'description' in item);
    }
  }
});
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