<script lang="ts">
	import Size from '$lib/components/ThemeSections/Size.svelte';
	import Decoration from '$lib/components/ThemeSections/Decoration.svelte';
	import { getSanityImageURL } from '$lib/sanity';
	import Flavour from '$lib/components/ThemeSections/Flavour.svelte';
	import Section from '$lib/components/ThemeSections/Section.svelte';
	import { Contact } from '$lib/data';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { MoveRight } from 'lucide-svelte';
	import PreganteMessage from '$lib/components/PreganteMessage.svelte';
	import type { ThemePage } from '../../types/sanity.types';
	import toast from 'svelte-french-toast';

	interface Props {
		data: import('./$types').PageData;
	}

	let { data }: Props = $props();
	const { page } = data;
	const themePage = page[0] as ThemePage;
	const size = themePage.size;
	const decoration = themePage.decoration;
	const flavour = themePage.tasteMenu;
</script>

<div class="bg-white pb-8">
	<Section id="hero" divider="wave" class="relative w-full bg-red-100">
		<div class="mx-auto grid max-w-default-content grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-20">
			<div
				class="absolute left-0 top-0 z-0 h-10 w-screen bg-gradient-to-b from-white to-red-100 md:h-14"
			></div>
			<div class="relative z-10">
				<h1 class="mb-4 text-5xl text-gray-700">{themePage.title}</h1>
				<p class="text-lg text-gray-600">{themePage.description}</p>
			</div>
			{#if themePage.image}
				<img
					class="mx-auto mb-0 mt-0 aspect-square max-h-full max-w-[70%] rounded-3xl object-cover object-top md:max-w-full"
					src={getSanityImageURL(themePage.image).url()}
					alt="nallepuh"
				/>
			{/if}
			<div class="flex justify-center md:col-span-2">
				<!-- <Tooltip.Root> -->
				<!--   <Tooltip.Trigger> -->
				<!--     <a -->
				<!--       aria-label="Beställ via e-post" -->
				<!--       href={Contact.emailLink} -->
				<!--       class={cn(buttonVariants({ size: 'lg' }), 'gap-x-2 text-xl no-underline')} -->
				<!--     > -->
				<!--       Beställ -->
				<!--       <MoveRight /> -->
				<!--     </a> -->
				<!--   </Tooltip.Trigger> -->
				<!--   <Tooltip.Content> -->
				<!--     <p>Beställ via e-post</p> -->
				<!--   </Tooltip.Content> -->
				<!-- </Tooltip.Root> -->
				<Button
					on:click={() =>
						toast(PreganteMessage, {
							style: 'max-width: 450px; padding: 16px;',
							duration: 99999999
						})}
					class="z-10 gap-x-2 text-xl"
					>Beställ
					<MoveRight />
				</Button>
			</div>
		</div>
	</Section>

	<Size {size} />
	<Decoration {decoration} />
	{#if flavour}
		<Flavour {flavour} />
	{/if}

	<section class="mx-auto mt-20 grid max-w-default-content place-items-center">
		<!-- <Tooltip.Root> -->
		<!--   <Tooltip.Trigger> -->
		<!--     <a -->
		<!--       aria-label="Beställ via e-post" -->
		<!--       href={Contact.emailLink} -->
		<!--       class={cn(buttonVariants({ size: 'lg' }), 'text-xl no-underline')} -->
		<!--     > -->
		<!--       Beställ -->
		<!--     </a> -->
		<!--   </Tooltip.Trigger> -->
		<!--   <Tooltip.Content> -->
		<!--     <p>Beställ via e-post</p> -->
		<!--   </Tooltip.Content> -->
		<!-- </Tooltip.Root> -->

		<Button
			on:click={() =>
				toast(PreganteMessage, {
					style: 'max-width: 450px; padding: 16px;',
					duration: 99999999
				})}
			size="lg"
			>Beställ
		</Button>
	</section>
</div>

<style>
	:global(body) {
		background: white;
	}
</style>
