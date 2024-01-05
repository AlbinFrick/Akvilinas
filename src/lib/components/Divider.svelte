<script lang="ts">
	import { cn } from '$lib/utils';

	export let style: string | null = null;
	export let vertical: boolean = false;
</script>

<div class={cn('bg-gray-300 rounded-full', vertical ? ' max-h-full w-[2px] ': ' h-[2px] w-full', style)} />
