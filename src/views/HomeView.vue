<template>
<body class="main-content">
    <header class="container header" id="home" :class="{ active: activeSection === 'home' }">
      <Header />
    </header>
    <main>
        <section class="container about" id="about" :class="{ active: activeSection === 'about' }">
            <About />
        </section>
        <section class="container" id="portfolio" :class="{ active: activeSection === 'portfolio' }">
           <Portfolio />
        </section>
        <section class="container" id="blogs" :class="{ active: activeSection === 'blogs' }">
            <Blogs />
        </section>
        <section class="container contact" id="contact" :class="{ active: activeSection === 'contact' }">
           <Contact />
        </section>
    </main>
    <div class="controls">
        <div class="control" @click="HandleSections('home')" :class="{ 'active-btn': activeSection === 'home' }">
            <i class="fas fa-home"></i>
        </div>
        <div class="control" @click="HandleSections('about')" :class="{ 'active-btn': activeSection === 'about' }">
            <i class="fas fa-user"></i>
        </div>
        <!--
          <div class="control" @click="HandleSections('portfolio')" :class="{ 'active-btn': activeSection === 'portfolio' }">
              <i class="fas fa-user"></i>
          </div>
        -->
        <div class="control"  @click="HandleSections('blogs')" :class="{ 'active-btn': activeSection === 'blogs' }">
            <i class="fas fa-briefcase"></i>
        </div>
        <div class="control" data-id="contact" @click="HandleSections('contact')" :class="{ 'active-btn': activeSection === 'contact' }">
            <i class="fas fa-envelope-open"></i>
        </div>
    </div>
    <div class="theme-btn" @click="toggleTheme">
        <i class="fas fa-adjust"></i>
    </div>
</body>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Header from '@/components/HomePage.vue'
import About from '@/components/About.vue'
import Portfolio from '@/components/Portfolio.vue'
import Blogs from '@/components/Blogs.vue'
import Contact from '@/components/Contact.vue'

const isLightMode = ref<boolean>(false)
const activeSection = ref<string>('home')

const toggleTheme = () => {
  isLightMode.value = !isLightMode.value;
  document.body.classList.toggle('light-mode', isLightMode.value);
};

const HandleSections = (id: string) => {
  activeSection.value = id;
};
</script>
