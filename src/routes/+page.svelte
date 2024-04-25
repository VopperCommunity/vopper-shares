<script>
  import "../app.css";
  import "../landing.styles.css";
  import favicon from "$lib/images/devshares.png";
</script>

<header>
  <nav class="container flex items-center justify-between">
    <div class="w-68 py-5 flex items-center">
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

<div class="container">
  <div class="hero-section">
    <h1 class="text-hero font-semibold">
      Comparte para otros, aprende de otros -
    </h1>
    <div class="line"></div>
  </div>
  <div class="image-section">
    <img
      src="data:image/jpeg;base64,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"
      alt=""
    />
  </div>
</div>
