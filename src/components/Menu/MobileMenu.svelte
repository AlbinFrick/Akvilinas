<script lang="ts">
  import MenuItem from './Menu-item.svelte';
</script>

<nav class="sm:hidden z-10 fixed bottom-4 w-full px-4 sm:px-8 ">
  <ul class="flex items-center justify-around  bg-accent  rounded-2xl h-12">
    <MenuItem url="/" text="Hem" />
    <MenuItem url="/hyra" text="Hyra" />
    <MenuItem url="/kontakt" text="Kontakt" />
    <MenuItem url="/om_akvilinas" text="Akvilinas" />
  </ul>
</nav>
