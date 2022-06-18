<script lang="ts">
  import MenuItem from './Menu-item.svelte';
</script>

<nav class="hidden md:block w-4/5 my-0 mx-auto py-2 border-t-2 border-b-2 border-gray-200 ">
  <ul class="flex items-center justify-around gap-4 ">
    <MenuItem url="/" text="Hem" />
    <MenuItem url="/portfolio" text="Portfolio" />
    <MenuItem url="/hyra" text="Att hyra" />
    <MenuItem url="/kontakt" text="Kontakta mig" />
    <MenuItem url="/om_akvilinas" text="Om Akvilinas" />
  </ul>
</nav>
