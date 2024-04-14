<script>
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<div class="px-6">
	<section class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-20">
		<div class="">
			<h1 class="mb-4 text-5xl text-gray-800">Tematårta</h1>
			<p class="text-lg text-gray-700">
				Här har vi lite text massa text, och text Här har vi lite text massa text, och text Här har
				vi lite text massa text, och text Här har vi lite text massa text, och text Här har vi lite
				text massa text, och text Här har vi lite text massa text, och text Här har vi lite text
				massa Här har vi lite text massa text, och text Här har vi lite text massa text, och text
				text, och text
			</p>
		</div>
		<img
			class="mt-0 aspect-square rounded-3xl object-cover object-top"
			src="nalle.jpg"
			alt="nallepuh"
		/>
	</section>

	<section class="flex flex-col items-center">
		<h2 class="mb-4 text-4xl text-gray-700">Smakmeny</h2>
		<ul class="list-none p-0">
			<li class="text-center">
				<h3>Smak 1</h3>
				<p>beskrivning av smak</p>
			</li>
			<li class="text-center">
				<h3>Smak 2</h3>
				<p>beskrivning av smak</p>
			</li>
			<li class="text-center">
				<h3>Smak 3</h3>
				<p>beskrivning av smak</p>
			</li>
		</ul>
	</section>

	<section>
		<div class="grid grid-cols-3 gap-8">
			<img src="green-nalle.jpg" class="aspect-square rounded-3xl object-cover" alt="grön nalle" />
			<img src="aqua.jpeg" class="aspect-square rounded-3xl object-cover" alt="grön nalle" />
			<img src="hooja.jpeg" class="aspect-square rounded-3xl object-cover" alt="grön nalle" />
		</div>
	</section>

	<section class="mt-20 grid place-items-center">
		<Button size="lg">Beställ</Button>
	</section>
</div>
