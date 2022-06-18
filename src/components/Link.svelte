<script>
  export let link;
</script>

<a
  class="underline underline-offset-2 text-black hover:text-black/75 hover:underline-offset-4 "
  href={link}
>
  <slot />
</a>
