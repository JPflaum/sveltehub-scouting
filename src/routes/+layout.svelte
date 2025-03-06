<script lang="ts">
	import '../app.css';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import ModeSwitch from '$lib/components/mode-switch.svelte';
	import { page } from '$app/state';

	let { children } = $props();

	function getPathname(): String {
		let path: string = page.url.pathname.replaceAll('/', '');
		let name = path.replaceAll('sveltehub-scouting', '');
		if (name.length > 0) {
			name = name[0].toUpperCase() + name.substring(1);
		}
		return name;
	}
</script>

<ModeWatcher />
<Sidebar.Provider>
	<AppSidebar />
	<main class="m-1">
		<Sidebar.Trigger />
		<ModeSwitch />

		{getPathname()}
		{@render children()}
	</main>
</Sidebar.Provider>
