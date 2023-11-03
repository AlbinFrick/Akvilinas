<script>
	import { Button } from '$lib/components/ui/button';
	import { urlFor } from '$lib/sanity';

	/** @type {import('./$types').PageData} */
	export let data;
	const { products } = data;
	console.log(products);
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
		<div class="flex shadow flex-col justify-between gap-6 bg-white rounded-2xl pb-6">
			<div class="flex flex-col gap-4">
				<img
					class="rounded-t-xl aspect-[4/3] object-cover"
					src={urlFor(product.image).url()}
					alt={product.name}
				/>
				<div class="px-6">
					<h2>{product.name}</h2>
					<p>
						{#each product.price as price, index}
							<span class="font-bold"
								>{price}
								{#if index !== product.price.length - 1}
									{' - '}
								{/if}</span
							>
						{/each}
						kr
					</p>
					<p>{product.description}</p>
				</div>
			</div>
			<Button variant="outline" class="w-min self-center justify-self-end mt-2">Lägg till</Button>
		</div>
	{/each}
</section>
