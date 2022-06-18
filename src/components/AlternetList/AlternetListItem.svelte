<script lang="ts">
  import Divider from '../Divider.svelte';

  export let justify;
  export let index: number | string;
  export let heading: string;
  export let description: string;
  if (index < 10) {
    if (typeof index !== 'string') index = `0${index}`;
  }
</script>

<div
  class={`
	flex 
	items-center 
	${justify} 
	h-auto 
	min-w-28 
	gap-4 
	before:content-['']
	before:border
	before:self-stretch
	`}
>
  {#if justify === 'justify-start'}
    <span class="text-5xl order-first">{index}</span>
  {/if}
  <div class="textContainer {justify === 'justify-start' ? '' : 'order-first'}">
    <h2 class="text-3xl font-medium mb-2">{heading}</h2>
    <p class="max-w-2xl">{description}</p>
  </div>
  {#if justify === 'justify-end'}
    <span class="text-5xl">{index}</span>
  {/if}
</div>
