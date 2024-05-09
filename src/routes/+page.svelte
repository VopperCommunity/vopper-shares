<script>
	import Article from './../components/landing/Article.svelte';
	import ScrollArticle from './../components/landing/ScrollArticle.svelte';
  import RecognizedDevCard from "../components/landing/RecognizedDevCard.svelte";
	import  image  from '$lib/images/image.png';
  import estudio from "$lib/images/estudio_landing.png"; //importacion de estudio
  import Navbar from "../components/navbar/Navbar.svelte"; //importacion de navbar (falta responsive)
  import Footer from "../components/footer/footer.svelte"; //Import footer - no responsive
  import Arrow from "$lib/images/arrow.svelte";
  import Info from "$lib/images/info.svelte";
  import Pill from "../components/pillsInfo/pill.info.svelte";

  let devsRecognized = [
    {
      fullName: "Olivia Reynolds",
      description:
        "Film critic and movie aficionado, sharing deep analysis on the latest blockbusters.",
      role: "Backend Dev Senior",
      views: 5200000,
      imgSrc: estudio,
    },
    {
      fullName: "Alexander Hughes",
      description:
        "Award-winning sci-fi writer with a knack for creating futuristic worlds.",
      role: "Diseñador UI/UX",
      views: 300000,
      imgSrc: estudio,
    },
    {
      fullName: "Christopher Brown",
      description:
        "Tech enthusiast & software engineer, passionate about technologies.",
      role: "Frontend Dev JR",
      views: 35000,
      imgSrc: estudio,
    },
    {
      fullName: "Sophia Anderson",
      description:
        "Fashionista and stylist, guide to build your personal and sustainable closet.",
      role: "Ingeniera DevOps",
      views: 232,
      imgSrc: estudio,
    },
  ];
  
 

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

    <div>
    <h2 class="text-4xl text-center font-bold font-principal">Encuentra Articulos de calidad sobre programacion</h2>
    </div>

    <div class="mt-8">
      <svg
        class="size-14 -rotate-12 text-gray-300 animate-pulse"
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

    <div class="flex flex-col justify-between gap-20 py-20 lg:flex-row ">
      

      <!--  Article Scroll--->
      <section class="w-auto">
        <div class="max-w-xl mx-full">
            <ScrollArticle/>
          </div>

      </section>

        <!-- section arcticle -->
      <div class="flex-col justify-center  items-center">
        
        <div class="flex items-center justify-center ga ">
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

        <article class="mt-5 ">
          
          <header>
            <nav class="flex list-none gap-4 justify-center items-center md:justify-start">
              <a class="border-solid border-purple-700 border-b-4">Novedades</a>
              <a class="border-solid border-purple-700 hover:border-b-4">Populares</a>
              <a class="border-solid border-purple-700 hover:border-b-4">Escritores</a>
            </nav>
          </header>
            <div
             class="grid grid-flow-row max-h-fit  mt-10 justify-stretch gap-5 scrollbar-hide"
             style=" max-height: px; overflow-y: auto;"
             >
             <Article id="articleID"/>
             <Article />
             <Article />
             <Article />

            </div>
          
            <div class = "flex justify-center lg:justify-start mt-5 items-center gap-3 text-slate-600 hover:text-black">
              <a href="/explorer" class= ""> ver más</a>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}>
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6" />
              </svg>
            </div> 
          </article>

      </div>

    </div>

    <!--Start-->
    <div class="flex justify-end">
      <svg
        class="size-14 rotate-12 text-teal-400 animate-pulse"
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
<!-- A info section about the page-->
<div class="rounded-t-3xl bg-purple-light h-[641px] w-full-screen flex">
  <aside class="ml-40 content-center">
    <h1 class="font-semibold text-5xl font-principal">
      Una plataforma para devs
    </h1>
    <p class="mt-16 text-gray-light w-[420px] text-justify text-pretty">
      Lectores y escritores pueden conectar con otras personas con experiencias
      y conocimientos similares.
    </p>

    <button
      class="bg-black rounded-t-3xl rounded-br-3xl p-3 flex justify-center text-white mt-24"
      >Aprender más alaburger <Arrow styles="ml-3 mt-1" /></button
    >
  </aside>
  <section class="flex flex-col space-y-5 ml-48 mt-48">
    <Pill text="Los lectores pueden encontrar contenido a su gusto" />
    <Pill text="Los escritores pueden recibir feedback de otros devs" />
    <Pill text="Conecta con eventos" />
  </section>
</div>

<!-- ----------------------------------- Recognitions section ----------------------------------- -->
<section class="relative bg-gray-50">
  <div class="container py-20">
    <div class="px-5 grid grid-cols-1 lg:grid-cols-2">
      <div
        class="px-6 text-3xl font-bold font-principal md:text-4xl 2xl:text-5xl"
      >
        <h2>Obten insignias por el reconocimiento de tu trabajo</h2>
      </div>
      <p
        class="pt-2 px-6 font-[Raleway] md:text-lg 2xl:text-xl font-normal text-[#323842]"
      >
        Escribe articulos y deja que las personas voten por ti para recibir una
        insignia por ser escritor
      </p>
    </div>
    <div class="mt-20 flex flex-wrap justify-center gap-10">
      {#each devsRecognized as dev}
        <RecognizedDevCard
          fullName={dev.fullName}
          description={dev.description}
          role={dev.role}
          views={dev.views}
          imgSrc={dev.imgSrc}
        />
      {/each}
    </div>
  </div>
</section>

<Footer />
