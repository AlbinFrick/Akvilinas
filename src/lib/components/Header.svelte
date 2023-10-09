<script>
	import { cn } from '$lib/utils';
	import { buttonVariants } from './ui/button';
</script>

<header class="w-full flex items-center px-8 py-6 h-16 justify-between">
	<a href="/">
		<img src="/logo.png" alt="Akvilinas fika" class="rounded-xl max-h-11" />
	</a>
	<nav>
		<ul class="gap-6 hidden md:flex">
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
			<li>
				<a href="/aktuellt" class={cn(buttonVariants({ variant: 'link' }), 'text-xl ')}>Aktuellt</a>
			</li>
		</ul>
	</nav>
</header>
