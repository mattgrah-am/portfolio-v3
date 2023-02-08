<template>
  <nav class="my-4 flex items-center justify-between md:my-8">
    <h1
      class="trans text-4xl font-bold transition duration-500 hover:blur-[2px]"
    >
      <NuxtLink to="/">mg.</NuxtLink>
    </h1>
    <div>
      <ul class="flex gap-4 lg:gap-8">
        <li v-for="links in navLinks">
          <NuxtLink :to="links.link">{{ links.name }}</NuxtLink>
        </li>
      </ul>
    </div>
    <div>socials</div>
  </nav>
</template>

<script setup lang="ts">
const navLinks = [
  { name: "home", link: "/" },
  { name: "about", link: "/about" },
  { name: "projects", link: "/projects" },
];
</script>
