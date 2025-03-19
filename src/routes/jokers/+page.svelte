<script lang="ts">
	import AppSelect from '$lib/components/app-select.svelte';
	import * as AppTable from '$lib/components/ui/app-table/index';
	import { dataAtRhinos } from './atRhinos';
	import { columns } from '$lib/components/ui/app-table/columns';
	import type { Game } from '$lib/types/types';

	const games: Game[] = [{ value: 'atRhinos', label: '@ Rhinos' }];

	let value = $state('');
</script>

<main class="m-2 grid gap-2">
	<AppSelect {games} bind:value />

	<div>
		{#if value === 'atRhinos'}
			<AppTable.Root {columns} data={dataAtRhinos}></AppTable.Root>
		{/if}
	</div>
</main>
