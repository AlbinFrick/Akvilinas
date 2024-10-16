<script lang="ts">
	import { getSanityImageURL } from '$lib/sanity';
	import type { Figure } from '../../../types/themePage';

	export let figure: Figure;
</script>

<div class="overflow-clip rounded-xl bg-white">
	<div class="grid grid-cols-2 *:m-0 *:aspect-square *:h-full *:w-full *:object-cover md:h-48">
		{#each figure.images as image}
			<img src={getSanityImageURL(image).url()} alt={image.alt} />
		{/each}
	</div>
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
