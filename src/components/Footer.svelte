<script>
  import Link from './Link.svelte';
</script>

<div class="h-24 w-full flex justify-center items-center bg-primaryDark">
  <div class="flex justify-between w-[40%]  text-lg">
    <Link link="/kontakt">Kontakt</Link>
    <Link link="https://instagram.com">Instagram</Link>
    <Link link="https://facebook.com">Facebook</Link>
  </div>
  <span
    class="before:content-['\00a9'] before:mr-1 absolute bottom-0 right-0 mr-4 mb-2"
    >copyright Akvlinas</span
  >
</div>
