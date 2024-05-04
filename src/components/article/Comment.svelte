<script lang="ts">
  import { dateFormatLocaleFromIso } from "$lib/date-format";
  import LikeIcon from "$lib/icons/LikeIcon.svelte";
  import ReplyIcon from "$lib/icons/ReplyIcon.svelte";
  import Button from "../ui/Button.svelte";
  import Tag from "../ui/Tag.svelte";
  import CommentSection from "./CommentSection.svelte";

  type UserType = {
    isAuthor?: boolean;
    fullName: string;
    avatar: string;
  };
  type ReplyType = {
    user: UserType;
    comment: string;
    createdAt: string;
    likes: number;
  };
  type ComentType = {
    user: UserType;
    imageSrc?: string;
    comment?: string;
    createdAt: string;
    likes: number;
    replies?: Array<ReplyType>;
  };
  export let comment: ComentType;
</script>

<CommentSection {comment}>
  <tem slot="footer">
    <Button variant="primary" kind="text">
      <LikeIcon customClass="w-3 h-3 m-0 fill-blue-600" /> like {comment.replies
        ? `(${comment.likes})`
        : ""}</Button
    >
    <Button variant="primary" kind="text">
      <ReplyIcon customClass="w-3 h-3 m-0 fill-blue-600" />
      Reply {comment.replies ? `(${comment.replies?.length})` : ""}</Button
    >
    {#if comment.replies && comment.replies?.length > 0}
      <section class="pl-3">
        {#each comment.replies as reply}
          <CommentSection comment={reply} />
        {/each}
      </section>
    {/if}
  </tem>
</CommentSection>
