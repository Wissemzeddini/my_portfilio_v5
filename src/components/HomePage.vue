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
                    Hi, I'm <span>Wissem Zeddini.</span>
                    {{ jobTitle }}
                </h1>
                <p>
                    {{ description }}
                </p>
                <div class="btn-con">
                    <a href="files/my_cv_01.pdf" class="main-btn" download="wissem_zeddini_cv" target="_blank">
                        <span class="btn-text">Download CV</span>
                        <span class="btn-icon"><i class="fas fa-download"></i></span>
                    </a>
                </div>
            </div>
        </div>
</template>
<script lang="ts" setup>
import MyPicture from '@/assets/img/me.jpg'

const jobTitle = "A Developer & Devops."
const description = "I'm a Developer & Devops, Versatile, open-minded, sociable, dynamic, organized and motivated, I master the various tools of DevOps, development and the technologies necessary for a Data scientist. also i m expert in python development."

</script>