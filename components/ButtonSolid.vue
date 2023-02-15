<template>
  <component
    :is="element"
    :href="link"
    :target="target"
    class="rounded px-3 py-1 text-sm font-medium transition duration-500 hover:bg-black hover:blur-[2px] focus:bg-neutral-900 lg:text-base"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  link?: string;
  target?: string;
}>();
const element = computed(() => (props.link ? "a" : "button"));
</script>
