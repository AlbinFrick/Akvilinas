<script lang="ts">
	import type { SanityImage } from '../../../types/sanity';
	import type { Decoration } from '../../../types/themePage';
	import FigureCard from './FigureCard.svelte';
	import Section from './Section.svelte';
	import { PortableText, type InputValue } from '@portabletext/svelte';

	export let decoration: Decoration;
	const decorationDescription = decoration.base.description as unknown as InputValue;
</script>

<Section divider="angle" id="decoration" class="space-y-6 bg-red-100">
	<h2 class="mt-0">{decoration.title}</h2>
	<div class="flex flex-col justify-between overflow-clip rounded-xl md:flex-row">
		<div>
			<PortableText value={decorationDescription} components={{}} />
		</div>
		<div
			class="mx-auto grid grid-cols-2 overflow-clip rounded-xl *:m-0 *:aspect-square *:object-cover md:w-1/2"
		>
			<img src="chocolate.jpg" alt="" />
			<img src="hooja.jpeg" alt="" />
			<img src="lemon.jpg" alt="" />
			<img src="nalle.jpg" alt="" />
		</div>
	</div>
	<h3>Figurer</h3>
	<div class="mx-auto flex max-w-5xl flex-col justify-between gap-4 md:flex-row md:gap-8">
		<FigureCard
			title="Enkel"
			description="Dessa är figurer som inte tar väldigt lång tid att göra att som inte heller nödvändigtvis behöver se ut som något i verkligheten"
			price={400}
		/>
		<FigureCard
			title="Avancerad"
			description="Dessa är figurer som inte tar väldigt lång tid att göra att som inte heller nödvändigtvis behöver se ut som något i verkligheten"
		/>
	</div>
	<div class="flex flex-col gap-4 md:flex-row">
		<div>
			<h4>Övriga dekorationer</h4>
			<p>
				Detta är dekorationer som inte ingår i basdekorationerna men ändå inte är en figur. Priset
				kommer vi överens med
			</p>
		</div>
		<div
			class="mx-auto grid grid-cols-2 overflow-clip rounded-xl *:m-0 *:aspect-square *:object-cover md:w-1/2"
		>
			<img src="chocolate.jpg" alt="" />
			<img src="hooja.jpeg" alt="" />
			<img src="lemon.jpg" alt="" />
			<img src="nalle.jpg" alt="" />
		</div>
	</div>
</Section>
