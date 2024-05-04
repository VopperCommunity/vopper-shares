<script lang="ts">
  import { onMount } from "svelte";
  import Dialog from "../Dialog.svelte";
  import { QS } from "$lib/dom-selector";
  import TextArea from "../ui/TextArea.svelte";
  import Button from "../ui/Button.svelte";
  import PlusIcon from "$lib/icons/PlusIcon.svelte";
  import ImageIcon from "$lib/icons/ImageIcon.svelte";
  import PaperclipIcon from "$lib/icons/PaperclipIcon.svelte";
  import AngleDownIcon from "$lib/icons/AngleDownIcon.svelte";
  import Comment from "./Comment.svelte";
  import favicon from "$lib/images/devshares.png";
  import estudio from "$lib/images/estudio_landing.png"; //importacion de estudio
  import CommentIcon from "$lib/icons/CommentIcon.svelte";
  //icons

  let dialog: HTMLDialogElement;
  let bodyElement: HTMLBodyElement;

  onMount(() => {
    bodyElement = QS("body")!;
  });

  const cantComents = 1304;

  const articleComents = [
    {
      user: {
        fullName: "Olivia Reynolds",
        avatar: favicon,
      },
      imageSrc: estudio,
      comment: "This is an amazing article, I love it!",
      createdAt: "2022-01-23T13:34:21.000Z",
      likes: 10,
      replies: [
        {
          user: {
            fullName: "Juaquin",
            avatar: favicon,
          },
          comment: "I agree with this. I'm really excited to read it.",
          createdAt: "2022-01-23T13:44:00.000Z",
          likes: 5,
        },
        {
          user: {
            isAuthor: true,
            fullName: "Alexander",
            avatar: estudio,
          },
          comment: "Thank you!",
          createdAt: "2022-01-23T14:13:04.000Z",
          likes: 5,
        },
      ],
    },
    {
      user: {
        fullName: "Christopher Brown",
        avatar: favicon,
      },
      comment: "I found this article really helpful!",
      createdAt: "2022-02-03T21:34:00.000Z",
      likes: 8,
      assets: [
        {
          src: estudio,
          extencion: "png",
          size: 12435,
        },
      ],
    },
    {
      user: {
        isAuthor: true,
        fullName: "Alexander",
        avatar: estudio,
      },
      comment: "Thanks for sharing this article!",
      createdAt: "2022-01-01T04:00:00.000Z",
      likes: 5,
    },
  ];
</script>

<button class="flex" on:click={() => dialog.showModal()}> <CommentIcon customClass="w-6 h-6 mr-2" /> {cantComents} </button>
<Dialog
  customClass="h-full w-[600px] m-0 justify-self-end rounded-tl-2xl rounded-bl-2xl"
  bind:dialog
  elsToHideOverflowWheActive={[bodyElement]}
>
  <span class="text-2xl font-semibold" slot="header"
    >Comentarios ({cantComents})</span
  >
  <div class="w-full h-full">
    <!-- ------------------------------------ form new comment ------------------------------------- -->
    <form action="">
      <section class="flex w-full my-8">
        <img class="w-16 h-16 object-cover" src={favicon} alt="avatar image" />
        <container class="w-full">
          <TextArea name="comment" rows={2} placeholder="Write a comment" />
          <footer class="flex w-full mt-2 justify-between">
            <div class="w-fit">
              <button class="py-2 px-2">
                <PlusIcon customClass="w-4 h-4 fill-blue-600" />
              </button>
              <button class="py-2 px-2">
                <ImageIcon customClass="w-4 h-4 fill-blue-600" />
              </button>
              <button class="py-2 px-2">
                <PaperclipIcon customClass="w-4 h-4 fill-blue-600" />
              </button>
            </div>
            <div class="w-fit">
              <Button type="reset" variant="secondary">Cancelar</Button>
              <Button type="submit" onClick={() => dialog.close()}
                >Publicar</Button
              >
            </div>
          </footer>
        </container>
      </section>
    </form>
    <!-- ------------------------------------ List of comments ------------------------------------- -->
    <section class="w-full">
      <h2 class="flex text-lg font-normal mb-5">
        Most relevant <AngleDownIcon customClass="ml-3 mt-1 w-4 h-4" />
      </h2>
      <div class="bg-gray-100 rounded-lg p-0 h-[calc(100vh-370px)]">
        {#each articleComents as coment}
          <Comment comment={coment} />
        {/each}
        <div class="flex flex-wrap justify-center mt-2">
          <Button variant="secondary" kind="outlined">Show more discussion (4.512)</Button>
        </div>
      </div>
    </section>
  </div>
</Dialog>
