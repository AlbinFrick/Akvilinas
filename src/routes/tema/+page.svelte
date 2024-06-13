<script lang="ts">
	import Size from '$lib/components/ThemeSections/Size.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { urlFor } from '$lib/sanity';
	import { type ThemePage } from '../../types/themePage';

	/** @type {import('./$types').PageData} */
	export let data;
	const { page } = data;
	const themePage = page[0] as ThemePage;
</script>

<div class="px-6">
	<section id='hero' class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-20">
		<div class="">
			<h1 class="mb-4 text-5xl text-gray-800">{themePage.title}</h1>
			<p class="text-lg text-gray-700">{themePage.description}</p>
		</div>
		<img
			class="mt-0 aspect-square rounded-3xl object-cover object-top"
			src={urlFor(themePage.image).url()}
			alt="nallepuh"
		/>
	</section>

	<section id='flavour' class="flex flex-col items-center">
		<h2 class="mb-4 text-4xl text-gray-700">Smakmeny</h2>
		<ul class="list-none p-0">
			{#each themePage.tasteMenu as flavour}
				<li class="text-center">
					<h3>{flavour.title}</h3>
					<p>{flavour.smaker}</p>
				</li>
			{/each}
		</ul>
	</section>

  <Size />

	<section class="mt-20 grid place-items-center">
		<Button size="lg">Beställ</Button>
	</section>
</div>
