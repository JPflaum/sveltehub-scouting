<script lang="ts">
	import AppSelect from '$lib/components/app-select.svelte';
	import type { Game } from '$lib/types/types';

	const games: Game[] = [];

	let value = $state('');
</script>

<main class="m-2 grid gap-2">
	<AppSelect {games} bind:value />

	<div></div>
</main>
