<script>
  export let heading = 'Heading';
  export let description = 'Description';
  export let image = { src: 'image', alt: '' };
</script>

<div class="flex-1 flex flex-col gap-4">
  <img class="aspect-square" src={image.src} alt={image.alt} />
  <div class="flex flex-col gap-2">
    <h2 class="text-3xl">{heading}</h2>
    <p>{description}</p>
  </div>
  <button
    class="bg-orange-200 inline-block w-min whitespace-nowrap px-[1.2em] py-[0.5em] rounded self-end justify-self-end"
    >Läs mer</button
  >
</div>
