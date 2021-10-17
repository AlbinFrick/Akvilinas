<script>
  export let text;
  export let url;
</script>

<li>
  <a
    class={`
	px-4 
	py-4 
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
