<template>
    <div class="blogs-content">
      <div class="main-title">
        <h2>My <span>Works</span><span class="bg-text">My Works</span></h2>
      </div>
      <p class="port-text">
        Here is some of my work that I've done in various programming languages.
      </p>
      <div class="blogs">
        <div class="blog" v-for="(blog, index) in blogs" :key="index">
          <img :src="blog.img" :alt="blog.title" />
          <div class="blog-text">
            <h4>{{ blog.title }}</h4>
            <p>{{ blog.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  // Import images
  import img1 from '@/assets/img/newswebsite.webp';
  import img2 from '@/assets/img/compare-price.jpg';
  import img3 from '@/assets/img/blog2.jpg';
  import img4 from '@/assets/img/blog3.jpg';
  import img5 from '@/assets/img/mobile.jpg';
  
  // Local blog data
  const blogs = [
    {
      img: img1,
      title: "EL-wess.tn (website)",
      description:
        "A multi-source news platform: This emphasizes the fact that the website offers news from a diverse range of outlets.",
    },
    {
      img: img2,
      title: "Pi-compare",
      description:
        "Price comparison engine on a Tunisia e-commerce website based on AI model, that provide the best deal for each product.",
    },
    {
      img: img3,
      title: "MOYMGMT",
      description:
        "Money management is a website that provides an easy way to manage income and expenses, with an AI feature to forecast future expenses and income based on historical data.",
    },
    {
      img: img4,
      title: "Y Download",
      description:
        "A tool that can download videos from different sources, especially YouTube.",
    },
    {
      img: img5,
      title: "RouteGenius (app.routegenius.net)",
      description:
      "web-based software designed to optimize pick-up and delivery processes using advanced algorithms. This involves creating solutions that streamline route planning and enhance efficiency in logistics operations."
    },
  ];
  </script>
  