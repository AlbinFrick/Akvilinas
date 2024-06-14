<script>
	import EightPiece from './EightPiece.svelte';
	import FifteenPiece from './FifteenPiece.svelte';
	import TenPiece from './TenPiece.svelte';
	import TwelvePiece from './TwelvePiece.svelte';
</script>

<section id="size">
	<h2>Storlekar</h2>
	<p>
		Tema tårtor kommer i två storlekar 8 eller 12 bitar. Detta är ett ungefärligt mått på hur stora
		tårtorna är. Tar man mindre bitar går det även att göra tårtorna till 10, respektive 15 bitar.
		Se illustrationen nedan. För det vi kallar 8 bitars är baspriset 640 kr, med 12 bitar är
		baspriset 960 kr.
	</p>
	<div class="mt-16 grid grid-cols-2 justify-items-center gap-y-6">
		<div class="flex flex-col items-center gap-2">
			<div
				class=" grid size-24 place-items-center rounded-full border-2 border-primary text-3xl font-bold"
			>
				<span>8</span>
			</div>
			<p class="m-0 text-3xl font-medium">640kr</p>
		</div>

		<div class="flex flex-col items-center gap-2">
			<div
				class="m-0 grid size-24 place-items-center rounded-full border-2 border-primary text-5xl font-bold"
			>
				<span class="-mt-3">12</span>
			</div>
			<p class="m-0 text-3xl font-medium">960kr</p>
		</div>

		<div class="flex flex-col gap-6 sm:flex-row">
			<EightPiece />
			<TenPiece />
		</div>
		<div class="flex flex-col gap-6 sm:flex-row">
			<TwelvePiece />
			<FifteenPiece size="120" />
		</div>
	</div>
</section>
