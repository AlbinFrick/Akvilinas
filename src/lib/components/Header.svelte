<script>
	import { cn } from '$lib/utils';
	import { buttonVariants } from './ui/button';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '$lib/components/ui/button';

	const links = [
		{ name: 'Hem', href: '/' },
		{ name: 'Kontakt', href: '/kontakt' },
		{ name: 'Om Akvilinas', href: '/om-akvilinas' },
		{ name: 'Bildgalleri', href: '/galleri' },
		{ name: 'Sortiment', href: '/sortiment' }
	];
</script>

<header class="w-full flex items-center px-4 md:px-8 py-6 h-16 justify-between">
	<a href="/">
		<img src="/logo.png" alt="Akvilinas fika" class="rounded-xl max-h-11" />
	</a>
	<nav>
		<ul class="gap-6 hidden md:flex">
			{#each links as link}
				<li>
					<a href={link.href} class={cn(buttonVariants({ variant: 'link' }), 'text-xl')}
						>{link.name}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
	<Sheet.Root>
		<Sheet.Trigger asChild let:builder>
			<Button builders={[builder]} variant="ghost" class="flex flex-col gap-1.5 md:hidden">
				<span class="w-8 h-[1.5px] bg-black" />
				<span class="w-8 h-[1.5px] bg-black" />
				<span class="w-8 h-[1.5px] bg-black" />
			</Button>
		</Sheet.Trigger>
		<Sheet.Content side="right">
			<nav>
				<ul class="flex flex-col">
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
</header>
