<script>
  import estudio from "$lib/images/estudio_landing.png"; //importacion de estudio
  import image from "$lib/images/image.png"
  import Navbar from "../components/navbar/Navbar.svelte"; //importacion de navbar (falta responsive)
  import Article from "../components/landingpages/Article.svelte";

  let clicked = false;
  const user = [
    {
      name: "Brian Bailey",
      date: "Jul 27, 2022",
      img: "$"
    }
    ]
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
            <a
              href=""
              class="text-sm px-2 py-3 rounded-t-xl rounded-br-xl bg-orange-300 border border-black"
              >Comenzar a leer</a
            >
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
    
    <div
      class="text-3xl font-principal text-center font-semibold md:text-4xl 2xl:text-5xl"
    >
      <h2>Encuentra Articulos de calidad sobre programacion</h2>
    </div>

    <div class="mt-8">
      <svg
        class="size-14 -rotate-12 text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 12 12"
        ><path
          fill="currentColor"
          d="M5.283 1.546a.8.8 0 0 1 1.435 0L7.83 3.798l2.486.361a.8.8 0 0 1 .443 1.365L8.96 7.277l.425 2.476a.8.8 0 0 1-1.16.844L6 9.427l-2.224 1.17a.8.8 0 0 1-1.16-.844l.424-2.476l-1.799-1.753a.8.8 0 0 1 .444-1.365l2.486-.36z"
        /></svg
      >
    </div>

    <div class="flex flex-col justify-around gap-10 py-20 md:flex-row">
      
      <div class="flex justify-center">
        <div class="max-w-max mx-auto">
          <div class="relative">
            <img
              src={image}
              alt="Content image"
              class=" max-w-md w-full h-[450px] md:h-[600px] rounded-lg shadow-lg shadow-black md:"
            />
            <div
              class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent rounded-lg"
            >
              <h5 class="text-white font-bold text-">
                Generación de imágenes con inteligencia artificial... ADIOS
                DISEÑADORES?
              </h5>
            </div>
            <div class="absolute top-4 right-4 flex space-x-1 cursor-pointer">
              <div class="w-2.5 h-2.5 bg-white rounded-full"></div>
              <div class="w-2.5 h-2.5 bg-white rounded-full opacity-50"></div>
              <div class="w-2.5 h-2.5 bg-white rounded-full opacity-50"></div>
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
        </div>
      </div>

      <div class="flex-col justify-center  items-center">
        
        <div class="flex items-center justify-center ">
        <svg
          class="size-8"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
          ><path
            fill="currentColor"
            d="M244 56v64a12 12 0 0 1-24 0V85l-75.51 75.52a12 12 0 0 1-17 0L96 129l-63.51 63.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0L136 135l67-67h-35a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12"
          /></svg
        >
        <h1 class="text-center font-semibold text-2xl">Artículos de programación</h1>
        </div>
        
        <div class="flex flex-wrap justify-center gap-4 mt-5 ">
        
          <div class="flex text-center bg-white  rounded-2xl p-2">
            <h1 class="font-principal text-xs"># Everything Explained</h1>
          </div>
  
          <div class="flex text-center bg-white  rounded-2xl p-2">
            <h1 class="font-principal  text-xs"># Tech Reads</h1>
          </div>
  
          
          <div class="flex text-center bg-white  rounded-2xl p-2">
            <h1 class="font-principal  text-xs"># Family Theraphy</h1>
          </div>
          
          <div class="flex text-center bg-white  rounded-2xl p-2">
            <h1 class="font-principal  text-xs"># Hola mundo</h1>
          </div>
  
        </div>

        
        <section class="mt-5">
          <header>
            <nav class="flex list-none gap-4 justify-center items-center">
              <li class="border-solid border-purple-700 hover:border-b-4">Novedades</li>
              <li class="border-solid border-purple-700 hover:border-b-4">Populares</li>
              <li class="border-solid border-purple-700 hover:border-b-4">Escritores</li>
            </nav>

            <div class="flex-col justify-start items-center">
              <Article
              title="Los Usuarios eticos de crear imagenes con AI"
              user = {user[0]}
              img = {estudio} 
              />
            </div>
            
            <div>

            </div>
          </header>
        
        
        </section>

      </div>

    </div>

    <div class="flex justify-end">
      <svg
        class="size-14 rotate-12 text-teal-400"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 12 12"
        ><path
          fill="currentColor"
          d="M5.283 1.546a.8.8 0 0 1 1.435 0L7.83 3.798l2.486.361a.8.8 0 0 1 .443 1.365L8.96 7.277l.425 2.476a.8.8 0 0 1-1.16.844L6 9.427l-2.224 1.17a.8.8 0 0 1-1.16-.844l.424-2.476l-1.799-1.753a.8.8 0 0 1 .444-1.365l2.486-.36z"
        /></svg
      >
    </div>
    <div>
      <div class="bg-slate-700"></div>
    </div>
  </div>
</section>
