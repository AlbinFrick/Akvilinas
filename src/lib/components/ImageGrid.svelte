<script lang="ts">
  import { onMount } from 'svelte';
  import { cubicInOut } from 'svelte/easing';

  let delay = 200;
  let duration = 1200;
  let y = 100;

  let isVisible = false;

  onMount(() => {
    isVisible = true;
    console.log('mounted');
  });

  function fadeAndFly(
    node: HTMLElement,
    { y = 0, duration = 1000, delay = 0 },
  ) {
    return {
      delay,
      duration,
      css: (t: number) => {
        const eased = cubicInOut(t);
        return `
          opacity: ${eased};
          transform: translateY(${(1 - eased) * y}px)
        `;
      },
    };
  }
</script>

<div
  class="not-prose flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
>
  {#if isVisible}
    <div
      in:fadeAndFly={{ y, duration, delay }}
      class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
    >
      <div class="relative">
        <img
          src="/nalle.jpg"
          alt=""
          class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
        />
        <div
          class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
        />
      </div>
    </div>
  {/if}
  {#if isVisible}
    <div
      in:fadeAndFly={{ y: -y, duration, delay: delay + 200 }}
      class="mr-auto flex w-44 flex-none flex-col space-y-8 sm:mr-0 sm:pt-52 lg:pt-36"
    >
      <div class="relative">
        <img
          src="wedding-cake.jpeg"
          alt=""
          class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
        />
        <div
          class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
        />
      </div>
      <div class="relative">
        <img
          src="hilda-with-cake.jpg"
          alt=""
          class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
        />
        <div
          class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
        />
      </div>
    </div>
  {/if}

  {#if isVisible}
    <div
      in:fadeAndFly={{ y, duration, delay: delay + 400 }}
      class="w-44 flex-none space-y-8 pt-32 sm:pt-0"
    >
      <div class="relative">
        <img
          src="green-nalle.jpg"
          alt=""
          class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
        />
        <div
          class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
        />
      </div>
      <div class="relative">
        <img
          src="flower-cake.jpeg"
          alt=""
          class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
        />
        <div
          class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
        />
      </div>
    </div>
  {/if}
</div>
