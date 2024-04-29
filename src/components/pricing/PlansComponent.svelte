<script>
  export let title;
  export let price;
  export let options = [];
</script>

<div class="mx-auto max-w-6xl px-12 mb-10 ml-48">
  <div class="flex flex-wrap gap-3 border-2 rounded-lg">
    <label class="cursor-pointer">
      <input id="selected" type="radio" class="peer sr-only" name="pricing" />
      <div
        class="w-72 max-w-xl rounded-md bg-white p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#6c69f6] peer-checked:ring-[#6c69f6] peer-checked:ring-offset-2"
      >
        <div class="flex flex-col gap-1">
          <div class="flex items-center">
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24"
                ><path
                  fill="currentColor"
                  d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                /></svg
              >
            </div>
            <div class="flex flex-row items-center justify-evenly space-x-4">
              <p class="ml-3 text-sm font-semibold uppercase text-gray-500">
                {title}
              </p>
              <p class="">
                {#if title == "Annually"}
                  $ {price} <span class="text-[12px]">/year</span>
                {:else}
                  $ {price} <span class="text-[12px]">/month</span>
                {/if}
              </p>
            </div>
          </div>
          <div class="ml-8 block items-end justify-between">
            {#each Object.entries(options) as [index, option]}
              <div class="flex">
                <svg
                  data-testid="geist-icon"
                  height="16"
                  stroke-linejoin="round"
                  viewBox="0 0 16 16"
                  width="16"
                  style="color: #1dd75b;"
                  ><path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z"
                    fill="currentColor"
                  ></path></svg
                >
                <p class="text-sm ml-3">{option}</p>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </label>
  </div>
</div>
