<script lang="ts">
  import '../app.css';
  import '@fontsource/arapey';
  import '@fontsource-variable/playfair-display';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  // Speed insights
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
  injectSpeedInsights();

  // Analytics
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';

  inject({ mode: dev ? 'development' : 'production' });

  import { onMount } from 'svelte';
  import toast, { Toaster } from 'svelte-french-toast';
  import PreganteMessage from '$lib/components/PreganteMessage.svelte';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  type LocalStorageData = {
    seen: boolean;
    expires: number;
  };

  onMount(() => {
    const hasSeenMessageStr = localStorage.getItem('hasSeenPreganteMessage');
    if (!hasSeenMessageStr) {
      return null;
    }
    const hasSeenMessage = JSON.parse(hasSeenMessageStr) as LocalStorageData;

    if (
      !hasSeenMessage.seen ||
      hasSeenMessage.expires < Date.now()
    ) {
      toast(PreganteMessage, {
        style: 'max-width: 450px; padding: 16px;',
        duration: 99999999,
      });
    }
  });
</script>

<svelte:head>
  <title>Akvilinas Fika</title>
  <link rel="icon" type="image/svg+xml" href="/logo.svg" />
</svelte:head>

<Header />
<!-- This div is it to make the image grid flow outside of the screen -->
<div class="min-h-[calc(100vh-120px-64px)] overflow-hidden">
  <main class="prose mx-auto w-full max-w-full font-playfair">
    {@render children?.()}
  </main>
</div>
<Footer />
<Toaster />

<style>
  :global(body) {
    min-height: 100vh;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(252, 227, 223, 1) 100%
    );
  }
</style>
