<script lang="ts">
	import ImageGrid from '$lib/components/ImageGrid.svelte';
	import { buttonVariants } from '$lib/components/ui/button';
	import { Contact } from '$lib/data';
	import { cn } from '$lib/utils';
</script>

<div class="mx-auto max-w-7xl mt-6 lg:mt-11">
	<div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none px-6 lg:px-9">
		<div class="prose-h1:mb-2 w-full max-w-xl lg:shrink-0 xl:max-w-2xl lg:mt-32 mb-9 mt-4">
			<h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">Akvilinas fika</h1>
			<p
				class="relative font-arapey mt-6 text-lg md:text-2xl mb-3 leading-8 text-gray-600 sm:max-w-md lg:max-w-none"
			>
        Välkommen till Akvilinas Fika! Vi skräddarsyr tårtor efter dina önskemål. Du kan också välja en tårta ur vårt sortiment. Akvilinas Fika är en tårtverkstad belägen i centrala Lycksele, endast avsedd för avhämtning eller leverans.
			</p>
      			<p
				class="relative font-arapey mt-3 text-lg md:text-2xl leading-8 text-gray-600 sm:max-w-md lg:max-w-none"
			>
Ta en titt i bildgalleriet för lite inspiration - välkommen med din beställning!
			</p>

			<div class="w-full text-center md:text-start">
				<a
					href={`mailto:${Contact.Email}`}
					class={cn(buttonVariants({ size: 'lg' }), 'text-xl no-underline')}>{Contact.Email}</a
				>
			</div>
		</div>

		<ImageGrid />
	</div>
</div>
