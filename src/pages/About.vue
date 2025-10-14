<script setup>
import {ref, onMounted} from 'vue';

const features = ref([]);
const technologies = ref([]);

onMounted(() => {
  fetch('/data/features.json')
    .then(response => response.json())
    .then(data => {
      features.value = data;
    });

  fetch('/data/technologies.json')
    .then(response => response.json())
    .then(data => {
      technologies.value = data;
    });
});
</script>

<template>
  <div class="about-page">
    <!-- About Section -->
    <section class="about-section py-5 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-12">
            <h1 class="display-4 fw-bold">About TheOnlyTool</h1>
            <p class="lead">Your ultimate solution for productivity and efficiency</p>
            <p>TheOnlyTool is a web application designed to provide a collection of useful tools for daily tasks. It's built with modern web technologies to ensure fast performance and a great user experience.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section py-5">
      <div class="container">
        <h2 class="text-center mb-5">Key Features</h2>
        <div class="row text-center">
          <div class="col-md-4 mb-4" v-for="feature in features" :key="feature.title">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <i :class="feature.icon" class="display-6 text-primary mb-3"></i>
                <h5 class="card-title">{{ feature.title }}</h5>
                <p class="card-text">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section class="technologies-section py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5">Technologies Used</h2>
        <div class="row text-center">
          <div class="col-md-4 mb-4" v-for="tech in technologies" :key="tech.title">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <i :class="tech.icon" class="display-6 text-primary mb-3"></i>
                <h5 class="card-title">{{ tech.title }}</h5>
                <p class="card-text">{{ tech.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Creator Section -->
    <section class="creator-section py-5">
      <div class="container">
        <h2 class="text-center mb-5">About the Creator</h2>
        <div class="row">
          <div class="col-md-4 text-center">
            <img src="https://avatars.githubusercontent.com/u/27690651?v=4" alt="Creator Avatar" class="rounded-circle" style="width: 150px; height: 150px;">
          </div>
          <div class="col-md-8">
            <h3>Alex6dj</h3>
            <p>Software developer with a passion for creating useful tools and open-source projects. TheOnlyTool is one of my personal projects aimed at helping developers and users improve their productivity.</p>
            <p>You can find more about my work on my <a href="https://github.com/alex6dj/" target="_blank" rel="noopener noreferrer">GitHub profile</a>.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.about-section {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  color: #333;
}

.features-section {
  background-color: #ffffff;
}

.technologies-section {
  background-color: #f8f9fa;
}

.creator-section {
  background-color: #ffffff;
}

.card {
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

img {
  border-radius: 10px;
}
</style>