<script lang="ts" generics="TData, TValue">
	import { ScrollArea } from '$lib/components/ui/scroll-area/index';

	import {
		type ColumnDef,
		type SortingState,
		type ColumnFiltersState,
		type VisibilityState,
		getCoreRowModel,
		getSortedRowModel,
		getFilteredRowModel
	} from '@tanstack/table-core';
	import { createSvelteTable, FlexRender } from '$lib/components/ui/data-table/index.js';
	import * as Table from '$lib/components/ui/table/index.js';

	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import { Button } from '$lib/components/ui/button/index';
	import ListFilter from 'lucide-svelte/icons/list-filter';
	import ListFilterPlus from 'lucide-svelte/icons/list-filter-plus';

	import { innerHeight } from 'svelte/reactivity/window';

	type DataTableProps<TData, TValue> = {
		columns: ColumnDef<TData, TValue>[];
		data: TData[];
	};

	let sorting = $state<SortingState>([]);
	let columnFilters = $state<ColumnFiltersState>([]);
	let columnVisibility = $state<VisibilityState>({});

	let { data, columns }: DataTableProps<TData, TValue> = $props();

	let height = (innerHeight.current ? innerHeight.current - 150 : 250) + 'px';

	let filterNamesHs: string[] = ['left', 'middle', 'right'];
	let filterStatusHs: boolean[] = $state([false, false, false]);
	let filterValuesHs: string[] = ['l', 'm', 'r'];
	let filterNamesStr: string[] = ['left', 'right'];
	let filterStatusStr: boolean[] = $state([false, false]);
	let filterValuesStr: string[] = ['l', 'r'];
	let filterNamesQbs: string[] = ['pistol', 'under center'];
	let filterStatusQbs: boolean[] = $state([false, false]);
	let filterValuesQbs: string[] = ['p', 'uc'];
	let filterNamesPt: string[] = ['pass', 'run', 'special'];
	let filterStatusPt: boolean[] = $state([false, false, false]);
	let filterValuesPt: string[] = ['p', 'r', 's'];

	function resetFilter(filters: boolean[]): string {
		for (let i = 0; i < filters.length; i++) {
			filters[i] = false;
		}
		return '';
	}

	function toggleFilter(index: number, filters: boolean[], values: string[]): string {
		filters[index] = !filters[index];
		let filter: string = '';
		for (let i = 0; i < values.length; i++) {
			if (filters[i]) {
				filter += ',' + values[i];
			}
		}
		if (filter.startsWith(',')) {
			filter = filter.substring(1);
		}
		return filter;
	}

	const table = createSvelteTable({
		get data() {
			return data;
		},
		columns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onSortingChange: (updater) => {
			if (typeof updater === 'function') {
				sorting = updater(sorting);
			} else {
				sorting = updater;
			}
		},
		onColumnFiltersChange: (updater) => {
			if (typeof updater === 'function') {
				columnFilters = updater(columnFilters);
			} else {
				columnFilters = updater;
			}
		},
		onColumnVisibilityChange: (updater) => {
			if (typeof updater === 'function') {
				columnVisibility = updater(columnVisibility);
			} else {
				columnVisibility = updater;
			}
		},
		state: {
			get sorting() {
				return sorting;
			},
			get columnFilters() {
				return columnFilters;
			},
			get columnVisibility() {
				return columnVisibility;
			}
		}
	});

	let onSel: boolean = false;
</script>

