<script>
	import FigureCard from './FigureCard.svelte';
</script>

<section id="decoration" class="space-y-6 border border-x-0 border-y-2 pb-10">
	<h2>Dekoration</h2>
	<div class="flex flex-col justify-between overflow-clip rounded-xl md:flex-row">
		<div class="bg-white p-4 md:p-6">
			<p class="m-0">
				På alla tematårtor finns det något jag kallar basdekorationer. Det är dekorationer som
				fyller ut tårtans dekoration och binder ihop hela kalaset för att det ska bli en fröjd för
				ögat.
			</p>
			<p>Det är till exempel</p>
			<ul>
				<li>blommor</li>
				<li>bin</li>
				<li>häst</li>
			</ul>
			<p>Dessa dekorationer har ingen extra kostnad.</p>
		</div>
		<div class="grid grid-cols-2 *:m-0 *:aspect-square *:object-cover md:w-2/5 md:*:aspect-[3/4]">
			<img src="chocolate.jpg" alt="" />
			<img src="hooja.jpeg" alt="" />
			<img src="lemon.jpg" alt="" />
			<img src="nalle.jpg" alt="" />
		</div>
	</div>
	<h3>Tillägg</h3>
	<p>
		Man kan välja att lägga till extra dekorationer på sin tårta för att få sin tårta extra
		skräddarsydd efter dina preferenser.
	</p>
	<h4>Figurer</h4>
	<p>Figurer är det som är pricken är över i:et på mina tema tårtor</p>
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
</section>
