<script lang="ts">
  import toast_ from 'svelte-french-toast';
  import { XIcon } from 'lucide-svelte';

  let { toast } = $props();
</script>

<span class="flex flex-col gap-4">
  <span class="text-lg"> Hej kära besökare! 👋</span>
  <span>
    Just nu har jag tagit en paus i tårtbakandet då jag är gravid med vårt andra
    barn. Jag ser framemot att kunna ta beställningar i framtiden istället!
  </span>
  <span class="flex flex-col">
    <span>Varmaste hälsningar,</span>
    <span>Hilda</span>
  </span>
  <button
    class="absolute right-2 top-2"
    onclick={() => {
      toast_.dismiss(toast.id);
      const expirationTime = Date.now() + (60 * 60 * 1000); // Current time + 1 hour in milliseconds
      localStorage.setItem(
        'hasSeenPreganteMessage',
        JSON.stringify({
          seen: true,
          expires: expirationTime,
        }),
      );
    }}
  >
    <XIcon />
  </button>
</span>
