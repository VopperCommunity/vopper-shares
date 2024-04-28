<script>
  import Twitter from "$lib/images/Twitter.svelte";
  import Facebook from "$lib/images/Facebook.svelte";
  import LinkedIn from "$lib/images/LinkedIn.svelte";
  import YouTube from "$lib/images/YouTube.svelte";
  import DevShares from "$lib/images/DevShares.svelte";
</script>

<footer class="bg-[#1D2128FF] flex relative justify-center items-center lg:h-[356px] h-[556px] text-white">
  <article class="w-5/6 lg:h-52 h-96 flex lg:justify-between lg:flex-row flex-col lg:items-start items-center gap-10">
    <DevShares/>
    <section class="flex justify-between w-96">
      <div class="flex flex-col gap-1 lg:gap-3">
        <strong class="text-lg">Product</strong>
        <a href="">Features</a>
        <a href="">Pricing</a>
      </div>
      <div class="flex flex-col gap-1 lg:gap-3">
        <strong class="text-lg">Resources</strong>
        <a href="">Blog</a>
        <a href="">User Guides</a>
        <a href="">Webinars</a>
      </div>
      <div class="flex flex-col gap-1 lg:gap-3">
        <strong class="text-lg">Company</strong>
        <a href="">About</a>
        <a href="">Join us</a>
      </div>
    </section>
    <section class="flex flex-col gap-3 lg:w-[26rem] w-full justify-between">
      <strong class="text-[#6C69F6FF] text-lg">Subscribe to our newsletter</strong>
      <p class="text-xs">For product announcements and exclusive insights</p>
      <form class="flex">
        <input
        class="bg-[#323842FF] text-sm py-1 pl-2 pr-40 rounded-s-lg"
        type="email" placeholder="Input your email">
        <input
        class="bg-[#6C69F6FF] text-sm py-1 px-4 rounded-r-lg"
        type="submit" value="Suscribe">
      </form>
    </section>
  </article>
  <article class="absolute lg:w-5/6 w-full h-8 bottom-5 flex justify-between items-center">
    <select class="bg-[#323842FF] text-neutral-400 lg:rounded-md rounded-sm lg:text-sm text-xs lg:pl-2 pl-0.5 lg:pr-6 pr-3 py-1 lg:block hidden">
        <option>English</option>
        <option selected>Spanish</option>
    </select>
    <p class="flex gap-2 text-neutral-500 md:text-md text-xs">
      © 2022 Brand, Inc.
      <span class="text-[.4rem] flex items-center">•</span> Privacy
      <span class="text-[.4rem] flex items-center">•</span> Terms
      <span class="text-[.4rem] flex items-center">•</span> Sitemap
    </p>
    <div class="flex items-center gap-2 lg:gap-6 flex-wrap">
      <Twitter size="lg:size-6 size-4"/>
      <Facebook size="lg:size-6 size-4"/>
      <LinkedIn size="lg:size-6 size-4"/>
      <YouTube size="lg:size-6 size-4"/>
    </div>
  </article>
</footer>