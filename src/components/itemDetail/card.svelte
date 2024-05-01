<script>

    export let imgSrc = "$lib/images/image_item_detail.png";
    export let title = "";
  </script>

<div class="flex  bg-slate-50 shadow-md w-[310px] rounded-[12px] flex-col cursor-pointer">
    <img class="rounded-t-lg h-[200px]" src={imgSrc} alt={title}  />
    <div class="w-full   p-4">
          <h2 class=" font-semibold text-xl text-wrap line-height-[28px]" style="font-family: bitter;">{title}</h2>
    </div>

</div>
