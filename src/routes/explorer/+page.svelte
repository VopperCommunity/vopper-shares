<script>
  import NavbarMain from "./../../components/navbar/NavbarMain.svelte";
  import image from "$lib/images/image.png";
  import TextArea from "./../../components/ui/TextArea.svelte";
  import { text } from "@sveltejs/kit";
</script>

<NavbarMain />
<section class="relative">
  <div class="container py-20">
    <header class="flex flex-col justify-center gap-5">
      <div class="flex justify-center items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          class="text-xl size-16"
          viewBox="0 0 24 24"
          {...$$props}
        >
          <path
            fill="currentColor"
            d="m7 17l3.2-6.8L17 7l-3.2 6.8zm5-5.9a.9.9 0 0 0-.9.9a.9.9 0 0 0 .9.9a.9.9 0 0 0 .9-.9a.9.9 0 0 0-.9-.9M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"
          />
        </svg>
        <h1 class="text-5xl font-principal font-bold text-center">Explorar</h1>
      </div>

      <p class="text-center font-light text-lg">
        Explorar nuevo contenido sobre desarrollo aquí
      </p>

      <section class=" w-full justify-center mt-10">
        <div
          class="flex justify-between gap-5 items-center border-[3px]  lg:mx-36 h-14 border-black rounded-l-2xl rounded-r-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="25px"
            viewBox="0 0 48 48"
            {...$$props}
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="4"
            >
              <path
                d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"
              />
              <path
                stroke-linecap="round"
                d="M26.657 14.343A7.975 7.975 0 0 0 21 12a7.975 7.975 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"
              />
            </g>
          </svg>

          <input
            type="text"
            placeholder="Buscar..."
            class=" focus:outline-none w-full h-full text-xl"
          />

          <label for="categorias"> </label>

          <select
            name="Articulos"
            id="Articulos"
            class="bg-indigo-400 relative w-32 text-white h-full border-l-2 border-black rounded-r-xl px-3 py-2 text-sm focus:outline-none focus:ring-2"
          >
            <option value="importante">importante</option>
            <option value="ia">Inteligencia Artificial</option>
            <input type="text" class="bg" />
          </select>
        </div>
      </section>
    </header>
  </div>
</section>
