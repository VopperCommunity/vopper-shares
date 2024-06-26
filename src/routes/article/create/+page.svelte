<script lang="ts">
  import StarterKit from "@tiptap/starter-kit";
  import { Editor } from "@tiptap/core";
  import { onMount } from "svelte";
  import Link from "@tiptap/extension-link";
  import Underline from "@tiptap/extension-underline";
  import Image from "@tiptap/extension-image";
  import BoldIcon from "$lib/icons/article-editor/BoldIcon.svelte";
  import ItalicIcon from "$lib/icons/article-editor/ItalicIcon.svelte";
  import UnderlineIcon from "$lib/icons/article-editor/UnderlineIcon.svelte";
  import StrikeIcon from "$lib/icons/article-editor/StrikeIcon.svelte";
  import HyperlinkIcon from "$lib/icons/article-editor/HyperlinkIcon.svelte";
  import CodeIcon from "$lib/icons/article-editor/CodeIcon.svelte";
  import BulletListIcon from "$lib/icons/article-editor/BulletListIcon.svelte";
  import OrderedListIcon from "$lib/icons/article-editor/OrderedListIcon.svelte";
  import ImageIcon from "$lib/icons/article-editor/ImageIcon.svelte";
  import MoreIcon from "$lib/icons/article-editor/MoreIcon.svelte";
  import UndoIcon from "$lib/icons/article-editor/UndoIcon.svelte";
  import RedoIcon from "$lib/icons/article-editor/RedoIcon.svelte";
  import HeadsetIcon from "$lib/icons/article-editor/HeadsetIcon.svelte";
  import Navbar from "../../../components/navbar/Navbar.svelte";
  import Footer from "../../../components/footer/footer.svelte";

  let element: HTMLElement;
  let editor!: Editor;
  let selectedImage: File | null = null;

  onMount(() => {
    editor = new Editor({
      element: element,
      editorProps: {
        attributes: {
          class: "",
        },
      },
      extensions: [
        StarterKit,
        Link.configure({
          openOnClick: true,
          autolink: true,
        }),
        Underline,
        Image,
      ],
      content: String,
      autofocus: true,
      onTransaction: () => {
        // force re-render so `editor.isActive` works as expected
        editor = editor;
      },
    });
  });

  function setLink() {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    if (url === null) {
      return;
    }

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }

  const handleUploadFile = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event) => {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files[0]) {
        selectedImage = target.files[0];
        editor.commands.setImage({
          src: URL.createObjectURL(selectedImage),
          alt: selectedImage.name,
          title: selectedImage.name,
        });
      }
    };
    input.click();
  };
</script>

<Navbar />
<section
  class="w-full h-full flex justify-center items-center border-[1px] border-[#BCC1CAFF]"
>
  {#if editor}
    <div id="editorNav" class="flex w-[60%] justify-between items-center">
      <div class="border-[#BCC1CAFF]">
        <button
          on:click={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          <UndoIcon />
        </button>
        <button
          on:click={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          <RedoIcon />
        </button>
      </div>
      <div>
        <button
          on:click={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          class={editor.isActive("bold") ? "is-active" : ""}
        >
          <BoldIcon />
        </button>
        <button
          on:click={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          class={editor.isActive("italic") ? "is-active" : ""}
        >
          <ItalicIcon />
        </button>
        <button
          on:click={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          class={editor.isActive("strike") ? "is-active" : ""}
        >
          <StrikeIcon />
        </button>
        <button
          on:click={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
        >
          <UnderlineIcon />
        </button>
      </div>
      <div>
        <button
          on:click={() => editor.chain().focus().toggleCodeBlock().run()}
          class={editor.isActive("codeBlock") ? "is-active" : ""}
        >
          <CodeIcon />
        </button>
      </div>
      <div>
        <button on:click={() => setLink()}>
          <HyperlinkIcon />
        </button>

        <button on:click={handleUploadFile}>
          <ImageIcon />
        </button>

        <button on:click={() => editor.chain().focus().clearNodes().run()}>
          <HeadsetIcon />
        </button>
      </div>
      <div>
        <button
          on:click={() => editor.chain().focus().toggleBulletList().run()}
          class={editor.isActive("bulletList") ? "is-active" : ""}
        >
          <BulletListIcon />
        </button>
        <button
          on:click={() => editor.chain().focus().toggleOrderedList().run()}
          class={editor.isActive("orderedList") ? "is-active" : ""}
        >
          <OrderedListIcon />
        </button>
      </div>
      <div>
        <button
          class="flex items-center"
          on:click={() => editor.chain().focus().clearNodes().run()}
        >
          <MoreIcon />
        </button>
      </div>
    </div>
  {/if}
</section>
<section class="container flex flex-col items-center justify-center mb-20">
  <div class="w-[60%] min-h-screen h-full" bind:this={element} />
</section>

<Footer />
