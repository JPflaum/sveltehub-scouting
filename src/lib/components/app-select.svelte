<script lang="ts">
	import * as Select from '$lib/components/ui/select/index';
	import type { Game } from '$lib/types/types';

	let { games, value = $bindable() }: { games: Game[]; value: string } = $props();

	const triggerContent = $derived(games.find((i) => i.value === value)?.label ?? 'Select Game');
</script>

<Select.Root type="single" bind:value>
	<Select.Trigger class="w-[180px]">
		{triggerContent}
	</Select.Trigger>
	<Select.Content>
		<Select.Group>
			<Select.GroupHeading>Games</Select.GroupHeading>
			{#each games as game}
				<Select.Item value={game.value} label={game.label}></Select.Item>
			{/each}
		</Select.Group>
	</Select.Content>
</Select.Root>
