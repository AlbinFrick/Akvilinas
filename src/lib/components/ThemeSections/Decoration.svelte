<script lang="ts">
	import { getSanityImageURL } from '$lib/sanity';
	import type { ThemePage } from '../../../types/sanity.types';
	import FigureCard from './FigureCard.svelte';
	import Section from './Section.svelte';
	import { PortableText } from '@portabletext/svelte';

	interface Props {
		decoration: ThemePage['decoration'];
	}

	let { decoration }: Props = $props();
</script>

{#if decoration}
	<Section divider="angle" id="decoration" class="bg-red-100">
		<div class="mx-auto max-w-default-content space-y-6">
			{#if decoration.title}
				<h2 class="mt-0">{decoration.title}</h2>
			{/if}
			<div
				class="flex flex-col justify-between gap-4 overflow-clip rounded-xl md:flex-row md:gap-10"
			>
				<div class="prose-p:m-0 prose-p:text-lg prose-li:text-lg">
					{#if decoration.base && decoration.base.description}
						<PortableText value={decoration.base.description} components={{}} />
					{/if}
				</div>
				{#if decoration.base && decoration.base.images}
					<div
						class="mx-auto grid grid-cols-2 overflow-clip rounded-xl *:m-0 *:aspect-square *:object-cover md:w-1/2"
					>
						{#each decoration.base.images as image}
							<img src={getSanityImageURL(image).url()} alt={image.alt} />
						{/each}
					</div>
				{/if}
			</div>
			<h3>Figurer</h3>
			<div
				class="mx-auto flex flex-col justify-center gap-6 md:flex-row md:flex-wrap lg:flex-nowrap"
			>
				{#if decoration.figures}
					{#each decoration.figures as figure}
						<FigureCard {figure} />
					{/each}
				{/if}
			</div>
		</div></Section
	>
{/if}
