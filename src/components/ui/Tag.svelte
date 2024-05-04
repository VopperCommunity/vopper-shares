<script lang="ts">
  type KindButtonType = "outlined" | "default";
  type VariantButtonType = "primary" | "success" | "secondary";
  // Conastan declares
  const kindStyles: {[key in KindButtonType]: string} = {
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
      outlined: "text-blue-600 border-blue-600",
    },
    success: {
      default: "bg-green-500 text-white",
      outlined: "text-green-500 border-green-500",
    },
    secondary: {
      default: "bg-gray-200 text-gray-800",
      outlined: "text-gray-800 border-gray-800",
    }
  };

  // props 
  export let customClass = "";
  export let variant: VariantButtonType = "primary";
  export let kind: KindButtonType = "default";
</script>

<span 
  class={`
    py-2 text-xs font-semibold 
    rounded-2xl inline-flex justify-center items-center gap-x-2
    ${kindStyles[kind]}
    ${variantStyles[variant][kind]}
    ${customClass}`}
  >
  <slot/>
</span>


