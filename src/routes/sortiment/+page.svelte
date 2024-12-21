<script>
	import Product from '$lib/components/Product.svelte';
	import UnavailableProduct from '$lib/components/UnavailableProduct.svelte';
	import { buttonVariants } from '$lib/components/ui/button';
	import { Contact } from '$lib/data';
	import { cn } from '$lib/utils';
	import { FacebookIcon, InstagramIcon } from 'lucide-svelte';

	/**
	 * @typedef {Object} Props
	 * @property {import('./$types').PageData} data
	 */

	/** @type {Props} */
	let { data } = $props();
	const { products } = data;
	const unavailableProducts = products.filter((product) => !product.available);
	const availableProducts = products.filter((product) => product.available);
</script>

<section class="mx-auto max-w-default-content px-6 prose-h1:mb-3">
	<h1 class="mt-8">Sortiment</h1>
	<p class="max-w-prose">
		Skicka in din bokningsförfrågan senast två veckor innan önskat datum att hämta. Det gör du
		enklast via mail, sms eller i sociala medier.
	</p>
	<div class="flex flex-col gap-4 md:flex-row md:items-center">
		<a href={Contact.emailLink} class={cn(buttonVariants({ size: 'sm' }), ' no-underline')}>
			{Contact.email}
		</a>
		<a
			href={`tel:${Contact.phone}`}
			class={cn(buttonVariants({ size: 'sm', variant: 'secondary' }), 'no-underline')}
		>
			{Contact.phone}
		</a>
		<div class="mx-auto flex gap-6 md:mx-0">
			<a href="https://www.facebook.com/akvilinasfika" target="_blank">
				<FacebookIcon />
			</a>
			<a href="https://www.instagram.com/akvilinasfika" target="_blank">
				<InstagramIcon />
			</a>
		</div>
	</div>
</section>

<section
	class="mx-auto grid max-w-default-content grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] gap-6 p-6 prose-h2:my-0 prose-p:my-0 prose-img:my-0"
>
	{#if availableProducts.length > 0}
		{#each availableProducts as availableProduct}
			{#if availableProduct.name === 'Tematårta'}
				<a href="/tema">
					<Product product={availableProduct} />
				</a>
			{:else}
				<Product product={availableProduct} />
			{/if}
		{/each}
	{/if}
	{#if unavailableProducts.length > 0}
		{#each unavailableProducts as unavailableProduct}
			<UnavailableProduct product={unavailableProduct} />
		{/each}
	{/if}
</section>
