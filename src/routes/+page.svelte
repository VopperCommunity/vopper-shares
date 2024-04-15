<script>
  import "../app.css";
</script>

<nav class="py-5 lg:fixed w-full bg-white transition-all duration-500">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="w-full flex flex-col lg:flex-row">
      <div class=" flex justify-between lg:flex-row">Vopper</div>
      <div class="hidden w-full lg:flex lg:pl-11 max-lg:py-4" id="navbar">
        <ul
          class="flex lg:items-center flex-col max-lg:gap-4 mt-4 lg:mt-0 lg:flex-row max-lg:mb-4"
        >
          <li>
            <a
              href="javascript:;"
              class="text-gray-500 text-base lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 block lg:mr-6 md:mb-0 lg:text-left"
              >Inicio</a
            >
          </li>
          <li>
            <a
              href="javascript:;"
              class="text-gray-500 text-base lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 block lg:mr-6 md:mb-0 lg:text-left"
              >Acerca de</a
            >
          </li>
        </ul>
        <div
          class="flex lg:items-center justify-start flex-col lg:flex-row max-lg:gap-4 lg:flex-1 lg:justify-end"
        >
          <a
            href="/auth/login"
            class=" bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100"
          >
            Iniciar sesion
          </a>
          <a
            href="/auth/register"
            class="bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm lg:ml-5 hover:bg-indigo-700"
            >Registro
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
<section class="lg:pt-20 pt-0 lg:pl-8 h-full">
  <div
    class="rounded-2xl bg-indigo-50 py-10 overflow-hidden m-5 lg:m-0 2xl:py-16 xl:py-8 lg:rounded-tl-2xl lg:rounded-bl-2xl"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap32"
      >
        <div class="w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0">
          <div
            class="flex items-center text-sm font-medium text-gray-500 justify-center lg:justify-start"
          >
            <span
              class="bg-indigo-600 py-1 px-3 rounded-2xl text-xs font-medium text-white mr-3"
              >#1</span
            >
            Producto de Vopper
          </div>
          <h1
            class="py-8 text-center text-gray-900 font-bold font-manrope text-5xl lg:text-left leading-[70px]"
          >
            La forma tan unica que tiene Vopper  de aportar a la <span
              class="text-indigo-600">Comunidad ❤️</span
            >
          </h1>
          <p class=" text-gray-500 text-lg text-center lg:text-left">
            Puedes aportar a la comunidad escribiendo blogs o articulos de
            programacion!
          </p>
          <br />
          <button
            class="bg-indigo-600 rounded-full py-3 px-7 text-base font-semibold text-white hover:bg-indigo-700 cursor-pointer transition-all duration-500 md:w-fit w-full"
          >
            Comenzar ahora
          </button>
        </div>
        <div class="w-full xl:col-span-7 lg:col-span-6 block">
          <div class="w-full sm:w-auto lg:w-[60.8125rem] xl:ml-16">
            <img
              src="https://pagedone.io/asset/uploads/1694846193.png"
              alt="Dashboard image"
              class="w-full lg:h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
