<template>
    <div class="contact-container">
      <div class="main-title">
        <h2>Contact <span>Me</span><span class="bg-text">Contact</span></h2>
      </div>
      <div class="contact-content-con">
        <div class="left-contact">
          <h4>Contact me here</h4>
          <p>
            This is my official contact.
          </p>
          <div class="contact-info">
            <div v-for="(item, index) in contactItems" :key="index" class="contact-item">
              <div class="icon">
                <i :class="item.icon"></i>
                <span style="font-size: 12px;">{{ item.label }}</span>
              </div>
              <p style="font-size: 10px;">
                <span>{{ item.info }}</span>
              </p>
            </div>
          </div>
          <div class="contact-icons">
            <div class="contact-icon">
              <a v-for="(icon, index) in socialIcons" :key="index" :href="icon.link" target="_blank">
                <i :class="icon.icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="right-contact">
          <form action="" class="contact-form">
            <div class="input-control i-c-2">
              <input type="text" required placeholder="YOUR NAME" />
              <input type="email" required placeholder="YOUR EMAIL" />
            </div>
            <div class="input-control">
              <input type="text" required placeholder="ENTER SUBJECT" />
            </div>
            <div class="input-control">
              <textarea name="" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
            </div>
            <button type="submit" class="sub-btn">Send</button>
          </form>
        </div>
      </div>
    </div>
    <div class="p-2">
      <CV />
    </div>
  </template>
  
  <script lang="ts" setup>
  import CV from '@/components/DownloadCV.vue'

  // Local contact items data
  const contactItems = [
    {
      icon: "fas fa-map-marker-alt",
      label: "Location",
      info: ": Beja, Tunisia",
    },
    {
      icon: "fas fa-envelope",
      label: "Email",
      info: ": wissem.zeddini@esen.tn",
    },
    {
      icon: "fas fa-user-graduate",
      label: "Education",
      info: ": Higher school of digital economics of Tunisia",
    },
    {
      icon: "fas fa-mobile-alt",
      label: "Mobile Number",
      info: ":(+216) 25 960 738",
    },
    {
      icon: "fas fa-globe-africa",
      label: "Languages",
      info: ": French, English, Arabic",
    },
  ];
  
  // Local social icons data
  const socialIcons = [
    { icon: "fab fa-facebook-f", link: "https://www.facebook.com/Wissem.zeddini07/" },
    { icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/wissem-zeddini-3829b4179/" },
    { icon: "fab fa-twitter", link: "#" },
    { icon: "fab fa-github", link: "https://github.com/Wissemzeddini" },
    { icon: "fab fa-youtube", link: "https://www.youtube.com/@elkhabir251" },
  ];
  </script>
<style scoped>
.p-2{
  padding: 1rem;
}
</style>
  