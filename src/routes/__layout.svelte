<script>
  import '../app.css';
  import Header from '../components/Header.svelte';
  import MobileMenu from '../components/Menu/MobileMenu.svelte';
</script>

<Header />
<MobileMenu />
<main class="w-full max-w-7xl m-auto  h-[100vh]">
  <slot />
</main>
