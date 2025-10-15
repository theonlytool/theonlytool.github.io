<script setup>
import InfoCardContainer from "@/components/InfoCardContainer.vue";

const features = [
  {
    "icon": "bi bi-tools",
    "title": "Powerful Tools",
    "description": "Access a wide range of tools to enhance your productivity."
  },
  {
    "icon": "bi bi-joystick",
    "title": "Easy to use",
    "description": "Customize every aspect of the application to fit your needs."
  },
  {
    "icon": "bi bi-geo-alt",
    "title": "Everything you need",
    "description": "Everything you need is already in a single place"
  }
];

const technologies = [
  {
    "icon": "bi bi-code-slash",
    "title": "Vue.js",
    "description": "Progressive JavaScript framework for building user interfaces."
  },
  {
    "icon": "bi bi-bootstrap",
    "title": "Bootstrap",
    "description": "Popular CSS framework for responsive design."
  },
  {
    "icon": "bi bi-github",
    "title": "GitHub",
    "description": "Version control and collaboration platform."
  }
];
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
            <p>TheOnlyTool is a web application designed to provide a collection of useful tools for daily tasks. It's
              built with modern web technologies to ensure fast performance and a great user experience.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section py-5">
      <InfoCardContainer title="Key Features" :items="features"/>
    </section>

    <!-- Technologies Section -->
    <section class="technologies-section py-5">
      <InfoCardContainer title="Technologies Used" :items="technologies"/>
    </section>

    <!-- About Creator Section -->
    <section class="creator-section py-5">
      <div class="container">
        <h2 class="text-center mb-5">About the Creator</h2>
        <div class="row">
          <div class="col-md-4 text-center">
            <img src="https://avatars.githubusercontent.com/u/27690651?v=4" alt="Creator Avatar" class="rounded-circle"
                 style="width: 150px; height: 150px;" loading="lazy">
          </div>
          <div class="col-md-8">
            <h3>Alex6dj</h3>
            <p>Software developer with a passion for creating useful tools and open-source projects. TheOnlyTool is one
              of my personal projects aimed at helping developers and users improve their productivity.</p>
            <p>You can find more about my work on my <a href="https://github.com/alex6dj/" target="_blank"
                                                        rel="noopener noreferrer">GitHub profile</a>.</p>
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

img {
  border-radius: 10px;
}
</style>