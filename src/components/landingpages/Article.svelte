<script>
    import articleImages from "$lib/images/articleImages.png";
    export let title = "Hola mundo";
    export let img = articleImages;
    export const user = {
      name: 'Nombre del Usuario',
      date: "Fecha de registro",
      imgUSer: "",
    };
  </script>
  
  <div class=" flex flex-row justify- p-3 border-black border-2 rounded-xl ">
    
    <img 
    src={img} 
    class="rounded-2xl w-40 h-28 p-2"
    >
    

    <section>
    
      <header>
      <h1 class="text-2xl font-bold">{title}</h1>    
    </header>

    <div>
        <div>
            <h1>{user.name}</h1>
            <p>{user.date}</p>
            <picture>
              <img src={user.imgUSer} alt="">
            </picture>
        </div>
    </div>
  </section>
  </div>
  