<script>
	import { cn } from '$lib/utils';
	import { FacebookIcon, InstagramIcon } from 'lucide-svelte';
	import { buttonVariants } from './ui/button';
	import Divider from './Divider.svelte';
	import { Contact } from '$lib/data';
</script>

<footer class="mt-4 flex justify-between gap-4 px-12 py-8">
	<div class="not-prose flex flex-col items-start gap-1 md:flex-row md:gap-12">
		<a href={`mailto:${Contact.email}`} class={cn(buttonVariants({ variant: 'link' }), 'p-0')}
			>{Contact.email}</a
		>
		<a href={`tel:${Contact.phone}`} class={cn(buttonVariants({ variant: 'link' }), 'p-0')}
			>{Contact.phone}</a
		>
	</div>
	<Divider vertical class="md:hidden" />
	<div class="flex items-center justify-end gap-8">
		<a href="https://www.facebook.com/akvilinasfika" target="_blank">
			<FacebookIcon />
		</a>
		<a href="https://www.instagram.com/akvilinasfika" target="_blank">
			<InstagramIcon />
		</a>
	</div>
</footer>
