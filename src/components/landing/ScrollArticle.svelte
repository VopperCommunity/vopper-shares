<script>
    import image from "$lib/images/articleImages.png";
    let img = image;
</script>

<div class="relative ">
    <img
      src={image}
      alt="Content image"
      class=" w-full h-full rounded-lg shadow-lg shadow-black "
    />

    <div
      class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent rounded-lg"
    >
      <h5 class="text-white font-bold text-">
        Generación de imágenes con inteligencia artificial... ADIOS
        DISEÑADORES?
      </h5>
    </div>

    <div class="absolute bottom-4 right-4 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6 text-white"
      >
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </div>
  </div>