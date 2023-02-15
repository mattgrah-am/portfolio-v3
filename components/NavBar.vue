<template>
  <nav class="my-4 flex items-center justify-between md:my-8">
    <h1
      class="text-2xl font-bold transition duration-500 hover:blur-[2px] md:text-4xl"
    >
      <a href="/">mg.</a>
    </h1>
    <div>
      <ul class="flex gap-4 lg:gap-8">
        <li v-for="links in navLinks">
          <NuxtLink
            class="rounded px-4 py-2 text-sm font-medium transition duration-500 hover:blur-[2px] focus:bg-neutral-900 lg:text-base"
            :to="links.link"
          >
            {{ links.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="flex gap-2">
      <IconTwitter /><IconGithub /><IconLinkedin /><IconMail />
    </div>
  </nav>
</template>

<script setup lang="ts">
const navLinks = [
  { name: "home", link: "/" },
  { name: "about", link: "/about" },
  { name: "projects", link: "/projects" },
];
</script>
