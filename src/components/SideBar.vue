<script setup lang="ts">
import ContactIcons from "./ContactIcons.vue";
</script>

<template>
  <header
    class="flex w-fit flex-col rounded-xl bg-neutral-100 font-mono text-xl dark:bg-neutral-900 lg:flex-row"
  >
    <div
      class="flex flex-col lg:w-16 lg:flex-none lg:flex-row lg:items-center lg:whitespace-nowrap lg:py-12 lg:leading-7 lg:[writing-mode:vertical-rl]"
    >
      <div class="mt-4 flex justify-center text-2xl lg:items-center">
        <span class="text-neutral-500">I am /</span>
        <span
          class="ml-6 font-bold text-neutral-900 dark:text-neutral-100 lg:ml-0 lg:mt-6"
          >Matt Graham /
        </span>
      </div>

      <div class="hidden lg:flex lg:items-center">
        <span class="text-base text-neutral-500 lg:mt-12">Contacts /</span>
        <ContactIcons />
      </div>
    </div>
    <div
      class="w-[1px] flex-1 bg-gradient-to-b from-neutral-500 to-neutral-100 dark:to-neutral-900"
    ></div>
    <div class="min-h-full flex-auto px-8 pt-4 lg:w-80 lg:p-8">
      <a class="flex w-auto justify-center rounded-lg" href="/">
        <img
          src="../assets/images/profile-memoji.jpg"
          alt="Matt Graham's Memoji"
          class="rounded-lg border border-neutral-300 dark:border-neutral-500"
        />
      </a>
      <ContactIcons class="mt-2 lg:hidden" />
      <div class="mt-6 text-left lg:mt-10">
        <p class="text-xl font-bold text-neutral-900 dark:text-neutral-100">
          <a href="/">Software developer, career switcher & problem solver. </a>
        </p>
        <p
          class="mt-3 text-base font-medium leading-8 text-neutral-500 lg:text-lg"
        >
          A Melbourne (AU) based software developer, who has recently completed
          General Assembly's Software Engineering Immersive Online (Flex)
          program. Recently changed careers from Facilities Management to the
          Tech industry, as a Web Developer.
        </p>
      </div>
    </div>
    <div
      class="w-[1px] flex-1 bg-gradient-to-b from-neutral-500 to-neutral-100 dark:to-neutral-900"
    ></div>
  </header>
</template>
