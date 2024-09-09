<script lang="ts">
	export let title: string;
	export let description: string;
	export let price: number | undefined = undefined;
</script>

<div class="overflow-clip rounded-xl bg-white">
	<div class="grid h-44 grid-cols-2 *:m-0 *:aspect-square *:h-full *:w-full *:object-cover">
		<img src="chocolate.jpg" alt="" />
		<img src="hooja.jpeg" alt="" />
		<img src="lemon.jpg" alt="" />
		<img src="nalle.jpg" alt="" />
	</div>
	<div class="p-4 sm:p-8">
		<h5 class="text-2xl font-bold">{title}</h5>
		<p class="text-lg">{description}</p>
		{#if price}
			<p class="m-0 mb-2 text-center text-2xl font-bold md:text-3xl">
				{price}<span class="text-base">kr</span>
			</p>
		{:else}
			<p class="text-center text-lg italic">Pris utifrån överenskommelse</p>
		{/if}
	</div>
</div>
