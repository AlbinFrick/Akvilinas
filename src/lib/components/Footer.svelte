<script>
	import { cn } from "$lib/utils";
	import { FacebookIcon, InstagramIcon } from "lucide-svelte";
	import { buttonVariants } from "./ui/button";
	import Divider from "./Divider.svelte";


</script>

<footer class="flex gap-4 justify-between px-12 py-8 mt-4">
	<div class="flex flex-col items-start not-prose md:flex-row gap-1 md:gap-12">
		<a href='mailto:info@akvlinasfika.se' class={cn(buttonVariants({ variant: 'link' }), 'p-0')} >info@akvlinasfika.se</a>
		<a href='tel:0703228461' class={cn(buttonVariants({ variant: 'link' }), 'p-0')} >070 - 322 84 61</a>
	</div>
	<Divider vertical style='md:hidden' />
	<div class="items-center justify-end flex gap-8">
		<FacebookIcon/>
		<InstagramIcon/>
	</div>	
</footer>