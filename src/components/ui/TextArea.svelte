<script lang="ts">
  export let name;
  export let placeholder;
  export let value = "";
  export let error = "";
  export let help = "";
  export let rows = 3;
  export let cols = 30;
  export let minLength = 0;
  export let maxLength = 500;
  export let disabled = false;
  export let required = false;
  export let readonly = false;
  export let spellcheck = false;
  export let wrap = "soft";

  const onInput = (event: any) => {
    // value = event?.target?.value;
    console.log('canturando evento del aria label');
  };
</script>

<textarea
  class="block w-full px-3 py-2 text-base text-gray-900 border border-gray-300 rounded-lg
        focus:outline-none focus:ring-0 focus:border-gray-500 sm:text-sm"
  name={name}
  placeholder={placeholder}
  on:input={onInput}
  bind:value={value}
  rows={rows}
  cols={cols}
  minLength={minLength}
  maxLength={maxLength}
  disabled={disabled}
  required={required}
  readonly={readonly}
  spellcheck={spellcheck}
  wrap={wrap}
></textarea>

{#if error}
  <p class="text-sm text-red-600">{error}</p>
{/if}

{#if help}
  <p class="mt-2 text-sm text-gray-500">{help}</p>
{/if}


