<script>
	import { urlFor } from '$lib/sanity';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="not-prose my-4 flex flex-col gap-4 px-4 md:my-12 lg:gap-9">
	{#each data.gallery as gallery}
		<div class="flex flex-col gap-4 lg:flex-row lg:gap-9">
			<div
				class="grid flex-1 grid-cols-1 grid-rows-[288px_288px] gap-4 md:grid-rows-[450px_622px] lg:flex-col lg:gap-9"
			>
				<div class="flex w-full justify-center gap-4 lg:gap-9">
					<img
						class="rounded-xl object-cover px-4"
						src={urlFor(gallery.portraitImageLeft).height(450).width(288).url()}
						alt="images"
					/>
					<img
						class="rounded-xl object-cover px-4"
						src={urlFor(gallery.portraitImageRight).height(450).width(288).url()}
						alt="images"
					/>
				</div>
				<img
					class="rounded-xl object-cover px-4"
					src={urlFor(gallery.squareImage).height(622).width(622).url()}
					alt="images"
				/>
			</div>
			<div
				class="grid flex-1 grid-cols-1 grid-rows-[384px_208px] gap-4 md:grid-rows-[764px_308px] lg:gap-9"
			>
				<img
					class="rounded-xl object-cover px-4"
					src={urlFor(gallery.bigPortraitImage).height(622).width(764).url()}
					alt="images"
				/>
				<img
					class="rounded-xl object-cover px-4"
					src={urlFor(gallery.landscapeImage).width(622).height(308).url()}
					alt="images"
				/>
			</div>
		</div>
	{/each}
</div>
