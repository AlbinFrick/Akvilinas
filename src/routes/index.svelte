<script>
  import Puff from '../components/Puff.svelte';
</script>

<div class="w-full h-full">
  <h1 class="px-4 pb-4 pt-10 text-center text-9xl font-allison mb-16">
    Akvilinas
  </h1>
  <div class="flex justify-between gap-4 md:gap-10 lg:gap-24 w-[90%] mx-auto ">
    <Puff
      heading="Design och kommunikation"
      description="Innan du skickar in en förfrågan läser du igenom villkoren. Sedan skickar du in en bokningsförfrågan. Där skriver du vad du önskar hyra, antal och vilka datum de gäller."
      image={{ src: './images/dukning.png', alt: 'Bröllops dukning' }}
    />
    <Puff
      heading="Uthyrning"
      description="Innan du skickar in en förfrågan läser du igenom villkoren. Sedan skickar du in en bokningsförfrågan. Där skriver du vad du önskar hyra, antal och vilka datum de gäller."
      image={{ src: './images/dukning.png', alt: 'Bröllops dukning' }}
    />
  </div>
</div>
