<template>
  <div class="contact-container">
    <div class="main-title">
      <h2>{{ $t('contact.mainTitle') }} <span>{{ $t('contact.subtitle') }}</span><span class="bg-text">{{ $t('contact.bgText') }}</span></h2>
    </div>
    <div class="contact-content-con">
      <div class="left-contact">
        <h4>{{ $t('contact.contactMeHere') }}</h4>
        <p>{{ $t('contact.officialContact') }}</p>
        <div class="contact-info">
          <div v-for="(item, index) in contactItems" :key="index" class="contact-item">
            <div class="icon">
              <i :class="item.icon"></i>
              <span style="font-size: 12px;">{{ $t(item.label) }}</span>
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
        <form class="contact-form" netlify>
          <div class="input-control i-c-2">
            <input type="text" required :placeholder="$t('contact.namePlaceholder')" name="name" />
            <input type="email" required :placeholder="$t('contact.emailPlaceholder')" name="email" />
          </div>
          <div class="input-control">
            <input type="text" required :placeholder="$t('contact.subjectPlaceholder')" name="subject"/>
          </div>
          <div class="input-control">
            <textarea name="message" id="" cols="15" rows="8" :placeholder="$t('contact.messagePlaceholder')"></textarea>
          </div>
          <button type="submit" class="sub-btn">{{ $t('contact.sendButton') }}</button>
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
    label: "contact.location",
    info: ": Beja, Tunisia",
  },
  {
    icon: "fas fa-envelope",
    label: "contact.email",
    info: ": wissem.zeddini@esen.tn",
  },
  {
    icon: "fas fa-user-graduate",
    label: "contact.education",
    info: ": Higher school of digital economics of Tunisia",
  },
  {
    icon: "fas fa-mobile-alt",
    label: "contact.mobileNumber",
    info: ":(+216) 25 960 738",
  },
  {
    icon: "fas fa-globe-africa",
    label: "contact.languages",
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
