<script>
    export let title;
    export let img ;
    export const user = {
      name: 'Nombre del Usuario',
      date: "Fecha de registro",
      imgUSer: ""
    };
  </script>
  
  <div class=" grid grid-cols-2 border-black border-2 rounded-xl mx-auto max-w-6xl px-12 mb-10 ml-48">
    <picture class="p-5">
      <img src={img} alt="">
    </picture>

    <section>
    
      <header>
      <h1 class="text-2xl font-bold">{title}</h1>    
    </header>

    <div>
        <div>
            <h1>{user.name}</h1>
            <p>{user.date}</p>
        </div>
    </div>
  </section>
  </div>
  