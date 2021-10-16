<script lang="ts">
  import MenuItem from './Menu-item.svelte';
</script>

<nav class="sm:hidden bg-red-300 z-10 fixed bottom-4 w-full px-4 sm:px-8 ">
  <ul class="flex items-center justify-around  bg-accent py-2 px-4 rounded-3xl h-16">
    <MenuItem url="/portfolio" text="Portfolio" />
    <MenuItem url="/hyra" text="Hyra" />
    <MenuItem url="/kontakt" text="Kontakt" />
    <MenuItem url="/om_akvilinas" text="Akvilinas" />
  </ul>
</nav>
