<script>
  export let message;
  export let title;
</script>

<details
  class="mb-3 border-stone-500 p-4 [&_svg]:open:-rotate-180 w-[650px]"
  name="questions"
>
  <!-- Deshabilitamos el triángulo/flecha predeterminado del summary -->
  <summary
    class="flex cursor-pointer list-none items-center gap-1 font-semibold text-lg"
  >
    <section>
      <!-- Agregamos nuestro propio SVG de triángulo/flecha -->
      <svg
        class="rotate-0 transform text-blue-700 transition-all duration-300"
        fill="none"
        height="20"
        width="20"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </section>
    <h1>{title}</h1>
  </summary>
  <p class=" w-[650px] mt-2">
    {message}
  </p>
</details>
