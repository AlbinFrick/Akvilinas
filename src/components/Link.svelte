<script>
  export let link;
</script>

<a
  class=" p-4 underline text-blue-400 hover:text-blue-600 visited:text-purple-800"
  href={link}
>
  <slot />
</a>
