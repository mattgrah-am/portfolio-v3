<template>
  <nav class="my-4 flex items-center justify-between md:my-8">
    <h1
      class="text-2xl font-bold transition duration-500 hover:blur-[2px] md:text-4xl"
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
    <div class="flex gap-4"><IconTwitter /><IconGithub /></div>
  </nav>
</template>

<script setup lang="ts">
const navLinks = [
  { name: "home", link: "/" },
  { name: "about", link: "/about" },
  { name: "projects", link: "/projects" },
];
</script>
