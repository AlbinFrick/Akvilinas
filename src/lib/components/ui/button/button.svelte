<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';
	import { buttonVariants, type Events, type Props } from '.';

	type $$Props = Props;
	type $$Events = Events;

	interface Props_1 {
		class?: $$Props['class'];
		variant?: $$Props['variant'];
		size?: $$Props['size'];
		builders?: $$Props['builders'];
		children?: import('svelte').Snippet;
		[key: string]: any;
	}

	let {
		class: className = undefined,
		variant = 'default',
		size = 'default',
		builders = [],
		children,
		...rest
	}: Props_1 = $props();
</script>

<ButtonPrimitive.Root
	{builders}
	class={cn(buttonVariants({ variant, size, className }))}
	{...rest}
	on:click
	on:keydown
>
	{@render children?.()}
</ButtonPrimitive.Root>
