<script lang="ts">
  import ImageGrid from '$lib/components/ImageGrid.svelte';
  import { buttonVariants } from '$lib/components/ui/button';
  import { Contact } from '$lib/data';
  import { cn } from '$lib/utils';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  let isVisible = false;
  onMount(() => {
    isVisible = true;
  });
</script>

<div class="mx-auto mt-6 max-w-7xl lg:mt-11">
  <div
    class="mx-auto max-w-2xl gap-x-14 px-6 lg:mx-0 lg:flex lg:max-w-none lg:px-9"
  >
    {#if isVisible}
      <div
        class="mb-9 mt-4 w-full max-w-xl prose-h1:mb-2 lg:mt-32 lg:shrink-0 xl:max-w-2xl"
        in:fly={{ x: -200, duration: 1000 }}
      >
        <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Akvilinas fika
        </h1>
        <p
          class="relative mb-3 mt-6 font-arapey text-lg leading-8 text-gray-600 sm:max-w-md md:text-2xl lg:max-w-none"
        >
          Välkommen till Akvilinas Fika! Vi skräddarsyr tårtor efter dina
          önskemål till livets alla firanden! Akvilinas Fika är en tårtstudio
          belägen i centrala Lycksele, endast avsedd för avhämtning eller
          leverans.
        </p>
        <p
          class="relative mt-3 font-arapey text-lg leading-8 text-gray-600 sm:max-w-md md:text-2xl lg:max-w-none"
        >
          Ta en titt i bildgalleriet för lite inspiration - välkommen med din
          beställning!
        </p>

        <div class="relative z-10 w-full text-center md:text-start">
          <a
            href={`mailto:${Contact.email}`}
            class={cn(buttonVariants({ size: 'lg' }), 'text-xl no-underline')}
          >{Contact.email}</a>
        </div>
      </div>
    {/if}

    <ImageGrid />
  </div>
</div>
