<template>
  <section>
    <h1 class="mb-2">{{ title }}</h1>
    <div class="links">
      <a
        href="https://nuxtjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        class="p-2 bg-green-700 text-white"
      >
        Documentation
      </a>
      <a
        href="https://github.com/nuxt/nuxt.js"
        target="_blank"
        rel="noopener noreferrer"
        class="p-2 bg-gray-400 text-black"
      >
        GitHub
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const title = ref<string>('hopfenhaus-app')

    return { title }
  },
})
</script>
