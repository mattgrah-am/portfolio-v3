<script setup lang="ts"></script>

<template>
  <header class="flex justify-center pb-32">
    <div
      class="fixed top-0 w-full max-w-2xl bg-neutral-100/80 backdrop-blur-lg dark:bg-[#111]/80"
    >
      <div class="flex items-center justify-between px-4">
        <router-link to="/">
          <h1
            class="my-2 p-0 text-3xl font-bold tracking-tighter text-neutral-900 dark:text-neutral-100 sm:text-5xl"
          >
            mg.
          </h1>
        </router-link>
        <nav class="flex items-center gap-4 text-sm sm:text-base">
          <RouterLink to="/">home</RouterLink>
          <RouterLink to="/about">about</RouterLink>
          <RouterLink to="/projects">projects</RouterLink>
          <RouterLink to="/thoughts">thoughts</RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>
