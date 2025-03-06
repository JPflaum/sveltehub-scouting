<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { base } from '$app/paths';

	const items = [
		{
			title: 'Dragons',
			url: '/dragons'
		},
		{
			title: 'Jokers',
			url: '/jokers'
		},
		{
			title: 'Sharks',
			url: '/sharks'
		},
		{
			title: 'Spiders',
			url: '/spiders'
		}
	];
</script>

<Sidebar.Root>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel>Teams</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each items as item}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton>
								{#snippet child({ props })}
									<a href="{base}{item.url}" {...props}>
										<span>{item.title}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
</Sidebar.Root>
