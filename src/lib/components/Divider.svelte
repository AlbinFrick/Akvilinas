<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		class?: string | null;
		vertical?: boolean;
	}

	let { class: className = null, vertical = false }: Props = $props();
</script>

<div
	class={cn(
		'rounded-full bg-gray-300',
		vertical ? ' max-h-full w-[2px] ' : ' h-[2px] w-full',
		className
	)}
></div>
