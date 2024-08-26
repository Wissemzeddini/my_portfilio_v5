<template>
        <div class="header-content">
            <div class="left-header">
                <div class="h-shape"></div>
                <div class="image">
                    <img :src="MyPicture" alt="">
                </div>
            </div>
            <div class="right-header">
                <h1 class="name" :dir="isRTL ? 'rtl' : 'ltr'">
                    {{ $t('greeting') }} <span>{{ $t('myname') }}.</span>
                    {{ $t('jobtitle') }}
                </h1>
                <p :dir="isRTL ? 'rtl' : 'ltr'">
                    {{ $t('description') }}
                </p>
                <CV />
            </div>
        </div>
</template>
<script lang="ts" setup>
import MyPicture from '@/assets/img/me.jpg'
import CV from '@/components/DownloadCV.vue'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();


const isRTL = computed(() => {
  return locale.value === 'ar'; // 'ar' is the code for Arabic
});

</script>