<script lang="ts">
  export let img;
  export let tClasses = '';
  export let clicked = false;
  export let big = '';

  const handleClick = () => {
    if (!clicked) {
      big = 'scale-300 ';
    } else {
      big = '';
    }
    clicked = !clicked;
  };
</script>

<div
  on:click={handleClick}
  class=" {tClasses} {big}  bg-primary rounded-3xl cursor-pointer"
>
  <img
    class=" object-cover rounded-3xl drop-shadow-lg"
    src={img.url}
    alt={img.alt}
  />
</div>
