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

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import AppHeader from '~/components/AppHeader/AppHeader.vue'
import AppFooter from '~/components/AppFooter/AppFooter.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: { AppHeader, AppFooter },
})
</script>
