<script lang='ts'>
	import { cn } from "$lib/utils";

	export let style: string;
</script>

<p class={cn('font-arapey text-lg', style)}>
	<slot />
</p>
