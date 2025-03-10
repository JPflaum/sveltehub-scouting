<script>
	import { base } from '$app/paths';
</script>

<div class="grid gap-2 p-2">
	<p>Scouting 2025</p>
	<div class="flex flex-col gap-2">
		<a href="{base}/dragons" class="justify-items-center">Dragons</a>
		<a href="{base}/jokers">Jokers</a>
		<a href="{base}/sharks">Sharks</a>
		<a href="{base}/spiders">Spiders</a>
	</div>
</div>

<style>
	a {
		padding-top: 4px;
		padding-left: 8px;
		padding-right: 8px;
		padding-bottom: 6px;
	}
	a:hover {
		background-color: var(--a-hover);
		border-radius: 0.3em;
		transform: scale(1.1);
	}
</style>
