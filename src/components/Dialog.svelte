<!-- Dialog.svelte -->
<script lang="ts">
  import { onMount } from "svelte";

  export let customClass = "";
  export let elsToHideOverflowWheActive: HTMLElement[] = [];

  export let dialog: HTMLDialogElement;
  onMount(() => {
    dialog.addEventListener("close", () => {
      elsToHideOverflowWheActive.forEach(el => el?.classList.remove('overflow-hidden'));
    })
    dialog.addEventListener("focusin", () => {
      elsToHideOverflowWheActive.forEach(el => el?.classList.add('overflow-hidden'));
    })
  });
</script>

,

<dialog
  class={`dialog p-10 ${customClass}`}
  bind:this={dialog}
  on:close={() => console.log("closed")}
>
  <header class="mb-5">
    <div class="flex w-full justify-between">
      <div class="max-w-[calc(100%-40px)]">
        <slot name="header" />
      </div>
      <button
        class="w-9 h-9 text-xl p-0 font-bold rounded-full hover:bg-gray-200 border-0 transition-colors"
        formmethod="dialog"
        type="submit"
        on:click={() => dialog.close()}>X</button
      >
    </div>
  </header>
  <body>
    <slot />
  </body>
</dialog>

<style>
  .dialog[open]::backdrop {
		background-color: rgba(0, 0, 0, 0.7);
    margin: 0px;
    padding: 0px;
		animation-name: join-anim;
		animation-duration: 200ms;
		animation-fill-mode: forwards;
		animation-timing-function: ease-in-out;
	}

	@keyframes join-anim {
		from {
			background-color: rgba(0, 0, 0, 0);
		}
		to {
			background-color: rgba(0, 0, 0, 0.7);
		}
	}
</style>
