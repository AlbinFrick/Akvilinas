<script lang="ts">
  import { cn } from '$lib/utils';

  interface Props {
    class: string;
    children?: import('svelte').Snippet;
  }

  let { class: className, children }: Props = $props();
  
</script>

<p class={cn('font-arapey text-lg', className)}>
  {@render children?.()}
</p>
