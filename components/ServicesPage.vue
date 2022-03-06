<template>
  <div
    class="flex flex-row w-full text-10xl font-black bg-clip-text via-indigo-700 leading-loose"
  >
    <div
      class="flex-1 text-center cursor-pointer border-8 border-transparent hover:border-vue-green"
    >
      <span
        class="bg-clip-text text-transparent bg-gradient-to-r from-vue-green to-vue-blue"
        >Vue.js</span
      >
    </div>
    <div
      class="flex-1 text-center cursor-pointer border-8 border-transparent hover:border-lit-blue"
    >
      <span
        class="bg-clip-text text-transparent bg-gradient-to-r from-lit-blue to-lit-green hover:bg-clip-content"
        >lit-html</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
};
</script>

<style lang="scss" scoped></style>
