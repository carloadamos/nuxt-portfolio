<template>
  <div
    class="h-20 bg-white fixed top-0 w-full flex justify-end items-center shadow-md z-999"
  >
    <nav>
      <a class="block md:hidden">Menu</a>
      <a
        class="hidden md:inline-block hover:bg-green-100 px-2 py-1 rounded-md"
        href="#"
        >Home</a
      >
      <a
        class="hidden md:inline-block hover:bg-green-100 px-2 py-1 rounded-md"
        href="#services"
        >Platforms</a
      >
      <a
        class="hidden md:inline-block hover:bg-green-100 px-2 py-1 rounded-md"
        href="#components"
        >Components</a
      >
      <a
        class="hidden md:inline-block hover:bg-green-100 px-2 py-1 rounded-md"
        href="#projects"
        >Projects</a
      >
      <a
        class="hidden md:inline-block hover:bg-green-100 px-2 py-1 rounded-md"
        href="#contact"
        >Contact</a
      >
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',
};
</script>
