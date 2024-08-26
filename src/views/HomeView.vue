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
        <div class="control" @click="HandleSections('about')" :class="{ 'active-btn': activeSection === 'about' }" :dir="isRTL ? 'rtl' : 'ltr'">
          <i class="fas fa-user"></i>
        </div>
        <div class="control" @click="HandleSections('blogs')" :class="{ 'active-btn': activeSection === 'blogs' }" :dir="isRTL ? 'rtl' : 'ltr'">
          <i class="fas fa-briefcase"></i>
        </div>
        <div class="control" data-id="contact" @click="HandleSections('contact')" :class="{ 'active-btn': activeSection === 'contact' }" :dir="isRTL ? 'rtl' : 'ltr'">
          <i class="fas fa-envelope-open"></i>
        </div>
      </div>
      <div class="theme-btn" @click="toggleTheme">
        <i class="fas fa-adjust"></i>
      </div>
      <div class="lang-container">
        <div class="lang-btn" @click="toggleDropdown">
          <i class="fas fa-globe-africa"></i>
        </div>
        <div v-if="isDropdownVisible" class="lang-dropdown">
          <ul>
            <li @click="setLanguage('en')">English</li>
            <li @click="setLanguage('fr')">Français</li>
            <li @click="setLanguage('ar')">عربي</li>
          </ul>
        </div>
      </div>
    </body>
  </template>
  
  <script lang="ts" setup>
  import { ref, computed } from 'vue';
  import Header from '@/components/HomePage.vue';
  import About from '@/components/About.vue';
  import Portfolio from '@/components/Portfolio.vue';
  import Blogs from '@/components/Blogs.vue';
  import Contact from '@/components/Contact.vue';
  import { useI18n } from 'vue-i18n';
  
  const isLightMode = ref<boolean>(false);
  const activeSection = ref<string>('home');
  const { locale } = useI18n();
  
  const toggleTheme = () => {
    isLightMode.value = !isLightMode.value;
    document.body.classList.toggle('light-mode', isLightMode.value);
  };
  
  const HandleSections = (id: string) => {
    activeSection.value = id;
  };
  
  const isDropdownVisible = ref(false);
  
  const toggleDropdown = () => {
    console.log('Dropdown toggle clicked:', isDropdownVisible.value); // Debugging log
    isDropdownVisible.value = !isDropdownVisible.value;
    console.log('Dropdown now:', isDropdownVisible.value); // Debugging log
  };
  
  const setLanguage = (lang: string) => {
    console.log('Language selected:', lang);
    // Add logic here to change the language of your application
    locale.value = lang;
    isDropdownVisible.value = false;
  };
  // Computed property to determine if the current language is RTL
const isRTL = computed(() => {
  return locale.value === 'ar'; // 'ar' is the code for Arabic
});
  </script>
  
  <style scoped>
  /* Scoped styles for this component, if any */
  </style>
  