<div class="grid gap-2">
	<div>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<Button {...props} variant="outline">Columns</Button>
				{/snippet}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content align="start">
				<ScrollArea class="h-96 w-36">
					<div class="p-1">
						{#each table.getAllColumns().filter((col) => col.getCanHide()) as column (column.id)}
							<div class="text-sm">
								<DropdownMenu.CheckboxItem
									bind:checked={() => column.getIsVisible(), (v) => column.toggleVisibility(!!v)}
									closeOnSelect={onSel}
								>
									{column.id}
								</DropdownMenu.CheckboxItem>
							</div>
						{/each}
					</div>
				</ScrollArea>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
	<ScrollArea
		class="relative overflow-auto rounded-md border p-1"
		style={{ height: height }}
		orientation="both"
	>
		<Table.Root>
			<Table.Header class="sticky top-0 bg-neutral-50 dark:bg-neutral-950">
				{#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
					<Table.Row>
						{#each headerGroup.headers as header (header.id)}
							<Table.Head>
								{#if !header.isPlaceholder}
									<div class="grid justify-items-center">
										<FlexRender
											content={header.column.columnDef.header}
											context={header.getContext()}
										/>
										<DropdownMenu.Root>
											<DropdownMenu.Trigger>
												{#snippet child({ props })}
													<Button {...props} variant="ghost" size="icon">
														{#if table.getColumn(header.id)?.getFilterValue()}
															<ListFilterPlus />
														{:else}
															<ListFilter />
														{/if}
													</Button>
												{/snippet}
											</DropdownMenu.Trigger>
											<DropdownMenu.Content align="center">
												{#if header.id === 'hs'}
													<div class="text-sm">
														<DropdownMenu.Item
															onSelect={() => {
																table
																	.getColumn(header.id)
																	?.setFilterValue(resetFilter(filterStatusHs));
															}}
														>
															reset
														</DropdownMenu.Item>
														{#each filterNamesHs as name, i}
															<DropdownMenu.CheckboxItem
																bind:checked={
																	() => filterStatusHs[i],
																	(v) =>
																		table
																			.getColumn(header.id)
																			?.setFilterValue(
																				toggleFilter(i, filterStatusHs, filterValuesHs)
																			)
																}
																closeOnSelect={onSel}>{name}</DropdownMenu.CheckboxItem
															>
														{/each}
													</div>
												{:else if header.id === 'str'}
													<div class="text-sm">
														<DropdownMenu.Item
															onSelect={() => {
																table
																	.getColumn(header.id)
																	?.setFilterValue(resetFilter(filterStatusStr));
															}}
														>
															reset
														</DropdownMenu.Item>
														{#each filterNamesStr as name, i}
															<DropdownMenu.CheckboxItem
																bind:checked={
																	() => filterStatusStr[i],
																	(v) =>
																		table
																			.getColumn(header.id)
																			?.setFilterValue(
																				toggleFilter(i, filterStatusStr, filterValuesStr)
																			)
																}
																closeOnSelect={onSel}>{name}</DropdownMenu.CheckboxItem
															>
														{/each}
													</div>
												{:else if header.id === 'qbs'}
													<div class="text-sm">
														<DropdownMenu.Item
															onSelect={() => {
																table
																	.getColumn(header.id)
																	?.setFilterValue(resetFilter(filterStatusQbs));
															}}
														>
															reset
														</DropdownMenu.Item>
														{#each filterNamesQbs as name, i}
															<DropdownMenu.CheckboxItem
																bind:checked={
																	() => filterStatusQbs[i],
																	(v) =>
																		table
																			.getColumn(header.id)
																			?.setFilterValue(
																				toggleFilter(i, filterStatusQbs, filterValuesQbs)
																			)
																}
																closeOnSelect={onSel}>{name}</DropdownMenu.CheckboxItem
															>
														{/each}
													</div>
												{:else if header.id === 'pt'}
													<div class="text-sm">
														<DropdownMenu.Item
															onSelect={() => {
																table
																	.getColumn(header.id)
																	?.setFilterValue(resetFilter(filterStatusPt));
															}}
														>
															reset
														</DropdownMenu.Item>
														{#each filterNamesPt as name, i}
															<DropdownMenu.CheckboxItem
																bind:checked={
																	() => filterStatusPt[i],
																	(v) =>
																		table
																			.getColumn(header.id)
																			?.setFilterValue(
																				toggleFilter(i, filterStatusPt, filterValuesPt)
																			)
																}
																closeOnSelect={onSel}>{name}</DropdownMenu.CheckboxItem
															>
														{/each}
													</div>
												{:else}
													<input
														type="text"
														placeholder="Filter..."
														value={(table.getColumn(header.id)?.getFilterValue() as string) ?? ''}
														onchange={(e) => {
															table.getColumn(header.id)?.setFilterValue(e.currentTarget.value);
														}}
														oninput={(e) => {
															table.getColumn(header.id)?.setFilterValue(e.currentTarget.value);
														}}
														class="p-1"
													/>
												{/if}
											</DropdownMenu.Content>
										</DropdownMenu.Root>
									</div>
								{/if}
							</Table.Head>
						{/each}
					</Table.Row>
				{/each}
			</Table.Header>
			<Table.Body>
				{#each table.getRowModel().rows as row (row.id)}
					<Table.Row data-state={row.getIsSelected() && 'selected'}>
						{#each row.getVisibleCells() as cell (cell.id)}
							<Table.Cell>
								<FlexRender content={cell.column.columnDef.cell} context={cell.getContext()} />
							</Table.Cell>
						{/each}
					</Table.Row>
				{:else}
					<Table.Row>
						<Table.Cell colspan={columns.length} class="h-24 text-center">No results.</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</ScrollArea>
</div>
