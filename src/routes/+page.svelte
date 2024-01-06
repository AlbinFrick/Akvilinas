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
				class="relative font-arapey mt-6 text-lg md:text-2xl leading-8 text-gray-600 sm:max-w-md lg:max-w-none"
			>
				Välkommen till Akvilinas Fika! Här kan du beställa en tårta skräddarsydd efter dina
				önskemål. Vi bakar bland annat moussetårtor, figurtårtor och våningstårtor. Vår tårtverkstad
				finns i Lycksele med möjlighet till leverans till orter runtomkring. Välkommen med din
				beställning!
			</p>
			<div class="w-full text-center">
				 <a href={`mailto:${Contact.Email}`} class={cn(buttonVariants({variant: 'link', size:'lg'}), 'text-2xl')} >{Contact.Email}</a> 
				</div>
		</div>

		<ImageGrid />
	</div>
</div>
