<script lang="ts">
	import { getSanityImageURL } from '$lib/sanity';
	import type { SanityImage } from '../../../types/sanity';
	import type { Decoration } from '../../../types/themePage';
	import FigureCard from './FigureCard.svelte';
	import Section from './Section.svelte';
	import { PortableText, type InputValue } from '@portabletext/svelte';

	export let decoration: Decoration;
	const decorationDescription = decoration.base.description as unknown as InputValue;
</script>

<Section divider="angle" id="decoration" class="bg-red-100">
	<div class="mx-auto max-w-default-content space-y-6">
		<h2 class="mt-0">{decoration.title}</h2>
		<div class="flex flex-col justify-between overflow-clip rounded-xl md:flex-row">
			<div>
				<PortableText value={decorationDescription} components={{}} />
			</div>
			<div
				class="mx-auto grid grid-cols-2 overflow-clip rounded-xl *:m-0 *:aspect-square *:object-cover md:w-1/2"
			>
				{#each decoration.base.images as image}
					<img src={getSanityImageURL(image).url()} alt={image.alt} />
				{/each}
			</div>
		</div>
		<h3>Figurer</h3>
		<div class="mx-auto flex max-w-5xl flex-col justify-between gap-4 md:flex-row md:gap-8">
			{#each decoration.figures as figure}
				<FigureCard {figure} />
			{/each}
		</div>
		<div class="flex flex-col gap-4 md:flex-row">
			<div>
				<h4>Övriga dekorationer</h4>
				<p>
					Detta är dekorationer som inte ingår i basdekorationerna men ändå inte är en figur. Priset
					kommer vi överens med
				</p>
			</div>
			<div
				class="mx-auto grid grid-cols-2 overflow-clip rounded-xl *:m-0 *:aspect-square *:object-cover md:w-1/2"
			>
				{#each decoration.other.images as image}
					<img src={getSanityImageURL(image).url()} alt={image.alt} />
				{/each}
			</div>
		</div>
	</div>
</Section>
