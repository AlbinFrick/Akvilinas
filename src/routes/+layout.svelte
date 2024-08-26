<script>
	import '../app.css';
	import '@fontsource/arapey';
	import '@fontsource-variable/playfair-display';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>Akvilinas Fika</title>
	<link rel="icon" type="image/svg+xml" href="/logo.svg" />
</svelte:head>

<Header />
<!-- This div is it to make the image grid flow outside of the screen -->
<div class="min-h-[calc(100vh-120px-64px)] overflow-hidden">
	<main class="prose mx-auto w-full max-w-7xl font-playfair">
		<slot />
	</main>
</div>
<Footer />

<style>
	:global(body) {
		min-height: 100vh;
		background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(252, 227, 223, 1) 100%);
	}
</style>
