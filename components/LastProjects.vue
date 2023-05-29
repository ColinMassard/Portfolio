<template>
  <div class="projects w-full h-screen bg-grey relative flex items-center" id="projects">
    <div class="container lg:container-md mx-auto lg:flex z-10">
      <div class="w-full lg:w-2/5 anim-fade-up bg-gray z-50" data-animate="">
        <h2 class="font-title text-4xl lg:text-4r leading-none tracking-widest lg:tracking-7p text-primary">Last <br class="hidden lg:block">Projects</h2>
        <p class="font-normal font-medium leading-loose font-medium text-black max-w-sm mt-8 lg:mt-16">Check out my latest projects, where creativity meets innovation! From groundbreaking designs to captivating campaigns, my portfolio showcases the pinnacle of my recent work. Explore and be inspired!</p>
        
      </div>
      <div class="w-full lg:w-3/5 mt-8 lg:mt-0 anim--cascad" data-animate="">
        <Swiper
          :modules="[SwiperAutoplay, SwiperEffectCreative]"
          :breakpoints="{ 568:{ slidesPerView:1 }, 1024:{ slidesPerView:1.5 } }"
          :loop="true"
          :effect="'creative'"
          :autoplay="{
            delay: 800000,
            disableOnInteraction: true,
          }"
          :creative-effect="{
            prev: {
              shadow: false,
              translate: ['0%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }"
        >
          <SwiperSlide>
            <div class="max-h-slide h-slide anim-fade-up">
              <a class="block w-full max-h-slide h-slide lg:pr-5" target="_blank" rel="nofollow" href="https://www.dbt-partners.com/">
                <img src="~/assets/img/projects/dbt.jpg" class="img-cover w-full">
                <div class="p-9 bg-white">
                  <p class="text-xl leading-none text-grey-dark font-title">Real estate diagnosis</p>
                  <h3 class="text-secondary text-2.5r leading-none font-title mt-1.5">DBT Partners</h3>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="max-h-slide h-slide anim-fade-up">
              <a class="block w-full max-h-slide h-slide lg:pr-5" target="_blank" rel="nofollow" href="https://www.tinnson.com/">
                <img src="~/assets/img/projects/tinnson.jpg" class="img-cover w-full">
                <div class="p-9 bg-white">
                  <p class="text-xl leading-none text-grey-dark font-title">Chelsea Boots Online shop</p>
                  <h3 class="text-secondary text-2.5r leading-none font-title mt-1.5">Tinnson</h3>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="max-h-slide h-slide anim-fade-up">
              <a class="block w-full max-h-slide h-slide lg:pr-5" target="_blank" rel="nofollow" href="https://seconde-vintage.com/">
                <img src="~/assets/img/projects/sv.jpg" class="img-cover w-full">
                <div class="p-9 bg-white">
                  <p class="text-xl leading-none text-grey-dark font-title">Vintage watch website</p>
                  <h3 class="text-secondary text-2.5r leading-none font-title mt-1.5">Seconde Vintage</h3>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="max-h-slide h-slide anim-fade-up">
              <a class="block w-full max-h-slide h-slide lg:pr-5" target="_blank" rel="nofollow" href="https://www.studio-hb.com/">
                <img src="~/assets/img/projects/shb.jpg" class="img-cover w-full">
                <div class="p-9 bg-white">
                  <p class="text-xl leading-none text-grey-dark font-title">Web Agency</p>
                  <h3 class="text-secondary text-2.5r leading-none font-title mt-1.5">Studio HB</h3>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="max-h-slide h-slide anim-fade-up">
              <a class="block w-full max-h-slide h-slide lg:pr-5" target="_blank" rel="nofollow" href="https://codepen.io/ColinMsd">
                <img src="~/assets/img/projects/codepen.jpg" class="img-cover w-full">
                <div class="p-9 bg-white">
                  <p class="text-xl leading-none text-grey-dark font-title">Personal Sandbox</p>
                  <h3 class="text-secondary text-2.5r leading-none font-title mt-1.5">Codepen</h3>
                </div>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <img src="~/assets/img/projects-bg.png" class="img-cover h-full w-full max-w-3xl absolute right-0 top-0"/> 
  </div>
</template>


