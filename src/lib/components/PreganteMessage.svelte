<script>
	import toast_ from 'svelte-french-toast';
	import { XIcon } from 'lucide-svelte';

	export let toast;
</script>

<span>
	Hej kära besökare! 👋
	<br />
	Jag håller nu på att baka på en liten bebis istället för tårtor, därför har jag pausat alla beställningar
	på obestämd tid. Kolla gärna på hemsidan och tänk ut något ni vill ha så hoppas jag att jag kan fylla
	era beställningar när den lille är ute!
	<br />
	<span class="italic">/Hilda</span>
	<button class="absolute right-2 top-2" on:click={() => toast_.dismiss(toast.id)}><XIcon /></button
	>
</span>
