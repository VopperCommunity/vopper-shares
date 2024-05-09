<script>
  import articleImages from "$lib/images/articleImages.png";
  import perfilImage from "$lib/images/perfilImage.png";
  export let title = " Título del Artículo fdsdfdsf sdfdsf asda jhgj gh fdsgfdg dfhgfhfgh";
  export let img = articleImages;
  export const user = {
    name: 'Nombre del Usuario',
    date: "27 jul, 2024",
    imgUSer: perfilImage,
  };
</script>

<section class=" flex flex-row justify- p-3 border-black border-2 rounded-xl  ">
  
  <img 
  alt="Content image"
  src={img} 
  class="rounded-2xl size-[165px] p-2 "
  />

  <section class=" flex flex-col justify-between my-5 ml-3">
    <header>
      <h1 class="text-tail text-xl font-semibold max-w-64">{title}</h1>    
    </header>
     
  <div class="flex size- gap-5 mt-5 ">
          <picture>
            <img src={user.imgUSer} alt="">
          </picture>
      <div>
        <h1 class="text-sm text-slate-500">{user.name}</h1>
        <p class="text-xs text-slate-400">{user.date}</p>
      </div>
      
  </div>
</section>

<div class="flex justify-end items-end m-3 hover:text-slate-500 ">
<a href="" class="border-black border-2 rounded-full p-1  "> 
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}>
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6" />
  </svg>
</a>
</div>
</section>
