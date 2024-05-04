<script lang="ts">
  import Info from "$lib/images/info.svelte";

  export let text: string = "";
  const color = "#7B390B";
</script>

<div
  class="flex content-center items-center rounded-xl border-2 border-black bg-white w-[349px] h-[50px] pr-12"
>
  <Info styles="ml-5 mr-0" {color} />
  <span class="ml-2 font-normal text-sm">{text}</span>
</div>
