<script lang="ts">
  import { urlFor } from '$lib/sanity';
  import type { Product } from '../../types/product';
	import { Badge } from './ui/badge';
	import  Text from './Text.svelte';
  import * as Dialog from "$lib/components/ui/dialog";
  import { capitalizeFirstLetter } from '$lib/utils'; 

  export let product: Product;


  function formatContents(array: string[] ){
    return array.map(item => item.trim()).join(', ')
  }

</script>
<Dialog.Root>
<Dialog.Trigger>
<div
  class="flex shadow flex-col justify-between gap-6 bg-white rounded-2xl pb-6 h-full"
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
            <Badge variant="secondary" >{capitalizeFirstLetter(allergen)}</Badge>
          {/each}
        </div>
      {/if}
    </div>
    <div class="px-6 text-start ">
      <h2>{product.name}</h2>
      <Text class="pb-3 pt-2 text-2xl" >
        {#each product.price as price, index}
          <span class="font-bold"
            >{price}
            {#if index !== product.price.length - 1}
              {' - '}
            {/if}</span
          >
        {/each}
        kr
      </Text>
      <Text class='line-clamp-3'>{product.description}</Text>
    </div>
  </div>
</div>
</Dialog.Trigger>
  <Dialog.Content class='grid grid-cols-[3fr_2fr] max-w-4xl prose prose-h2:font-playfair prose-h2:mt-0 prose-h2:mb-0 prose-h3:mt-0 prose-h3:mb-0 prose-h3:font-playfair '>
    <div>
      <h2 class="text-4xl pb-3">{product.name}</h2>
      <Text class='line-clamp-3'>{product.description}</Text>
      <h3 class="text-lg">Pris:</h3>
      <Text class='text-2xl font-bold'>
        {#each product.price as price, index}
          <span class="font-bold"
            >{price}
            {#if index !== product.price.length - 1}
              {' - '}
            {/if}</span
          >
        {/each}
        kr
      </Text>

      {#if product.contents}
        <h3 class="text-lg">Innehåll:</h3>	
        <Text>{formatContents(product.contents)}</Text>
      {/if}
      </div>
      <img
      class="rounded-xl w-full aspect-video md:aspect-[4/3] object-cover"
      src={urlFor(product.image).url()}
      alt={product.name}
    />
  </Dialog.Content>
</Dialog.Root>