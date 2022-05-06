<script>
  import '../app.css';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<Header />
<main class="w-full max-w-7xl m-auto">
  <slot />
</main>
<Footer />
