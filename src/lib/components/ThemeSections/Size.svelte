<script lang="ts">
  import Section from './Section.svelte';
  import type { Size } from '../../../types/themePage';
  export let size: Size;
</script>

<Section id="size" class="mx-auto max-w-default-content bg-white pt-4">
  <h2>{size.title}</h2>
  <p>
    {size.description}
  </p>
  <div class="mt-16 grid grid-cols-2 justify-items-center gap-y-6">
    <div class="flex flex-col items-center gap-2">
      <div
        class="grid size-28 place-items-center rounded-full border-2 border-primary text-3xl font-bold"
      >
        <span class="text-4xl">8</span>
      </div>
      {#if size.pricesmall}
        <p class="m-0 text-3xl font-medium">{size.pricesmall}kr</p>
      {/if}
    </div>

    <div class="flex flex-col items-center gap-2">
      <div
        class="m-0 grid size-28 place-items-center rounded-full border-2 border-primary text-5xl font-bold"
      >
        <span class="-mt-3">12</span>
      </div>
      {#if size.pricebig}
        <p class="m-0 text-3xl font-medium">{size.pricebig}kr</p>
      {/if}
    </div>
  </div>
</Section>
