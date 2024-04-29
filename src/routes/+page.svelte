<script>
  import estudio from "$lib/images/estudio_landing.png"; //importacion de estudio
  import RecognizedDevCard from "../components/landing/RecognizedDevCard.svelte";
  import Navbar from "../components/navbar/Navbar.svelte"; //importacion de navbar (falta responsive)
  import Footer from "../components/footer/footer.svelte"; //Import footer - no responsive
  
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
    <div
      class="text-3xl font-principal text-center font-semibold md:text-4xl 2xl:text-5xl"
    >
      <h2>Encuentra Articulos de calidad sobre programacion</h2>
    </div>
    <div></div>
  </div>
</section>

<!-- ----------------------------------- Recognitions section ----------------------------------- -->
<section class="relative bg-gray-50">
  <div class="container py-20">
    <div class="px-5 grid grid-cols-1 lg:grid-cols-2">
      <div class="px-6 text-3xl font-bold font-principal md:text-4xl 2xl:text-5xl">
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

<Footer/>
