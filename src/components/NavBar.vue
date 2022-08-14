<script setup lang="ts">
import IconGitHub from "./IconGitHub.vue";
import IconTwitter from "./IconTwitter.vue";
import IconLinkedin from "./IconLinkedin.vue";
import IconMail from "./IconMail.vue";
</script>

<template>
  <header class="flex justify-center pb-36">
    <div
      class="fixed top-0 w-full max-w-2xl bg-gradient-to-b from-[#111] to-transparent"
    >
      <div class="flex items-center justify-between px-4">
        <router-link to="/">
          <h1
            class="my-2 p-0 text-4xl font-bold tracking-tighter text-neutral-100"
          >
            mg.
          </h1>
        </router-link>
        <nav class="flex flex-col pt-4 sm:flex-row sm:gap-4">
          <div class="flex items-center justify-end gap-2">
            <RouterLink
              to="/about"
              class="rounded bg-[#111]/50 py-1 px-2 transition-transform hover:scale-125"
              >about</RouterLink
            >
            <RouterLink
              to="/projects"
              class="rounded bg-[#111]/50 py-1 px-2 transition-transform hover:scale-125"
              >projects</RouterLink
            >
            <RouterLink
              to="/thoughts"
              class="rounded bg-[#111]/50 py-1 px-2 transition-transform hover:scale-125"
              >thoughts</RouterLink
            >
          </div>
          <div class="flex items-center justify-end gap-2 pr-2">
            <IconGitHub />
            <IconTwitter />
            <IconLinkedin />
            <IconMail />
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
