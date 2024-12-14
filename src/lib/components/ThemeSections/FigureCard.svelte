<script lang="ts">
  import { getSanityImageURL } from '$lib/sanity';

  let { figure } = $props();
</script>

<div
  class="overflow-clip rounded-xl max-w-md bg-white basis-full mx-auto md:mx-0"
>
  <img
    class="w-full h-48 md:h-72 object-cover m-0"
    src={getSanityImageURL(figure.image).url()}
    alt={figure.image.alt}
  />
  <div class="p-4 sm:p-8">
    <h5 class="text-2xl font-bold">{figure.title}</h5>
    <p class="text-lg">{figure.description}</p>
    {#if figure.price}
      <p class="m-0 mb-2 text-center text-2xl font-bold md:text-3xl">
        {figure.price}<span class="text-base">kr</span>
      </p>
    {:else}
      <p class="text-center text-lg italic">Pris utifrån överenskommelse</p>
    {/if}
  </div>
</div>
