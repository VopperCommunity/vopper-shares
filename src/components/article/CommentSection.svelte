<script lang="ts">
  import { dateFormatLocaleFromIso } from "$lib/date-format";
  import Tag from "../ui/Tag.svelte";

  type UserType = {
    isAuthor?: boolean;
    fullName: string;
    avatar: string;
  };
  type CommentSectionType = {
    user: UserType;
    imgSrc?: string;
    comment?: string;
    createdAt: string;
    likes?: number;
  };
  export let comment: CommentSectionType;
</script>

<article class="flex w-full p-3 rounded-lg">
  <img
    class="w-10 h-10 object-cover rounded-full"
    src={comment.user.avatar}
    alt={`avatar image of ${comment.user.fullName}`}
  />
  <container class="w-full pl-2">
    <header class="flex w-full font-bold mb-2">
      {comment.user.fullName}
      {#if comment.user.isAuthor}
      <Tag customClass="ml-3 !py-0 !px-2 text-[8px]" variant="primary">Autor</Tag>
      {/if}
      <span class="font-normal ml-3 text-gray-500 pt-1 text-xs">{dateFormatLocaleFromIso(comment.createdAt)}</span>
    </header>
    <p class="text-sm">{comment.comment}</p>
    <slot name="footer"/>
  </container>
</article>
