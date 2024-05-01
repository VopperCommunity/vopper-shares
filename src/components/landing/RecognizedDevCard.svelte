<script>
  export let customClass = "";
  export let fullName = "";
  export let description = "";
  // export let roleIcon = '';
  export let role = "";
  export let imgSrc = "";
  // export let userId = 0;
  export let views = 0;
  $: strViews = formatViews(views);

  function formatViews(num = 0) {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(0)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    } else {
      return num.toString();
    }
  }
</script>

<div class={`relative max-w-xs min-w-[300px] rounded-2xl border-black border-2 hover:shadow-2xl duration-200 ${customClass}`}>
  <div class="absolute top-5 left-5 flex items-center px-3 py-2 bg-zinc-900 rounded-full">
    <svg class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
    </svg>
    <h1 class="mx-3 text-xs font-normal text-white">{role}</h1>
  </div>

  <img
    class="w-full h-80 object-cover object-center rounded-t-2xl border-b-2 border-black"
    src={imgSrc}
    alt={`image of ${fullName}`}
  />

  <div class="px-6 py-4">
    <div class="flex justify-between gap-0">
      <h3 class="text-md font-normal w-[calc(100%-93px)]">
        {fullName}
      </h3>
      <div class="flex max-w-[93px] items-center w-[fit-content]">
        <svg class="h-4 w-4 fill-current text-zinc-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/></svg>
        <span class="px-1 text-xs text-zinc-400">{strViews} views</span>
      </div>
    </div>
    <p class="py-2 text-zinc-700 dark:text-gray-400 text-xs">{description}</p>
    <button
      class="mt-2 px-4 py-2 w-full text-xs font-semibold text-white bg-yellow-600 rounded-lg inline-flex justify-center"
      >Visitar <svg class="ml-1 h-4 w-4 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
        ><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
          d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z"
        /></svg
      >
    </button>
  </div>
</div>
