<script lang="ts">
	import { getSanityImageURL } from '$lib/sanity';

	let { figure } = $props();
</script>

<div class="mx-auto max-w-md basis-full overflow-clip rounded-xl bg-white md:mx-0">
	<img
		class="m-0 h-48 w-full object-cover md:h-72"
		src={getSanityImageURL(figure.image).url()}
		alt={figure.image.alt}
	/>
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
