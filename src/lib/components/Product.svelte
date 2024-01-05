<script lang="ts">
  import { urlFor } from '$lib/sanity';
  import type { Product } from '../../types/product';
	import { Badge } from './ui/badge';
	import  Text from './Text.svelte';
  import * as Dialog from "$lib/components/ui/dialog";

  export let product: Product;
</script>
<Dialog.Root>
<Dialog.Trigger>
<div
  class="flex shadow flex-col justify-between gap-6 bg-white rounded-2xl pb-6"
>
  <div class="flex flex-col gap-4">
    <div class="relative">
      <img
        class="rounded-t-xl w-full aspect-video md:aspect-[4/3] object-cover"
        src={urlFor(product.image).url()}
        alt={product.name}
      />
      {#if product.allergens && product.allergens.length > 0}
        <div class="absolute right-3 bottom-3 flex gap-4">
          {#each product.allergens as allergen}
            <Badge variant="secondary" >{allergen}</Badge>
          {/each}
        </div>
      {/if}
    </div>
    <div class="px-6 prose-h3:mt-3 prose-h3:mb-1 ">
      <h2>{product.name}</h2>
      <p>
        {#each product.price as price, index}
          <span class="font-bold"
            >{price}
            {#if index !== product.price.length - 1}
              {' - '}
            {/if}</span
          >
        {/each}
        kr
      </p>
      <h3 class="text-lg">Beskrivning:</h3>	
      <Text class='line-clamp-3'>{product.description}</Text>
    </div>
  </div>
</div>

</Dialog.Trigger>
  <Dialog.Content>
      <h2>{product.name}</h2>
      <p>
        {#each product.price as price, index}
          <span class="font-bold"
            >{price}
            {#if index !== product.price.length - 1}
              {' - '}
            {/if}</span
          >
        {/each}
        kr
      </p>
      <h3 class="text-lg">Beskrivning:</h3>	
      <Text class='line-clamp-3'>{product.description}</Text>
  </Dialog.Content>
</Dialog.Root>