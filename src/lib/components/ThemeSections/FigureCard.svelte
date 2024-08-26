<script lang="ts">
	export let title: string;
	export let description: string;
	export let price: number | undefined = undefined;
</script>

<div class="rounded-xl overflow-clip bg-white">
  <div class='grid grid-cols-2 *:aspect-[4/3] *:object-cover *:m-0 '>
			<img
				src="chocolate.jpg"
				alt=""
			/>
			<img
				src="hooja.jpeg"
				alt=""
			/>
			<img
				src="lemon.jpg"
				alt=""
			/>
			<img
				src="nalle.jpg"
				alt=""
			/>
  </div>
  <div class="p-4 sm:p-8 ">
    <h5 class="font-bold text-2xl">{title}</h5>
    <p>{description}</p>
    {#if price}
      <p class='text-2xl md:text-3xl m-0 mb-2 font-bold text-center'>{price}<span class="text-base">kr</span></p>
    {:else}
      <p class='text-lg italic text-center'>Rörligt pris utifrån överenskommelse</p>
    {/if}
  </div>
</div>
