<script>
	import { urlFor } from '$lib/sanity';

	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data.gallery);
</script>

<div class="flex flex-col gap-4 lg:gap-9">
	{#each data.gallery as gallery}
		<div class="flex flex-col lg:flex-row gap-4 lg:gap-9">
			<div class="flex flex-col-reverse lg:flex-col gap-4 lg:gap-9 flex-1">
				<div class="flex gap-4 lg:gap-9">
					<div class="rounded-xl overflow-hidden w-full h-72 lg:h-[450px]">
						<img
							class="object-cover h-full w-full"
							src={urlFor(gallery.portraitImageLeft).height(450).width(288).url()}
							alt="images"
						/>
					</div>
					<div class="rounded-xl overflow-hidden w-full h-72 lg:h-[450px]">
						<img
							class="object-cover h-full w-full"
							src={urlFor(gallery.portraitImageRight).height(450).width(288).url()}
							alt="images"
						/>
					</div>
				</div>
				<div class="rounded-xl overflow-hidden w-full h-72 lg:h-[622px]">
					<img
						class="object-cover h-full w-full"
						src={urlFor(gallery.squareImage).height(622).width(622).url()}
						alt="images"
					/>
				</div>
			</div>
			<div class="flex flex-col gap-4 lg:gap-9 flex-1">
				<div class="rounded-xl overflow-hidden w-full h-96 lg:h-[764px]">
					<img
						class="object-cover h-full w-full"
						src={urlFor(gallery.bigPortraitImage).height(622).width(764).url()}
						alt="images"
					/>
				</div>

				<div class="rounded-xl overflow-hidden w-full h-52 lg:h-[308px]">
					<img
						class="object-cover h-full w-full"
						src={urlFor(gallery.landscapeImage).width(622).height(308).url()}
						alt="images"
					/>
				</div>
			</div>
		</div>
	{/each}
</div>
