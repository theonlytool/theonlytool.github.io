<script setup>
import {ref, onMounted} from 'vue';
import InfoCardContainer from "@/components/InfoCardContainer.vue";

const features = ref([]);

onMounted(() => {
  fetch('/data/features.json')
      .then(response => response.json())
      .then(data => {
        features.value = data;
      });
});
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section text-center py-5 bg-light">
      <div class="container">
        <h1 class="display-4 fw-bold">Welcome to TheOnlyTool</h1>
        <p class="lead">Your ultimate solution for productivity and efficiency</p>
        <a href="#features" class="btn btn-primary btn-lg mt-3">Get Started</a>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features-section py-5">
      <InfoCardContainer title="Key Features" :items="features"/>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section py-5 text-center bg-primary text-white">
      <div class="container">
        <h2 class="mb-4">Ready to Get Started?</h2>
        <p class="lead mb-4">Join developers and users worldwide who enhance their productivity with TheOnlyTool</p>
        <a href="/tools" class="btn btn-light btn-lg">Explore Tools</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.hero-section {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  color: #333;
}

.features-section {
  background-color: #f8f9fa;
}

.cta-section {
  background-color: #007bff;
  color: white;
}
</style>