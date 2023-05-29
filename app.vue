<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator color="#00DC82" :height="5" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts">
export default {
  mounted() {
  console.log('test')
  const element = document.querySelectorAll('[data-animate]');
      if (element === null) return;

      const intersectionObserverScroll = new IntersectionObserver(
          entries => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('visible');
                      console.log('visible !')
                  }
              });
          },
          {
              rootMargin: '0px',
          },
      );

      element.forEach(animateElement => intersectionObserverScroll.observe(animateElement));
  }
}
</script>