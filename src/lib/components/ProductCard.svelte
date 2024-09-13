<script lang="ts">
	import { Badge } from './ui/badge';
	import Text from './Text.svelte';
	import type { Product } from '../../types/product';
	import { getSanityImageURL } from '$lib/sanity';
	import { capitalizeFirstLetter } from '$lib/utils';

	export let product: Product;
</script>

<div class="flex h-full flex-col justify-between gap-6 rounded-2xl bg-white pb-6 shadow">
	<div class="flex flex-col gap-4">
		<div class="relative">
			<img
				class="aspect-video w-full rounded-t-xl object-cover md:aspect-[4/3]"
				src={getSanityImageURL(product.image).url()}
				alt={product.name}
			/>
			{#if product.allergens && product.allergens.length > 0}
				<div class="absolute bottom-3 right-3 flex gap-4">
					{#each product.allergens as allergen}
						<Badge variant="secondary">{capitalizeFirstLetter(allergen)}</Badge>
					{/each}
				</div>
			{/if}
		</div>
		<div class="px-6 text-start">
			<h2>{product.name}</h2>
			<Text class="pb-3 pt-2 text-2xl">
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
			<Text class="line-clamp-3">{product.description}</Text>
		</div>
	</div>
</div>
