<script lang="ts">
	import { cn } from '$lib/utils';

	export let style: string | null = null;
</script>

<div class={cn('bg-gray-300 h-[2px] w-full rounded-full', style)} />
