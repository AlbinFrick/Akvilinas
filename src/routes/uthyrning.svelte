<script>
  import Hero from '../components/Hero.svelte';
  import AlternetList from '../components/AlternetList/AlternetList.svelte';
</script>

<div class="w-full">
  <Hero heroText="Så går det till 4 enkla steg" />
  <div class="w-full p-8 md:p-12">
    <AlternetList />
  </div>
</div>
