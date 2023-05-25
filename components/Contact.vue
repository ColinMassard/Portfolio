<template>
  <div class="contact w-full h-screen bg-grey anim--cascad relative flex items-center" id="contact" data-animate="">
    <div class="container lg:container-md mx-auto lg:flex">
      <div class="w-full lg:w-1/2 anim-fade-up">
        <div class="max-w-xl">
          <h2 class="font-title text-4r leading-none tracking-7p text-primary">Let's<br>Chat</h2>
          <p class="font-normal font-medium leading-loose font-medium text-black max-w-sm mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia lacus non vestibulum vestibulum. Sed eleifend porttitor eros et lacinia.</p>
          <div class="grid grid-cols-2 gap-12 mt-10">
            <div>
              <p class="text-primary">Send me an email</p>
              <a class="text-primary text-xl font-medium" href="mailto:colinmassard@gmail.com">colinmassard@gmail.com</a>
            </div>
            <div>
              <p class="text-primary">Chat on Whatsapp</p>
              <a class="text-primary text-xl font-medium" href="tel:+33630655561">colinmassard@gmail.com</a>
            </div>
            <div>
              <p class="text-primary">Connect on Linkedin</p>
              <a class="text-primary text-xl font-medium" href="linkedin.com/comassard" target="_blank">linkedin.com/comassard</a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 hidden lg:block">
      </div>
    </div>
    <img src="~/assets/img/pen.png" class="img-cover h-full w-full max-w-3xl absolute right-0 top-0"/> 
  </div>
</template>