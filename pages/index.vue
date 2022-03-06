<template>
  <div class="h-screen">
    <header-bar />
    <section-page id="home">
      <home-section />
    </section-page>
    <section-page id="services">
      <services-page></services-page>
      <!-- <div>Services: Freelance Development</div>
      <div>Vue</div>
      <div>lit-html</div>
      <div>Docker</div>
      <div>Kubernetes</div>
      <div>Web Configuration</div> -->
    </section-page>
    <section-page id="components">
      <div>Components</div>
      <div>textbox</div>
      <div>dropdowns</div>
      <div>forms</div>
    </section-page>
    <section-page id="projects"> Sample Projects </section-page>
    <section-page id="contact">
      <div>Contact me</div>
      <div>form</div>
      <div>github</div>
      <div>linkedin</div>
    </section-page>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';
import HomeSection from '../components/HomeSection.vue';
import SectionPage from '../components/SectionPage.vue';
import ServicesPage from '@/components/ServicesPage.vue';

export default {
  name: 'IndexPage',
  components: { HeaderBar, SectionPage, ServicesPage, HomeSection },
};
</script>
