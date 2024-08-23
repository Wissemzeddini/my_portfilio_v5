<template>
        <div class="header-content">
            <div class="left-header">
                <div class="h-shape"></div>
                <div class="image">
                    <img :src="MyPicture" alt="">
                </div>
            </div>
            <div class="right-header">
                <h1 class="name">
                    {{ $t('greeting') }} <span>{{ $t('myname') }}.</span>
                    {{ $t('jobtitle') }}
                </h1>
                <p>
                    {{ $t('description') }}
                </p>
                <CV />
            </div>
        </div>
</template>
<script lang="ts" setup>
import MyPicture from '@/assets/img/me.jpg'
import CV from '@/components/DownloadCV.vue'
</script>