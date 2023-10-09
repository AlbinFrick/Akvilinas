<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<ul>
	{#each data.movies as movie}
		<li>{movie.popularity}</li>
	{/each}
</ul>

<ul>
	{#each data.images as image}
		<li class="font-bold mt-32">
			<img src={image.poster.url} alt="film bild" />
		</li>
	{/each}
</ul>
