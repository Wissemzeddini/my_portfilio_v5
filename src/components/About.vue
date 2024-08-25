<template>
  <div class="main-title">
    <h2>
      {{ $t('about.title') }} <span>{{ $t('about.subtitle') }}</span>
      <span class="bg-text">{{ $t('about.bgText') }}</span>
    </h2>
  </div>
  <div class="about-container">
    <div class="left-about">
      <h4>{{ $t('about.informationTitle') }}</h4>
      <p>{{ $t('about.description') }}</p>
      <CV />
    </div>
    <div class="right-about">
      <div class="about-item" v-for="stat in stats" :key="stat.title">
        <div class="abt-text">
          <p class="large-text">{{ stat.value }}</p>
          <p class="small-text">{{ $t(`about.stats.${stat.title}`) }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="about-stats">
      <h4 class="stat-title">{{ $t('about.skillsTitle') }}</h4>
      <div class="progress-bars">
        <div class="progress-bar" v-for="skill in skills" :key="skill.name">
          <p class="prog-title">{{ skill.name }}</p>
          <div class="progress-con">
            <p class="prog-text">{{ skill.proficiency }}%</p>
            <div class="progress">
              <span :class="'rate' + skill.proficiency"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  <h4 class="stat-title">{{ $t('about.timelineTitle') }}</h4>
  <div class="timeline">
    <div class="timeline-item" v-for="timeline in timelines" :key="timeline.duration">
      <div class="tl-icon">
        <i class="fas fa-briefcase"></i>
      </div>
      <p class="tl-duration">{{ timeline.duration }}</p>
      <h5>
        {{ $t(`about.timeline.${timeline.title}`) }}<span> - {{ timeline.company }}</span>
      </h5>
      <p>{{ $t(`about.timeline.${timeline.description}`) }}</p>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
  import CV from '@/components/DownloadCV.vue'
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
  // About text
  const aboutText = t('about.description');

  // Stats information
  const stats = [
  { value: "7+", title: "projectsCompleted" },
  { value: "3+", title: "yearsOfExperience" },
  { value: "20+", title: "technologyMastered" },
  { value: "10+", title: "certifications" },
 ];
  
  // Skills information
  const skills = [
    { name: "Python", proficiency: 85 },
    { name: "Flask", proficiency: 80 },
    { name: "JavaScript", proficiency: 70 },
    { name: "PHP", proficiency: 70 },
    { name: ".NET (C#)", proficiency: 50 },
    { name: "C", proficiency: 40 },
    { name: "Symfony 3/4/5", proficiency: 50 },
    { name: "Shell scripting", proficiency: 70 },
    { name: "Batch scripting", proficiency: 70 },
    { name: "Rest API", proficiency: 80 },
    { name: "GraphQL API", proficiency: 70 },
    { name: "HTML/CSS", proficiency: 90 },
    { name: "Bootstrap/ Tailwind css", proficiency: 80 },
    { name: "Github action", proficiency: 60 },
    { name: "Jenkins", proficiency: 70 },
    { name: "Terraform", proficiency: 50 },
    { name: "Docker", proficiency: 60 },
    { name: "Software testing (ISTQB)", proficiency: 70 },
    { name: "Task automation", proficiency: 80 },
    { name: "Cloud AWS/Azure", proficiency: 80 },
    { name: "Shopify API", proficiency: 80 },
    { name: "Power BI", proficiency: 80 },
    { name: "Mysql/SQL server databases/Postgress", proficiency: 75 },
    { name: "Fastify", proficiency: 65},
    { name: "TypeScript", proficiency: 60},
    { name: "Vue js", proficiency: 75},
  ];
  
  // Timeline information
  const timelines = [
    {
      duration: "2024 - Now",
      title: "frontendDeveloper",
      company: "Rimans Solution",
      description: "timelineDescription1",
    },
    {
      duration: "2023 - 2024",
      title: "powerPlatformDeveloper",
      company: "Rimans Solution",
      description: "timelineDescription2",
    },
    {
      duration: "2023",
      title: "ciTester",
      company: "OPAL-RT/Rimans Solution",
      description: "timelineDescription3",
    },
    {
      duration: "2022",
      title: "dataAnalyst",
      company: "ZMWARELAB",
      description: "timelineDescription4",
    },
    {
      duration: "2021",
      title: "devOps",
      company: "ZMWARELAB",
      description: "timelineDescription5",
    },
  ];
  </script>
  