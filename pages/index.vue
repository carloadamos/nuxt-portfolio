<template>
  <div class="h-screen">
    <header-bar />
    <section-page>
      <home-section />
    </section-page>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';
import HomeSection from '../components/HomeSection.vue';
import SectionPage from '../components/SectionPage.vue';

export default {
  name: 'IndexPage',
  components: { HeaderBar, SectionPage, HomeSection },
};
</script>
