<script setup>
import InfoCardContainer from "@/components/InfoCardContainer.vue";
import {useFeatures} from "@/composables/useFeatures.js";

const {features, isLoading, error} = useFeatures()
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
      <InfoCardContainer v-if="!isLoading" title="Key Features" :items="features"/>
      <p class="text-center" v-else>
        <span class="loader"></span>
      </p>
      <p v-if="error">Error loading features: {{ error.message }}</p>
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

.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-bottom-color: #FF3D00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>