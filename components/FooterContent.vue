<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div class="py-4 flex justify-center items-center">
    <div class="flex flex-col md:flex-row gap-4 text-xs text-gray-400 text-center">
      <p v-if="appConfig.theme.author">
        Copyright &copy {{ (new Date()).getFullYear() }}

        <a v-if="appConfig.theme.email" :href="`mailto:${appConfig.theme.email}`" class="text-blue-400">{{
          appConfig.theme.author }}</a>
        <span v-else>{{ appConfig.theme.author }}</span>
      </p>
      <p>
        blog theme <a href="https://github.com/mynameisek/ekblogiNote" target="_blank" class="text-blue-400">EkNote inspired by BlogiNote</a>
      </p>
      <p>
        Framework <a href="https://v3.nuxtjs.org/" target="_blank" class="text-blue-400">Nuxtjs v3</a>, <a
          href="https://content.nuxtjs.org/"
          target="_blank"
          class="text-blue-400"
        >Nuxt-Content</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
