<script>
	import { cn } from '$lib/utils';
	import { FacebookIcon, InstagramIcon } from 'lucide-svelte';
	import { buttonVariants } from './ui/button';
	import Divider from './Divider.svelte';
	import { Contact } from '$lib/data';
</script>

<footer class="flex gap-4 justify-between px-12 py-8 mt-4">
	<div class="flex flex-col items-start not-prose md:flex-row gap-1 md:gap-12">
		<a href={`mailto:${Contact.Email}`} class={cn(buttonVariants({ variant: 'link' }), 'p-0')}
			>{Contact.Email}</a
		>
		<a href={`tel:${Contact.Phone}`} class={cn(buttonVariants({ variant: 'link' }), 'p-0')}
			>{Contact.Phone}</a
		>
	</div>
	<Divider vertical class="md:hidden" />
	<div class="items-center justify-end flex gap-8">
		<FacebookIcon />
		<InstagramIcon />
	</div>
</footer>
