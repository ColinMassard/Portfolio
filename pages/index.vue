<template>
  <main>
    <Header />
    <Hero />
    <LastProjects />
    <Skills />
    <Contact />
    <Footer />
  </main>
</template>
<script setup lang="ts">
  useHead({
    title: 'Colin Massard | Portfolio',
    meta: [
      { name: 'description', content: 'My amazing site.' }
    ],
    bodyAttrs: {
      class: 'home'
    },
  })
</script>