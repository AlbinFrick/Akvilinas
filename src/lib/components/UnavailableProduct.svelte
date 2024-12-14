<script lang="ts">
  import ProductCard from './ProductCard.svelte';
  import type { Product } from '../../types/sanity.types';

  interface Props {
    product: Product;
  }

  let { product }: Props = $props();
</script>

<div class="relative flex">
  <p
    class="absolute left-1/2 top-1/3 z-10 inline -translate-x-1/2 -translate-y-1/2 -rotate-[20deg] whitespace-nowrap rounded-md bg-primary px-3 py-2 text-xl text-primary-foreground"
  >
    Går ej att beställa för tillfället
  </p>
  <div class="flex-1 opacity-40">
    <ProductCard {product} />
  </div>
</div>
