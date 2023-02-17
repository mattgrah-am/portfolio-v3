<template>
  <nav class="my-8 flex items-center justify-between">
    <a
      class="text-2xl font-bold !no-underline transition duration-500 hover:blur-[2px] md:text-4xl"
      href="/"
      >mg.</a
    >
    <div>
      <ul class="flex gap-2 md:gap-4">
        <li v-for="links in navLinks">
          <NuxtLink
            class="rounded px-4 py-2 text-sm font-medium !no-underline transition duration-500 hover:blur-[2px] focus:bg-neutral-900 lg:text-base"
            :to="links.link"
          >
            {{ links.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="hidden gap-2 sm:flex">
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
