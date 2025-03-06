<script lang="ts">
	import AppSelect from '$lib/components/app-select.svelte';
	import * as AppTable from '$lib/components/ui/app-table/index';
	import { dataVsRhinos } from './vsRhinos';
	import { columns } from '$lib/components/ui/app-table/columns';
	import type { Game } from '$lib/types/types';

	const games: Game[] = [
		{ value: 'atRhinos', label: '@ Rhinos' },
		{ value: 'vsRhinos', label: 'vs Rhinos' }
	];

	let value = $state('atRhinos');
</script>

<main class="ml-2 mt-2">
	<AppSelect {games} bind:value />

	<div class="ml-1 mt-2">
		{#if value === 'atRhinos'}
			<p>@ Rhinos</p>
		{:else if value === 'vsRhinos'}
			<AppTable.Root {columns} data={dataVsRhinos}></AppTable.Root>
		{/if}
	</div>
</main>
