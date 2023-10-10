<script>
	import { cn } from '$lib/utils';
	import { buttonVariants } from './ui/button';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '$lib/components/ui/button';
</script>

<header class="w-full flex items-center px-4 md:px-8 py-6 h-16 justify-between">
	<a href="/">
		<img src="/logo.png" alt="Akvilinas fika" class="rounded-xl max-h-11" />
	</a>
	<nav>
		<ul class="gap-6 hidden md:flex">
			<li>
				<a href="/" class={cn(buttonVariants({ variant: 'link' }), 'text-xl')}>Hem</a>
			</li>

			<li>
				<a href="/kontakt" class={cn(buttonVariants({ variant: 'link' }), 'text-xl')}>Kontakt</a>
			</li>
			<li>
				<a href="/om-akvilinas" class={cn(buttonVariants({ variant: 'link' }), 'text-xl')}
					>Om Akvilinas</a
				>
			</li>
			<li>
				<a href="/galleri" class={cn(buttonVariants({ variant: 'link' }), 'text-xl ')}
					>Bildgalleri</a
				>
			</li>
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
					<li>
						<Sheet.Close>
							<a href="/" class={cn(buttonVariants({ variant: 'link' }), 'text-xl')}>Hem</a>
						</Sheet.Close>
					</li>
					<li>
						<Sheet.Close>
							<a href="/kontakt" class={cn(buttonVariants({ variant: 'link' }), 'text-xl')}
								>Kontakt</a
							>
						</Sheet.Close>
					</li>
					<li>
						<Sheet.Close>
							<a href="/om-akvilinas" class={cn(buttonVariants({ variant: 'link' }), 'text-xl')}
								>Om Akvilinas</a
							>
						</Sheet.Close>
					</li>
					<li>
						<Sheet.Close>
							<a href="/galleri" class={cn(buttonVariants({ variant: 'link' }), 'text-xl ')}
								>Bildgalleri</a
							>
						</Sheet.Close>
					</li>
				</ul>
			</nav>
		</Sheet.Content>
	</Sheet.Root>
</header>
