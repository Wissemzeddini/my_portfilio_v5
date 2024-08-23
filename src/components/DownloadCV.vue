<template>
    <div class="btn-con">
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
  const cv_file = process.env.VUE_APP_CV_FILE
  console.log("cv files", cv_file);
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  