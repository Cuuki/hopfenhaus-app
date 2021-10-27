<template>
  <main
    class="
      min-h-screen
      flex flex-col
      justify-between
      items-center
      text-center
      mx-auto
    "
  >
    <AppHeader />
    <Nuxt />
    <AppFooter />
  </main>
</template>

<script setup lang="ts">
import AppHeader from '~/components/AppHeader/AppHeader.vue'
import AppFooter from '~/components/AppFooter/AppFooter.vue'
</script>
