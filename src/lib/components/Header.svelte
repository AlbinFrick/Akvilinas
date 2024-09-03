<script>
	import { cn } from '$lib/utils';
	import { buttonVariants } from './ui/button';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '$lib/components/ui/button';

	const links = [
		{ name: 'Sortiment', href: '/sortiment' },
		{ name: 'Tematårta', href: '/tema' },
		{ name: 'Bildgalleri', href: '/galleri' },
		{ name: 'Om Akvilinas', href: '/om-akvilinas' }
	];
</script>

<header class="flex h-16 w-full items-center justify-between px-4 py-6 md:px-8">
	<a href="/">
		<img src="/logo.png" alt="Akvilinas fika" class="max-h-11 rounded-xl" />
	</a>
	<nav>
		<ul class="hidden gap-6 md:flex">
			{#each links as link}
				<li>
					<a href={link.href} class={cn(buttonVariants({ variant: 'link' }), 'text-xl')}
						>{link.name}</a
					>
				</li>
			{/each}
		</ul>
	</nav>

	<div class="md:hidden">
		<Sheet.Root>
			<Sheet.Trigger asChild let:builder>
				<Button builders={[builder]} variant="ghost" class="flex flex-col gap-1.5">
					<span class="h-[1.5px] w-8 bg-black" />
					<span class="h-[1.5px] w-8 bg-black" />
					<span class="h-[1.5px] w-8 bg-black" />
				</Button>
			</Sheet.Trigger>
			<Sheet.Content side="right">
				<nav class="mt-6">
					<ul class="flex flex-col gap-3">
						<li>
							<Sheet.Close>
								<a href="/" class={cn(buttonVariants({ variant: 'link' }), 'text-xl')}>Hem</a>
							</Sheet.Close>
						</li>
						{#each links as link}
							<li>
								<Sheet.Close>
									<a href={link.href} class={cn(buttonVariants({ variant: 'link' }), 'text-xl')}
										>{link.name}</a
									>
								</Sheet.Close>
							</li>
						{/each}
					</ul>
				</nav>
			</Sheet.Content>
		</Sheet.Root>
	</div>
</header>
