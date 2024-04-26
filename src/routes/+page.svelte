<script>
  import "../app.css";
  import "../landing.styles.css";
  import favicon from "$lib/images/devshares.png";
  import estudio from "$lib/images/estudio_landing.png"
</script>

<header>
  <nav class="container flex items-center justify-between">
    <div class="w-68 py-3 flex items-center">
      <img src={favicon} alt="" class="w-16 h-16" />
      <h2 class="hidden sm:block text-3xl font-semibold font-serif">
        Dev Shares
      </h2>
      <div class="px-5">
        <ul
          class="hidden lg:flex items-center space-x-6 text-base text-gray-600"
        >
          <li>
            <a href="" class="hover:text-black ease-linear duration-200"
              >¿Como funciona?</a
            >
          </li>
          <li>
            <a href="" class="hover:text-black ease-linear duration-200"
              >Planes</a
            >
          </li>
          <li>
            <a href="" class="hover:text-black ease-linear duration-200"
              >Preguntas Frecuentes</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div>
      <a
        href=""
        class="px-4 py-3 border rounded-xl capitalize text-gray-600 hover:border-black hover:text-black ease-in duration-200"
        >Iniciar Sesion</a
      >
      <a
        href=""
        class="px-6 py-3 border rounded-l-xl rounded-tr-xl capitalize text-white bg-black hover:opacity-80 ease-in duration-200"
        >Comenzar</a
      >
    </div>
  </nav>
</header>

<section class="relative">
  <div class="container py-20">
    <div class="flex flex-col items-center z-20 md:flex-row">
      <div class="flex flex-col md:flex-row items-center">
        <div class="text-left mb-12 md:w-1/2 md:pr-10 md:text-justify">
          <p class="leading-relax text-center text-5xl font-serif font-medium md:text-6xl leading-snug mb-4 md:text-left">Comparte para otros, aprende de otros -</p>
          <div class="pt-10 border-t border-black text-center md:text-left">
            <p class="mb-10">unete a la comunidad de programadores he interactua con ellos</p>
            <a href="" class="text-sm px-2 py-3 rounded-t-xl rounded-br-xl bg-orange-300 border border-black">Comenzar a leer</a>
            <a href="" class="text-sm px-2 py-3 rounded-xl border border-black">Convertirme en autor</a>
          </div>
        </div>
        <div class="md:w-1/2">
          <img
            src={estudio} alt="" class="rounded-tl-2xl rounded-br-2xl w-[600px] pb-4"/>
            <div class="text-xl bg-purple-100 py-6 rounded-r-xl rounded-bl-xl text-center font-semibold">
              <p>Escribe, Inspira, Aprende</p>
              <p class="text-base">⭐⭐⭐⭐⭐</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>
