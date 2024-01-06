<script>
	import { urlFor } from '$lib/sanity';
	import { Lightbox } from 'svelte-lightbox';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="flex flex-col gap-4 lg:gap-9 not-prose my-4 md:my-12 px-4">
	{#each data.gallery as gallery}
		<div class="flex flex-col lg:flex-row gap-4 lg:gap-9">
			<div
				class="grid grid-cols-1 grid-rows-[288px_288px] md:grid-rows-[450px_622px] lg:flex-col gap-4 lg:gap-9 flex-1"
			>
				<div class="flex gap-4 lg:gap-9 w-full justify-center">
					<Lightbox transitionDuration={150}>
						<img
							slot="thumbnail"
							class="object-cover rounded-xl w-full"
							src={urlFor(gallery.portraitImageLeft).height(450).width(288).url()}
							alt="images"
						/>
						<img
							class="object-cover rounded-xl px-4"
							src={urlFor(gallery.portraitImageLeft).url()}
							alt="images"
						/>
					</Lightbox>
					<Lightbox transitionDuration={150}>
						<img
							slot="thumbnail"
							class="object-cover rounded-xl w-full"
							src={urlFor(gallery.portraitImageRight).height(450).width(288).url()}
							alt="images"
						/>
						<img
							class="object-cover rounded-xl px-4"
							src={urlFor(gallery.portraitImageRight).url()}
							alt="images"
						/>
					</Lightbox>
				</div>
				<Lightbox transitionDuration={150}>
					<img
						slot="thumbnail"
						class="object-cover rounded-xl w-full"
						src={urlFor(gallery.squareImage).height(622).width(622).url()}
						alt="images"
					/>
					<img
						class="object-cover rounded-xl px-4"
						src={urlFor(gallery.squareImage).url()}
						alt="images"
					/>
				</Lightbox>
			</div>
			<div
				class="grid grid-cols-1 grid-rows-[384px_208px] md:grid-rows-[764px_308px] gap-4 lg:gap-9 flex-1"
			>
				<Lightbox transitionDuration={150}>
					<img
						slot="thumbnail"
						class="object-cover rounded-xl w-full"
						src={urlFor(gallery.bigPortraitImage).height(622).width(764).url()}
						alt="images"
					/>
					<img
						class="object-cover rounded-xl px-4"
						src={urlFor(gallery.bigPortraitImage).url()}
						alt="images"
					/>
				</Lightbox>
				<Lightbox transitionDuration={150}>
					<img
						slot="thumbnail"
						class="object-cover rounded-xl w-full"
						src={urlFor(gallery.landscapeImage).width(622).height(308).url()}
						alt="images"
					/>
					<img
						class="object-cover rounded-xl px-4"
						src={urlFor(gallery.landscapeImage).url()}
						alt="images"
					/>
				</Lightbox>
			</div>
		</div>
	{/each}
</div>
