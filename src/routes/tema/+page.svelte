<script lang="ts">
	import Size from '$lib/components/ThemeSections/Size.svelte';
	import Decoration from '$lib/components/ThemeSections/Decoration.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { urlFor } from '$lib/sanity';
	import { type ThemePage } from '../../types/themePage';
	import Flavour from '$lib/components/ThemeSections/Flavour.svelte';
	import Section from '$lib/components/ThemeSections/Section.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const { page } = data;
	const themePage = page[0] as ThemePage;
</script>

<Section id="hero" class="grid grid-cols-1 gap-6 bg-red-100 md:grid-cols-2 md:gap-20 ">
	<div class="">
		<h1 class="mb-4 text-5xl text-gray-800">{themePage.title}</h1>
		<p class="text-lg text-gray-700">{themePage.description}</p>
	</div>
	<img
		class="mb-0 mt-0 aspect-square max-h-full rounded-3xl object-cover object-top"
		src={urlFor(themePage.image).url()}
		alt="nallepuh"
	/>
</Section>

<Size />
<Decoration />
<Flavour {themePage} />

<section class="mt-20 grid place-items-center">
	<Button size="lg">Beställ</Button>
</section>

<style>
	:global(body) {
		background: white;
	}
</style>
