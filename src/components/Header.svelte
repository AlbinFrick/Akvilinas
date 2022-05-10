<script>
  import Link from './Link.svelte';
</script>

<header
  class="hidden sm:flex m-auto w-full max-w-7xl justify-between h-20 items-center "
>
  <span class="ml-4">
    <a href="/"> logo </a>
  </span>
  <div class="flex gap-3 mr-4">
    <Link link="/">Hem</Link>
    <Link link="/uthyrning">Uthyrning</Link>
    <Link link="/grafiskt">Grafiskt arbete</Link>
    <Link link="/om_akvilinas">Om Akvilinas</Link>
  </div>
</header>
