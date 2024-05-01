<script>
  import imageItem from "$lib/images/image-card-detail.png"; //importacion de imagen para la imagen del artículo
  import imageDetail from "$lib/images/image-detail-article.png"; //importacion de imagen para la imagen del artículo
  import Card from "../../components/itemDetail/card.svelte"; //importacion de la tarjeta de detalles del artículo

  let articlesRecomended = [
    {
      imgSrc: imageItem,
      title: "From Novice to Programmer: The Journey of Learning to Code",
    },
    {
      imgSrc: imageItem,
      title: "Blocking to stay in hyperfocus and boost your productivity",
    },
    {
      imgSrc: imageItem,
      title: "Emotional Well-being - [E12]: Negative vs. Positive Motivation ",
    },
  ];
</script>

<main class="p-10 pb-20">
    <!--article details-->
    <section class="mx-64">
        <div class="flex gap-3 items-center">
            <button class="rounded-full p-2 border-2 border-[#171A1FFF]">
                
                Popular
            </button>
            <button class="rounded-full p-2 border-2 bg-[#171A1FFF] text-white">
                Blockchain
            </button>
            <span class="text-[#323842FF]">Jun 27, 2023</span>
         
        </div>
        <h1 class="text-[32px] mt-5" style="font-family: bitter;"> Demystifying Blockchain: Was it intentionally made confusing?</h1>
        <div class="flex w-full justify-between mt-20 border-b-2 pb-4">
            <div class="flex gap-5 items-center">
                <div class="flex gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#000000" d="M245.48 125.57c-.34-.78-8.66-19.23-27.24-37.81C201 70.54 171.38 50 128 50S55 70.54 37.76 87.76c-18.58 18.58-26.9 37-27.24 37.81a6 6 0 0 0 0 4.88c.34.77 8.66 19.22 27.24 37.8C55 185.47 84.62 206 128 206s73-20.53 90.24-37.75c18.58-18.58 26.9-37 27.24-37.8a6 6 0 0 0 0-4.88M128 194c-31.38 0-58.78-11.42-81.45-33.93A134.77 134.77 0 0 1 22.69 128a134.56 134.56 0 0 1 23.86-32.06C69.22 73.42 96.62 62 128 62s58.78 11.42 81.45 33.94A134.56 134.56 0 0 1 233.31 128C226.94 140.21 195 194 128 194m0-112a46 46 0 1 0 46 46a46.06 46.06 0 0 0-46-46m0 80a34 34 0 1 1 34-34a34 34 0 0 1-34 34"/></svg>
                    <span class="text-[1rem] text-[#323842FF] font-light " style="font-family:raleway;">18M</span>
            
                </div>
                <div class="flex gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#000000" d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.19-.45.29-.7.29zm1-6v3.08L16.08 17H21V7H7v10zM3 15H1V3a2 2 0 0 1 2-2h16v2H3z"/></svg>
                    <span class="text-[1rem] text-[#323842FF] font-light " style="font-family:raleway;">4K</span>
                </div>
            </div>

            <div class="flex gap-5">
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#000000" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7c0-.24-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.15c-.05.21-.08.43-.08.66c0 1.61 1.31 2.91 2.92 2.91c1.61 0 2.92-1.3 2.92-2.91A2.92 2.92 0 0 0 18 16.08"/></svg>
                </div>
    
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#000000" d="M6 19.5V4h12v15.5l-6-2.583zm1-1.55l5-2.15l5 2.15V5H7zM7 5h10z"/></svg>
                </div>
    
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#000000" d="M12 16.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m0-6a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m0-6a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"/></g></svg>
                </div>
            </div>
        </div>
        <div class="w-full mt-10">
            <img class="w-full object-cover" src={imageDetail} alt="imagen">
             
            <p class="text-[1rem] leading-7 font-normal text-[ #171A1FFF] mt-16" style="font-family: raleway;">Blockchain technology has emerged as a groundbreaking innovation with the potential to revolutionize industries and transform our digital landscape. However, as we delve into the intricacies of blockchain, we often encounter a daunting array of technical terms, complex concepts, and seemingly impenetrable jargon.</p>
            <p  class="text-[1rem] leading-7 text-[ #171A1FFF] mt-20" style="font-family: raleway;">This raises an intriguing question: Was blockchain intentionally made confusing? In this article, we embark on a quest to demystify blockchain, exploring the motivations behind its perceived complexity and shedding light on how we can unravel its intricacies.</p>
            
            <h1 class=" text-[ #171A1FFF] font-bold leading-9 text-2xl" style="font-family:bitter">Unraveling the Complexity</h1>
            <p   class="text-[1rem] leading-7 text-[ #171A1FFF] mt-10" style="font-family: raleway;">At first glance, blockchain can appear as a labyrinth of cryptographic algorithms, consensus mechanisms, and distributed ledgers. The technical nature of blockchain has led many to believe that it was intentionally designed to be confusing, keeping it exclusive to a select few. However, upon closer inspection, we discover that the complexity of blockchain arises from the inherent challenges it seeks to overcome.</p>
        </div>
    </section>
    <!--cards recomended for you-->
  <section class=" w-full justify-center mt-24">
    <h1 class=" font-semibold text-2xl" style="font-family: raleway;">
      Recomendados para ti
    </h1>
    <div class="flex flex-wrap w-full gap-20 justify-center mt-10">
      {#each articlesRecomended as article}
        <Card imgSrc={article.imgSrc} title={article.title} />
      {/each}
    </div>
  </section>
</main>
