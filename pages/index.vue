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
      { name: 'description', content: 'I am a passionate and versatile front-end developer with expertise in cutting-edge web technologies. With a strong background in UX/UI design, I create captivating and intuitive UI. Beyond development, my fascination with horology drives me to blend precision and aesthetics in my creations.' }
    ],
    bodyAttrs: {
      class: 'home'
    },
  })
</script>