<script>
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
	// Hej kära besökare!\n\n Jag håller nu på att baka på en liten bebis istället för tårtor, därför har jag pausat alla beställningar på obestämd tid. Kolla gärna på hemsidan och tänk ut något ni vill ha så hoppas jag att jag kan fylla era beställningar när den lille är ute!\n\n /Hilda
	onMount(() => {
		toast(PreganteMessage, {
			duration: 99999999
		});
	});
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
<Toaster />

<style>
	:global(body) {
		min-height: 100vh;
		background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(252, 227, 223, 1) 100%);
	}
</style>
