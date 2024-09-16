<script lang="ts">
	import Size from '$lib/components/ThemeSections/Size.svelte';
	import Decoration from '$lib/components/ThemeSections/Decoration.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { getSanityImageURL } from '$lib/sanity';
	import { type ThemePage } from '../../types/themePage';
	import Flavour from '$lib/components/ThemeSections/Flavour.svelte';
	import Section from '$lib/components/ThemeSections/Section.svelte';
	import { Contact } from '$lib/data';
	import { buttonVariants } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import TiArrowRight from 'svelte-icons/ti/TiArrowRight.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const { page } = data;
	const themePage = page[0] as ThemePage;
	const size = themePage.size;
	const decoration = themePage.decoration;
	const flavour = themePage.flavour;
</script>

<div class="bg-white pb-8">
	<Section
		id="hero"
		divider="wave"
		class="grid grid-cols-1 gap-6 bg-red-100 md:grid-cols-2 md:gap-x-20 "
	>
		<div>
			<h1 class="mb-4 text-5xl text-gray-700">{themePage.title}</h1>
			<p class="text-lg text-gray-600">{themePage.description}</p>
		</div>
		<img
			class="mx-auto mb-0 mt-0 aspect-square max-h-full max-w-[70%] rounded-3xl object-cover object-top md:max-w-full"
			src={getSanityImageURL(themePage.image).url()}
			alt="nallepuh"
		/>
		<div class="flex justify-center md:col-span-2">
			<Tooltip.Root>
				<Tooltip.Trigger>
					<a
						aria-label="Beställ via e-post"
						href={Contact.emailLink}
						class={cn(buttonVariants({ size: 'lg' }), 'text-xl no-underline')}
					>
						Beställ
						<span class="size-8">
							<TiArrowRight />
						</span>
					</a>
				</Tooltip.Trigger>
				<Tooltip.Content>
					<p>Beställ via e-post</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</div>
	</Section>

	<Size {size} />
	<Decoration {decoration} />
	<Flavour {themePage} />

	<section class="mt-20 grid place-items-center">
		<Tooltip.Root>
			<Tooltip.Trigger>
				<a
					aria-label="Beställ via e-post"
					href={Contact.emailLink}
					class={cn(buttonVariants({ size: 'lg' }), 'text-xl no-underline')}
				>
					Beställ
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>Beställ via e-post</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</section>
</div>

<style>
	:global(body) {
		background: white;
	}
</style>
