<script lang="ts">
	import { cn } from '$lib/utils';

	export let className: string;
	export { className as class };
</script>

<p class={cn('font-arapey text-lg', className)}>
	<slot />
</p>
