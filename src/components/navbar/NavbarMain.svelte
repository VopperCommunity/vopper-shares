<script>
    import "../../app.css";
    import "../../landing.styles.css";
    import iconVopper from "$lib/images/iconVopper.png";
  </script>
  
  <header>
    <nav class="container flex items-center justify-between">
      <div class="w-68 py-3 flex items-center gap-10">
        <img src={iconVopper} alt="" class="w-18 h-10" />
        <div class="flex bg-slate-100 p-2 gap-2 justify-start items-center rounded-full">
            <svg  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" {...$$props}>
                <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4">
                    <path d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z" />
                    <path stroke-linecap="round" d="M26.657 14.343A7.975 7.975 0 0 0 21 12a7.975 7.975 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485" />
                </g>
            </svg>
            <input type="text" placeholder="Search..."  class="focus:outline-none bg-transparent">
        </div>    
      </div>
      <div class="flex justify-center items-center gap-4">
        
        <button>
            <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...$$props}>
                <path fill="currentColor" d="M28.707 19.293L26 16.586V13a10.014 10.014 0 0 0-9-9.95V1h-2v2.05A10.014 10.014 0 0 0 6 13v3.586l-2.707 2.707A1 1 0 0 0 3 20v3a1 1 0 0 0 1 1h7v.777a5.15 5.15 0 0 0 4.5 5.199A5.006 5.006 0 0 0 21 25v-1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707M19 25a3 3 0 0 1-6 0v-1h6Zm8-3H5v-1.586l2.707-2.707A1 1 0 0 0 8 17v-4a8 8 0 0 1 16 0v4a1 1 0 0 0 .293.707L27 20.414Z" />
            </svg>
        </button>
        
        <div class="flex justify-center items-center gap-1">
            <div class="bg-black p-1 px-3 rounded-full text-white ">
                A
            </div>
            <button>
                <svg class="text-xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}>
                    <g fill="none" fill-rule="evenodd">
                        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                        <path fill="currentColor" d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z" />
                    </g>
                </svg>
            </button>
        </div>
      </div>
    </nav>
    <hr>
  </header>
  