<template>
  <div class="blogs-content">
    <div class="main-title">
      <h2>{{ $t('myWorks') }} <span>{{ $t('works') }}</span><span class="bg-text">{{ $t('myWorks') }}</span></h2>
    </div>
    <p class="port-text">
      {{ $t('workDescription') }}
    </p>
    <div class="blogs">
      <div class="blog" v-for="(blog, index) in blogs" :key="index">
        <img :src="blog.img" :alt="$t(blog.title)" />
        <div class="blog-text">
          <h4>{{ $t(blog.title) }}</h4>
          <p :dir="isRTL ? 'rtl' : 'ltr'">{{ $t(blog.description) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue'
  import { useI18n } from 'vue-i18n';

  const { locale } = useI18n();

  const isRTL = computed(() => {
  return locale.value === 'ar'; // 'ar' is the code for Arabic
  });
// Import images
import img1 from '@/assets/img/newswebsite.webp';
import img2 from '@/assets/img/compare-price.jpg';
import img3 from '@/assets/img/blog2.jpg';
import img4 from '@/assets/img/blog3.jpg';
import img5 from '@/assets/img/mobile.jpg';

// Local blog data with translation keys
const blogs = [
  {
    img: img1,
    title: 'projects.elWess',
    description: 'projects.elWessDesc',
  },
  {
    img: img2,
    title: 'projects.piCompare',
    description: 'projects.piCompareDesc',
  },
  {
    img: img3,
    title: 'projects.moyMgmt',
    description: 'projects.moyMgmtDesc',
  },
  {
    img: img4,
    title: 'projects.yDownload',
    description: 'projects.yDownloadDesc',
  },
  {
    img: img5,
    title: 'projects.routeGenius',
    description: 'projects.routeGeniusDesc',
  },
];
</script>
