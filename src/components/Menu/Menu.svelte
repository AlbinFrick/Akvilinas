<script lang="ts">
  import MenuItem from './Menu-item.svelte';
</script>

<nav class="mr-4">
  <ul class="flex items-center justify-around gap-4 ">
    <MenuItem url="/" text="Hem" />
    <MenuItem url="/portfolio" text="Portfolio" />
    <MenuItem url="/hyra" text="Att hyra" />
    <MenuItem url="/kontakt" text="Kontakta mig" />
    <MenuItem url="/om_akvilinas" text="Om Akvilinas" />
  </ul>
</nav>
