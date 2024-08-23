<template>
    <div class="main-title">
      <h2>
        About <span>me</span><span class="bg-text">my stats</span>
      </h2>
    </div>
    <div class="about-container">
      <div class="left-about">
        <h4>Information About me</h4>
        <p>{{ aboutText }}</p>
        <CV />
      </div>
      <div class="right-about">
        <div class="about-item" v-for="stat in stats" :key="stat.title">
          <div class="abt-text">
            <p class="large-text">{{ stat.value }}</p>
            <p class="small-text">{{ stat.title }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="about-stats">
      <h4 class="stat-title">My Skills</h4>
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
    <h4 class="stat-title">My Timeline</h4>
    <div class="timeline">
      <div class="timeline-item" v-for="timeline in timelines" :key="timeline.duration">
        <div class="tl-icon">
          <i class="fas fa-briefcase"></i>
        </div>
        <p class="tl-duration">{{ timeline.duration }}</p>
        <h5>
          {{ timeline.title }}<span> - {{ timeline.company }}</span>
        </h5>
        <p>{{ timeline.description }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import CV from '@/components/DownloadCV.vue'

  // About text
  const aboutText = `My name is Wissem Zeddini, and I live in Beja, Tunisia. I am currently a Developer specializing in Node.js applications using Fastify and TypeScript. I also work with Vue 3 for frontend development. My role includes managing AWS services such as EC2, S3, and RDS, as well as handling networking, CI/CD pipelines, and overall service optimization.`;
  
  // Stats information
  const stats = [
    { value: "7+", title: "Projects Completed" },
    { value: "3+", title: "Years of experience" },
    { value: "20+", title: "Technology Mastered" },
    { value: "10+", title: "Certification" },
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
      title: "Frontend Developer",
      company: "Rimans Solution",
      description: `My responsibilities primarily involve developing route optimization software to address delivery and pickup challenges. I utilize Node.js technologies, including Fastify and Prisma, for backend development, while leveraging Vue 3, TypeScript, and Tailwind CSS for the frontend.`,
    },
    {
      duration: "2023 - 2024",
      title: "Power Platform Developer",
      company: "Rimans Solution",
      description: `My responsibilities mainly involve crafting Power Platform solutions,
                    which includes the development of chatbots using Copilot Studio,
                    Power Automate flows, as well as creating Canvas/Model-Driven app applications and AI Builder Models.`,
    },
    {
      duration: "2023",
      title: "CI Tester & Automation",
      company: "OPAL-RT/Rimans Solution",
      description: `Ensure quality, troubleshoot failed tests, create test cases using Python, 
                    and build Jenkins pipelines for the HYPERSIM department.`,
    },
    {
      duration: "2022",
      title: "Data Analyst",
      company: "ZMWARELAB",
      description: `Build a system to automatically gather data from various Shopify stores and Amazon Seller Central,
                    empowering users to generate bespoke reports on demand for Shopify performance and comprehensive sales insights
                    using Python and Power BI.`,
    },
    {
      duration: "2021",
      title: "DevOps",
      company: "ZMWARELAB",
      description: `Administer AWS services like EC2 and RDS, along with handling DNS. 
                    Devise a cloud-based solution for deploying larger applications, addressing aspects such as storage management,
                    performance optimization, and security measures.`,
    },
  ];
  </script>
  