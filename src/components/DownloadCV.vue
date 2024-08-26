<template>
    <div class="btn-con" >
      <a 
      :href="cv_file" 
      class="main-btn" 
      download="wissem_zeddini_cv" 
      target="_blank"
      rel="noopener noreferrer"
      >
        <span class="btn-text">{{ $t('download_cv') }}</span>
        <span class="btn-icon"><i class="fas fa-download"></i></span>
      </a>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, computed } from 'vue'
  import { useI18n } from 'vue-i18n';

  const { locale } = useI18n();
  const cv_file = process.env.VUE_APP_CV_FILE

  const isRTL = computed(() => {
  return locale.value === 'ar'; // 'ar' is the code for Arabic
  });
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  