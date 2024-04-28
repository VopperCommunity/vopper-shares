<script>
  import estudio from "$lib/images/estudio_landing.png"; //importacion de estudio
  import Navbar from "../components/navbar/Navbar.svelte"; //importacion de navbar (falta responsive)
  import Footer from "../components/footer/footer.svelte"; //Import footer - no responsive
</script>

<Navbar />

<!--Home section (principal)-->
<section class="relative">
  <div class="container py-20">
    <div class="flex flex-col items-center z-20 md:flex-row">
      <div class="flex flex-col md:flex-row items-center">
        <div class="text-left mb-12 md:w-1/2 md:pr-10 md:text-justify">
          <p
            class="leading-relax text-center text-5xl font-principal font-bold md:text-6xl leading-snug mb-4 md:text-left xl:text-7xl"
          >
            Comparte para otros, aprende de otros -
          </p>
          <div class="pt-10 border-t border-black text-center md:text-left">
            <p class="mb-10">
              unete a la comunidad de programadores he interactua con ellos
            </p>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a
              href=""
              class="text-sm px-2 py-3 rounded-t-xl rounded-br-xl bg-orange-300 border border-black"
              >Comenzar a leer</a
            >
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a href="" class="text-sm px-2 py-3 rounded-xl border border-black"
              >Convertirme en autor</a
            >
          </div>
        </div>
        <div class="md:w-1/2">
          <img
            src={estudio}
            alt=""
            class="rounded-tl-2xl rounded-br-2xl w-[600px] pb-4"
          />
          <div
            class="text-xl bg-purple-100 py-6 rounded-r-xl rounded-bl-xl text-center font-semibold 2xl:w-[600px]"
          >
            <p>Escribe, Inspira, Aprende</p>
            <p class="text-base">⭐⭐⭐⭐⭐</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!--Images section-->
<section class="relative bg-gray-50">
  <div class="container py-20">
    <div class="text-3xl font-principal text-center font-semibold md:text-4xl 2xl:text-5xl">
      <h2>Encuentra Articulos de calidad sobre programacion</h2>
    </div>
    <div>

    </div>
  </div>
</section>

<Footer/>
