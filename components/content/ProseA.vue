<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: ''
  },
  blank: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <NuxtLink :href="href">
    <slot />
  </NuxtLink>
</template>
