<script lang="ts">
	import { urlFor } from '$lib/sanity';
	import type { Product } from '../../types/product';
	import Text from './Text.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
  import * as Sheet from '$lib/components/ui/sheet';
	import ProductCard from './ProductCard.svelte';
  import { mediaQuery } from "svelte-legos";
	import { XIcon } from 'lucide-svelte';

	export let product: Product;

	function formatContents(array: string[]) {
		return array.map((item) => item.trim()).join(', ');
	}


  const isDesktop = mediaQuery("(min-width: 768px)");
</script>

{#if $isDesktop}
<Dialog.Root>
	<Dialog.Trigger>
		<ProductCard {product} />
	</Dialog.Trigger>
	<Dialog.Content
		class=" rounded-xl max-h-[calc(100vh-6rem)] grid-cols-[3fr_2fr]  max-w-4xl  prose prose-h2:font-playfair prose-p:mt-2 gap-x-6 prose-p:mb-3  prose-h2:mt-0 prose-h2:mb-0 prose-h3:mt-0 prose-h3:mb-0 prose-h3:font-playfair"
	>
		<div>
			<h2 class="sticky bg-background top-0 pt-4 text-4xl pb-3">{product.name}</h2>
			<Text>{product.description}</Text>
			<h3 class="text-lg">Pris:</h3>
			<Text class="text-2xl font-bold">
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
			class="rounded-xl mt-4 w-full aspect-[4/3] object-cover"
			src={urlFor(product.image).url()}
			alt={product.name}
		/>
	</Dialog.Content>
</Dialog.Root>
{:else}
<Sheet.Root>
  <Sheet.Trigger>      
      <ProductCard {product} />
  </Sheet.Trigger>
  <Sheet.Content side='bottom' class='translate-y-0 max-w-full max-h-[85dvh] pt-0 px-4 pb-4 overflow-y-auto rounded-t-xl overflow-auto grid  grid-cols-1 prose prose-h2:font-playfair prose-p:mt-2 prose-p:mb-3 prose-h2:mt-0 prose-h2:mb-0 prose-h3:mt-0 prose-h3:mb-0 prose-h3:font-playfair [&>button]:hidden'>
   <div>
      <div class='flex justify-between items-start sticky bg-background top-0 pt-4 pb-3'>
			  <h2 class="text-4xl">{product.name}</h2>
        <Sheet.Close> <XIcon class='h-6 w-6'/></Sheet.Close>
      </div>
			<Text>{product.description}</Text>
			<h3 class="text-lg">Pris:</h3>
			<Text class="text-2xl font-bold">
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
			class="rounded-xl mt-4 w-full aspect-[4/3] object-cover"
			src={urlFor(product.image).url()}
			alt={product.name}
		/>

  </Sheet.Content>
</Sheet.Root>
{/if}
