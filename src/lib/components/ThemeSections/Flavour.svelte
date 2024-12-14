<script lang="ts">
  import type { Flavour } from '../../../types/themePage';
  interface Props {
    flavour: Flavour[];
  }

  let { flavour }: Props = $props();
</script>

<section
  id="flavour"
  class="mx-auto flex max-w-default-content flex-col items-center"
>
  <h2 class="mb-4 text-4xl text-gray-700">Smakmeny</h2>
  <ul class="list-none p-0">
    {#each flavour as flavour}
      <li class="text-center">
        <h3>{flavour.title}</h3>
        <p>{flavour.smaker}</p>
      </li>
    {/each}
  </ul>
</section>
