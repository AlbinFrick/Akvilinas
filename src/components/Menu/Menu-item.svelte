<script>
  export let text;
  export let url;
</script>

<li>
  <a
    class={`
	px-3 
	py-2 
	rounded-lg
	transition

	sm:bg-blue-300 
	sm:hover:bg-blue-700
	`}
    href={url}
  >
    {text}
  </a>
</li>
