<template>
  <div
    :id="id"
    class="h-screen flex flex-col items-center justify-center px-10"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SectionPage',
  props: {
    id: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped></style>
