<template>
  <div class="contact w-full h-screen bg-grey anim--cascad relative flex items-center" id="contact" data-animate="">
    <div class="container lg:container-md mx-auto lg:flex">
      <div class="w-full lg:w-1/2 anim-fade-up">
        <div class="max-w-xl">
          <h2 class="font-title text-4xl lg:text-4r leading-none tracking-widest lg:tracking-7p text-primary">Let's<br>Chat</h2>
          <p class="font-normal font-medium leading-loose font-medium text-black max-w-sm mt-10">Why stop at just browsing? Don't hesitate to take the next step and send me a message. Whether you're an individual, a fellow professional, or a potential client, I'm here to listen and engage in meaningful conversations. Let's explore how we can collaborate, share ideas, or work together on a project that sparks our mutual interest.</p>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
            <div>
              <p class="text-primary">Send me an email</p>
              <a class="text-primary text-xl font-medium hover:text-secondary transition-all ease-in-out duration-500" href="mailto:colinmassard@gmail.com">colinmassard@gmail.com</a>
            </div>
            <div>
              <p class="text-primary">Chat on Whatsapp</p>
              <a class="text-primary text-xl font-medium hover:text-secondary transition-all ease-in-out duration-500" href="tel:+33630655561">+33 6 30 65 55 61</a>
            </div>
            <div>
              <p class="text-primary">Connect on Linkedin</p>
              <a class="text-primary text-xl font-medium hover:text-secondary transition-all ease-in-out duration-500" href="linkedin.com/comassard" target="_blank">linkedin.com/comassard</a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 hidden lg:block">
      </div>
    </div>
    <img src="~/assets/img/pen.png" class="img-cover h-full w-full max-w-3xl absolute right-0 top-0 opacity-25 lg:opacity-100"/> 
  </div>
</template>