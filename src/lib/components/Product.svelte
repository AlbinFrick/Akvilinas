<script lang="ts">
	import { getSanityImageURL } from '$lib/sanity';
	import Text from './Text.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Sheet from '$lib/components/ui/sheet';
	import ProductCard from './ProductCard.svelte';
	import { XIcon } from 'lucide-svelte';
	import type { Product } from '../../types/sanity.types';
	import { MediaQuery } from 'svelte/reactivity';

	interface Props {
		product: Product;
	}

	let { product }: Props = $props();

	function formatContents(array: string[]) {
		return array.map((item) => item.trim()).join(', ');
	}

	const isDesktop = new MediaQuery('min-width: 768px');
</script>

{#if !product.available}
	<div class="relative flex">
		<p
			class="absolute left-1/2 top-1/3 z-10 inline -translate-x-1/2 -translate-y-1/2 -rotate-[20deg] whitespace-nowrap rounded-md bg-primary px-3 py-2 text-xl text-primary-foreground"
		>
			Går ej att beställa för tillfället
		</p>
		<div class="flex-1 opacity-40">
			<ProductCard {product} />
		</div>
	</div>
{:else if isDesktop.current}
	<Dialog.Root>
		<Dialog.Trigger>
			<ProductCard {product} />
		</Dialog.Trigger>
		<Dialog.Content
			class="prose max-h-[calc(100vh-6rem)] max-w-4xl grid-cols-[3fr_2fr] gap-x-6 rounded-xl prose-h2:mb-0 prose-h2:mt-0 prose-h2:font-playfair prose-h3:mb-0 prose-h3:mt-0 prose-h3:font-playfair prose-p:mb-3 prose-p:mt-2"
		>
			<div>
				<h2 class="sticky top-0 bg-background pb-3 pt-4 text-4xl">
					{product.name}
				</h2>
				<Text>{product.description}</Text>
				<h3 class="text-lg">Pris:</h3>
				{#if product.price}
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
				{/if}
				{#if product.contents}
					<h3 class="text-lg">Innehåll:</h3>
					<Text>{formatContents(product.contents)}</Text>
				{/if}
			</div>
			{#if product.image}
				<img
					class="mt-4 aspect-[4/3] w-full rounded-xl object-cover"
					src={getSanityImageURL(product.image).url()}
					alt={product.name}
					loading="lazy"
				/>
			{/if}
		</Dialog.Content>
	</Dialog.Root>
{:else}
	<Sheet.Root>
		<Sheet.Trigger>
			<ProductCard {product} />
		</Sheet.Trigger>
		<Sheet.Content
			side="bottom"
			class="prose grid max-h-[85dvh] max-w-full translate-y-0 grid-cols-1 overflow-auto overflow-y-auto rounded-t-xl px-4 pb-4 pt-0 prose-h2:mb-0 prose-h2:mt-0 prose-h2:font-playfair prose-h3:mb-0 prose-h3:mt-0 prose-h3:font-playfair prose-p:mb-3 prose-p:mt-2 [&>button]:hidden"
		>
			<div>
				<div class="sticky top-0 flex items-start justify-between bg-background pb-3 pt-4">
					<h2 class="text-4xl">{product.name}</h2>
					<Sheet.Close><XIcon class="h-6 w-6" /></Sheet.Close>
				</div>
				<Text>{product.description}</Text>
				<h3 class="text-lg">Pris:</h3>
				{#if product.price}
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
				{/if}
				{#if product.contents}
					<h3 class="text-lg">Innehåll:</h3>
					<Text>{formatContents(product.contents)}</Text>
				{/if}
			</div>
			{#if product.image}
				<img
					class="mt-4 aspect-[4/3] w-full rounded-xl object-cover"
					src={getSanityImageURL(product.image).url()}
					alt={product.name}
				/>
			{/if}
		</Sheet.Content>
	</Sheet.Root>
{/if}
