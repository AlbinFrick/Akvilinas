<script lang="ts">
	import { cn } from '$lib/utils';

	export let id: string;
	let className: string | undefined = undefined;
	export { className as class };
</script>

<section {id} class={cn('p-6 ', className)}>
	<slot />
</section>
