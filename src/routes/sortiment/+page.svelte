<script>
	import Product from '$lib/components/Product.svelte';
	import Text from '$lib/components/Text.svelte';
	import { Contact } from '$lib/data';

	/** @type {import('./$types').PageData} */
	export let data;
	const { products } = data;
</script>

<section class="px-6 prose-h1:mb-3">
	<h1 class="mt-8">Mitt Sortiment</h1>
	<p class="max-w-prose">
		Jag har ett standard sortiment som man alltid kan beställa. Dessa är det som finns här under.
		Vill du ha något lite extra kan du göra en special beställning i formuläret längst ner på sidan.
		Funderar du över något är det bara att kontaka mig!
	</p>
</section>

<section
	class="grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] p-6 gap-6 prose-h2:my-0 prose-img:my-0 prose-p:my-0"
>
	{#each products as product}
		<Product {product} />
	{/each}
</section>
<section class="px-6 pb-6">
	<h2 class="mt-8">Göra en beställning</h2>
	<Text class="max-w-3xl"
		>För att göra en besätllning så är det bara att ta kontakt med mig via epost. Skriv gärna vilken
		tårta du vill beställa i ämnesraden i mailet. Om du är intresserad av att göra en
		specialbeställning skriv då "Speciallbeställning" som ämnes rad. Är det något annat du funderar
		över gå det också bra att skriva på mail eller slå en signal</Text
	>
	<div class="text-xl space-x-6">
		<a href={`mailto:${Contact.Email}`}>{Contact.Email}</a>
		<a href={`tel:${Contact.Phone}`}>{Contact.Phone}</a>
	</div>
</section>
