<script>
	import Product from '$lib/components/Product.svelte';
import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';

	/** @type {import('./$types').PageData} */
	export let data;
	const { products } = data;
</script>

<section class="px-6 prose-h1:mb-3">
	<h1 class="mt-8">Mitt Sortiment</h1>
	<p class="max-w-prose">
		Jag har ett standard sortiment som man alltid kan betälla. Dessa är det som finns här under.
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
