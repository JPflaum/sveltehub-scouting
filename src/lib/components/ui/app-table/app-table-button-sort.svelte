<script lang="ts">
	import { Button } from '$lib/components/ui/button/index';
	import * as Tooltip from '$lib/components/ui/tooltip/index';

	let { text, tooltip, ...restProps } = $props();
</script>

<Tooltip.Provider>
	<Tooltip.Root>
		<Tooltip.Trigger>
			<Button variant="ghost" {...restProps}>{text}</Button>
		</Tooltip.Trigger>
		<Tooltip.Content>{tooltip}</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
