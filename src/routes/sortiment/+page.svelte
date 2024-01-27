<script>
	import Product from '$lib/components/Product.svelte';
	import Text from '$lib/components/Text.svelte';
	import { buttonVariants } from '$lib/components/ui/button';
	import { Contact } from '$lib/data';
	import { cn } from '$lib/utils';
	import { FacebookIcon, InstagramIcon } from 'lucide-svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const { products } = data;
</script>

<section class="px-6 prose-h1:mb-3">
	<h1 class="mt-8">Sortiment</h1>
	<p class="max-w-prose">
		Här finner du tårtor som finns i mitt sortiment. Ibland har jag tårtor på lager som du kan
		beställa och hämta dagen efter. Andra tårtor som exempelvis tematårtor behöver beställas två
		veckor innan hämtning. Skicka en beställningsförfrågan till min mail, sms eller i sociala
		medier.
	</p>
	<div class="flex items-center gap-4">
		<a href={`mailto:${Contact.Email}`} class={cn(buttonVariants({ size: 'sm' }), ' no-underline')}>
			{Contact.Email}
		</a>
		<a
			href={`tel:${Contact.Phone}`}
			class={cn(buttonVariants({ size: 'sm', variant: 'secondary' }), 'no-underline')}
		>
			{Contact.Phone}
		</a>
		<a href="https://www.facebook.com/akvilinasfika" target="_blank">
			<FacebookIcon />
		</a>
		<a href="https://www.instagram.com/akvilinasfika" target="_blank">
			<InstagramIcon />
		</a>
	</div>
</section>

<section
	class="grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] gap-6 p-6 prose-h2:my-0 prose-p:my-0 prose-img:my-0"
>
	{#each products as product}
		<Product {product} />
	{/each}
</section>
