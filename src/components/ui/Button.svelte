<script lang="ts">
  type KindButtonType = "text" | "outlined" | "default";
  type VariantButtonType = "primary" | "success" | "secondary";
  // Conastan declares
  const kindStyles: {[key in KindButtonType]: string} = {
    text: 'px-2',
    outlined: 'px-6 border-2',
    default: 'px-6'
  }
  
  const variantStyles: {
    [key in VariantButtonType]: {
      [key in KindButtonType]: string
    }
  } = {
    primary: {
      default: "bg-blue-600 text-white",
      text: "text-blue-600",
      outlined: "text-blue-600 border-blue-600",
    },
    success: {
      default: "bg-green-500 text-white",
      text: "text-green-500",
      outlined: "text-green-500 border-green-500",
    },
    secondary: {
      default: "bg-gray-300 text-gray-600",
      text: "text-gray-400",
      outlined: "text-gray-400 border-gray-300",
    }
  };

  // props 
  export let customClass = "";
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let variant: VariantButtonType = "primary";
  export let kind: KindButtonType = "default";
  export let onClick = () => {};
</script>

<button 
  class={`
    py-2 text-xs font-semibold 
    rounded-lg inline-flex justify-center items-center gap-x-2
    ${kindStyles[kind]}
    ${variantStyles[variant][kind]}
    ${customClass}`}
  type={type}
  on:click={onClick}>
  <slot/>
</button>


