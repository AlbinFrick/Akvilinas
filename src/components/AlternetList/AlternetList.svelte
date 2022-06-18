<script>
  import AlternetListItem from './AlternetListItem.svelte';

  let items = [
    {
      heading: 'Välj det du vill hyra',
      description:
        'Kolla igenom utbudet och skriv ned det du önskar hyra, hur många och vilkd datum du önskar hyra. Kom ihåg att skicka bokningsförfrågan tidigt då festartiklarna snabbt blir uthyrda!'
    },
    {
      heading: 'Skicka det du önskar hyra till mig! ',
      description:
        'Innan du skickar in en förfrågan läser du igenom villkoren. Sedan skickar du in en bokningsförfrågan. Där skriver du vad du önskar hyra, antal och vilka datum de gäller. Du skriver även när du önskar hämta sakerna. Önskar du leverans så kommer vi överens detta i bokningsbekräftelsens.'
    },
    {
      heading: 'Invänta bokningsbekräftelse ',
      description:
        'Nu när du har skickat in din bokningsförfrågan så väntar du in bekräftelsen. Eftersom detta företag drivs vid sidan av studier och annat abete så kan det dröja upp till två arbetsdagar att få svar. Är det riktigt bråttom så kan man '
    },
    {
      heading: 'Leverans och betalning',
      description:
        'Sen när du har fått din bekräftelse så får du en faktura av mig där du betalar 50% av den totala kostnaden. Du har också läst igenom villkoren för uthyrningen. Nu kan du drömma vidare och längta som bara den till din kommande fest!'
    }
  ];
</script>

<div class="flex flex-col gap-16 md:gap-24">
  {#each items as item, i}
    <AlternetListItem
      justify={(i + 1) % 2 != 0 ? 'justify-start' : 'justify-end'}
      index={i + 1}
      heading={item.heading}
      description={item.description}
    />
  {/each}
</div>
