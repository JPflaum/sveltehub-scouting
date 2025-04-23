import type { ColumnDef, Row } from "@tanstack/table-core";
import type { MyRow } from "$lib/types/types";
import { createRawSnippet } from "svelte";
import { renderSnippet, renderComponent } from "$lib/components/ui/data-table/index";
import AppTableButtonSort from '$lib/components/ui/app-table/app-table-button-sort.svelte';

function myMultiNumberFilter(row: Row<MyRow>, filterValue: string, cellId: string): boolean {
    let filter: boolean = false;
    let value: number = Number(row.getValue(cellId));
    if (filterValue.includes(',')) {
        let items: string[] = filterValue.split(',');
        items.forEach((item) => {
            if (value === Number(item.trim())) {
                filter = true;
            }
        });
    } else {
        filter = value === Number(filterValue.trim());
    }
    return filter;
}

function myMultiTextFilter(row: Row<MyRow>, filterValue: string, cellId: string): boolean {
    let filter: boolean = false;
    let value: string = String(row.getValue(cellId)).trim();
    if (filterValue.includes(',')) {
        let items: string[] = filterValue.split(',');
        items.forEach((item) => {
            if (value.includes(item.trim())) {
                filter = true;
            }
        });
    } else {
        filter = value.includes(filterValue.trim());
    }
    return filter;
}

export const columns: ColumnDef<MyRow>[] = [
    {
        accessorKey: 'pn',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'pn',
                tooltip: 'play number',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        cell: ({ row }) => {
            const amountHeaderSnippet = createRawSnippet(() => ({
                render: () => `<div class="text-center">${row.getValue("pn")}</div>`,
            }));

            return renderSnippet(
                amountHeaderSnippet,
                ""
            );
        },
        sortingFn: "alphanumeric",
        filterFn: (row, columnId, filterValue) => myMultiNumberFilter(row, filterValue, 'pn'),
    },
    {
        accessorKey: 'fp',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'fp',
                tooltip: 'field position',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        cell: ({ row }) => {
            const amountHeaderSnippet = createRawSnippet(() => ({
                render: () => `<div class="text-center">${row.getValue("fp")}</div>`,
            }));

            return renderSnippet(
                amountHeaderSnippet,
                ""
            );
        },
        sortingFn: "alphanumeric",
        filterFn: (row, columnId, filterValue: string): boolean => {
            let filter: boolean = false;
            let value: number = Number(row.original.fp.trim());
            if (filterValue.toLowerCase().includes('white')) {
                filter = value < 80;
            } else if (filterValue.toLowerCase().includes('red')) {
                filter = value > 79;
            } else if (filterValue.includes(',')) {
                let items: string[] = filterValue.split(',');
                items.forEach(item => {
                    if (value === Number(item.trim())) {
                        filter = true;
                    }
                });
            } else {
                filter = value === Number(filterValue.trim());
            }
            return filter;
        },
    },
    {
        accessorKey: 'hs',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'hs',
                tooltip: 'hashes',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        cell: ({ row }) => {
            const amountHeaderSnippet = createRawSnippet(() => ({
                render: () => `<div class="text-center">${row.getValue("hs")}</div>`,
            }));

            return renderSnippet(
                amountHeaderSnippet,
                ""
            );
        },
        filterFn: (row, columnId, filterValue) => myMultiTextFilter(row, filterValue, 'hs'),
    },
    {
        accessorKey: 'do',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'do',
                tooltip: 'down',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        cell: ({ row }) => {
            const amountHeaderSnippet = createRawSnippet(() => ({
                render: () => `<div class="text-center">${row.getValue("do")}</div>`,
            }));

            return renderSnippet(
                amountHeaderSnippet,
                ""
            );
        },
        sortingFn: "alphanumeric",
        filterFn: (row, columnId, filterValue) => myMultiNumberFilter(row, filterValue, 'do'),
    },
    {
        accessorKey: 'di',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'di',
                tooltip: 'distance',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        cell: ({ row }) => {
            const amountHeaderSnippet = createRawSnippet(() => ({
                render: () => `<div class="text-center">${row.getValue("di")}</div>`,
            }));

            return renderSnippet(
                amountHeaderSnippet,
                ""
            );
        },
        sortingFn: "alphanumeric",
        filterFn: (row, columnId, filterValue) => myMultiNumberFilter(row, filterValue, 'di'),
    },
    {
        accessorKey: 'frm',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'frm',
                tooltip: 'formation',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        cell: ({ row }) => {
            const amountHeaderSnippet = createRawSnippet(() => ({
                render: () => `<div class="text-center">${row.getValue("frm")}</div>`,
            }));

            return renderSnippet(
                amountHeaderSnippet,
                ""
            );
        },
        filterFn: (row, columnId, filterValue) => myMultiTextFilter(row, filterValue, 'frm'),
    },
    {
        accessorKey: 'str',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'str',
                tooltip: 'strong side',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        cell: ({ row }) => {
            const amountHeaderSnippet = createRawSnippet(() => ({
                render: () => `<div class="text-center">${row.getValue("str")}</div>`,
            }));

            return renderSnippet(
                amountHeaderSnippet,
                ""
            );
        },
        filterFn: (row, columnId, filterValue) => myMultiTextFilter(row, filterValue, 'str'),
    },
    {
        accessorKey: 'qbs',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'qbs',
                tooltip: 'qb stance',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        cell: ({ row }) => {
            const amountHeaderSnippet = createRawSnippet(() => ({
                render: () => `<div class="text-center">${row.getValue("qbs")}</div>`,
            }));

            return renderSnippet(
                amountHeaderSnippet,
                ""
            );
        },
        filterFn: (row, columnId, filterValue) => myMultiTextFilter(row, filterValue, 'qbs'),
    },
    {
        accessorKey: 'qn',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'qn',
                tooltip: 'qb number',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        cell: ({ row }) => {
            const amountHeaderSnippet = createRawSnippet(() => ({
                render: () => `<div class="text-center">${row.getValue("qn")}</div>`,
            }));

            return renderSnippet(
                amountHeaderSnippet,
                ""
            );
        },
        sortingFn: "alphanumeric",
        filterFn: (row, columnId, filterValue) => myMultiNumberFilter(row, filterValue, 'qn'),
    },
    {
        accessorKey: 'lt',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'lt',
                tooltip: 'lt number',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        cell: ({ row }) => {
            const amountHeaderSnippet = createRawSnippet(() => ({
                render: () => `<div class="text-center">${row.getValue("lt")}</div>`,
            }));

            return renderSnippet(
                amountHeaderSnippet,
                ""
            );
        },
        sortingFn: "alphanumeric",
        filterFn: (row, columnId, filterValue) => myMultiNumberFilter(row, filterValue, 'lt'),
    },
    {
        accessorKey: 'lg',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'lg',
                tooltip: 'lg number',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        cell: ({ row }) => {
            const amountHeaderSnippet = createRawSnippet(() => ({
                render: () => `<div class="text-center">${row.getValue("lg")}</div>`,
            }));

            return renderSnippet(
                amountHeaderSnippet,
                ""
            );
        },
        sortingFn: "alphanumeric",
        filterFn: (row, columnId, filterValue) => myMultiNumberFilter(row, filterValue, 'lg'),
    },
    {
        accessorKey: 'ct',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'ct',
                tooltip: 'ct number',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        cell: ({ row }) => {
            const amountHeaderSnippet = createRawSnippet(() => ({
                render: () => `<div class="text-center">${row.getValue("ct")}</div>`,
            }));

            return renderSnippet(
                amountHeaderSnippet,
                ""
            );
        },
        sortingFn: "alphanumeric",
        filterFn: (row, columnId, filterValue) => myMultiNumberFilter(row, filterValue, 'ct'),
    },
    {
        accessorKey: 'rg',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'rg',
                tooltip: 'rg number',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        cell: ({ row }) => {
            const amountHeaderSnippet = createRawSnippet(() => ({
                render: () => `<div class="text-center">${row.getValue("rg")}</div>`,
            }));

            return renderSnippet(
                amountHeaderSnippet,
                ""
            );
        },
        sortingFn: "alphanumeric",
        filterFn: (row, columnId, filterValue) => myMultiNumberFilter(row, filterValue, 'rg'),
    },
    {
        accessorKey: 'rt',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'rt',
                tooltip: 'rt number',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        cell: ({ row }) => {
            const amountHeaderSnippet = createRawSnippet(() => ({
                render: () => `<div class="text-center">${row.getValue("rt")}</div>`,
            }));

            return renderSnippet(
                amountHeaderSnippet,
                ""
            );
        },
        sortingFn: "alphanumeric",
        filterFn: (row, columnId, filterValue) => myMultiNumberFilter(row, filterValue, 'rt'),
    },
    {
        accessorKey: 'tn',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'tn',
                tooltip: 't number',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        cell: ({ row }) => {
            const amountHeaderSnippet = createRawSnippet(() => ({
                render: () => `<div class="text-center">${row.getValue("tn")}</div>`,
            }));

            return renderSnippet(
                amountHeaderSnippet,
                ""
            );
        },
        sortingFn: "alphanumeric",
        filterFn: (row, columnId, filterValue) => myMultiNumberFilter(row, filterValue, 'tn'),
    },
    {
        accessorKey: 'xn',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'xn',
                tooltip: 'x number',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        cell: ({ row }) => {
            const amountHeaderSnippet = createRawSnippet(() => ({
                render: () => `<div class="text-center">${row.getValue("xn")}</div>`,
            }));

            return renderSnippet(
                amountHeaderSnippet,
                ""
            );
        },
        sortingFn: "alphanumeric",
        filterFn: (row, columnId, filterValue) => myMultiNumberFilter(row, filterValue, 'xn'),
    },
    {
        accessorKey: 'yn',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'yn',
                tooltip: 'y number',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        cell: ({ row }) => {
            const amountHeaderSnippet = createRawSnippet(() => ({
                render: () => `<div class="text-center">${row.getValue("yn")}</div>`,
            }));

            return renderSnippet(
                amountHeaderSnippet,
                ""
            );
        },
        sortingFn: "alphanumeric",
        filterFn: (row, columnId, filterValue) => myMultiNumberFilter(row, filterValue, 'yn'),
    },
    {
        accessorKey: 'hn',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'hn',
                tooltip: 'h number',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        cell: ({ row }) => {
            const amountHeaderSnippet = createRawSnippet(() => ({
                render: () => `<div class="text-center">${row.getValue("hn")}</div>`,
            }));

            return renderSnippet(
                amountHeaderSnippet,
                ""
            );
        },
        sortingFn: "alphanumeric",
        filterFn: (row, columnId, filterValue) => myMultiNumberFilter(row, filterValue, 'hn'),
    },
    {
        accessorKey: 'zn',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'zn',
                tooltip: 'z number',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        cell: ({ row }) => {
            const amountHeaderSnippet = createRawSnippet(() => ({
                render: () => `<div class="text-center">${row.getValue("zn")}</div>`,
            }));

            return renderSnippet(
                amountHeaderSnippet,
                ""
            );
        },
        sortingFn: "alphanumeric",
        filterFn: (row, columnId, filterValue) => myMultiNumberFilter(row, filterValue, 'zn'),
    },
    {
        accessorKey: 'mp',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'mp',
                tooltip: 'motion player',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        cell: ({ row }) => {
            const amountHeaderSnippet = createRawSnippet(() => ({
                render: () => `<div class="text-center">${row.getValue("mp")}</div>`,
            }));

            return renderSnippet(
                amountHeaderSnippet,
                ""
            );
        },
        filterFn: (row, columnId, filterValue) => myMultiTextFilter(row, filterValue, 'mp'),
    },
    {
        accessorKey: 'mt',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'mt',
                tooltip: 'motion type',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        filterFn: (row, columnId, filterValue) => myMultiTextFilter(row, filterValue, 'mt'),
    },
    {
        accessorKey: 'pt',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'pt',
                tooltip: 'play type',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        cell: ({ row }) => {
            const amountHeaderSnippet = createRawSnippet(() => ({
                render: () => `<div class="text-center">${row.getValue("pt")}</div>`,
            }));

            return renderSnippet(
                amountHeaderSnippet,
                ""
            );
        },
        filterFn: (row, columnId, filterValue) => myMultiTextFilter(row, filterValue, 'pt'),
    },
    {
        accessorKey: 'bs',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'bs',
                tooltip: 'blocking scheme',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
                class: 'w-16',
            }),
        filterFn: (row, columnId, filterValue) => myMultiTextFilter(row, filterValue, 'bs'),
    },
    {
        accessorKey: 'qa',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'qa',
                tooltip: 'qb action',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
                class: 'w-16',
            }),
        filterFn: (row, columnId, filterValue) => myMultiTextFilter(row, filterValue, 'qa'),
    },
    {
        accessorKey: 'ta',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'ta',
                tooltip: 't action',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
                class: 'w-16',
            }),
        filterFn: (row, columnId, filterValue) => myMultiTextFilter(row, filterValue, 'ta'),
    },
    {
        accessorKey: 'xa',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'xa',
                tooltip: 'x action',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
                class: 'w-16',
            }),
        filterFn: (row, columnId, filterValue) => myMultiTextFilter(row, filterValue, 'xa'),
    },
    {
        accessorKey: 'ya', header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'ya',
                tooltip: 'y action',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
                class: 'w-16',
            }),
        filterFn: (row, columnId, filterValue) => myMultiTextFilter(row, filterValue, 'ya'),
    },
    {
        accessorKey: 'ha', header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'ha',
                tooltip: 'h action',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
                class: 'w-16',
            }),
        filterFn: (row, columnId, filterValue) => myMultiTextFilter(row, filterValue, 'ha'),
    },
    {
        accessorKey: 'za', header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'za',
                tooltip: 'z action',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
                class: 'w-16',
            }),
        filterFn: (row, columnId, filterValue) => myMultiTextFilter(row, filterValue, 'za'),
    },
    {
        accessorKey: 'tt', header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'tt',
                tooltip: 'target',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        cell: ({ row }) => {
            const amountHeaderSnippet = createRawSnippet(() => ({
                render: () => `<div class="text-center">${row.getValue("tt")}</div>`,
            }));

            return renderSnippet(
                amountHeaderSnippet,
                ""
            );
        },
        filterFn: (row, columnId, filterValue) => myMultiTextFilter(row, filterValue, 'tt'),
    },
    {
        accessorKey: 'rn', header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'rn',
                tooltip: 'receiver number',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        cell: ({ row }) => {
            const amountHeaderSnippet = createRawSnippet(() => ({
                render: () => `<div class="text-center">${row.getValue("rn")}</div>`,
            }));

            return renderSnippet(
                amountHeaderSnippet,
                ""
            );
        },
        sortingFn: "alphanumeric",
        filterFn: (row, columnId, filterValue) => myMultiNumberFilter(row, filterValue, 'pn'),
    },
    {
        accessorKey: 'ctch', header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'ctch',
                tooltip: 'catched',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        filterFn: (row, columnId, filterValue) => myMultiTextFilter(row, filterValue, 'ctch'),
    },
    {
        accessorKey: 'cmt', header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'cmt',
                tooltip: 'comment',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
        cell: ({ row }) => {
            const amountHeaderSnippet = createRawSnippet(() => ({
                render: () => `<div class="text-left w-96">${row.getValue("cmt")}</div>`,
            }));

            return renderSnippet(
                amountHeaderSnippet,
                ""
            );
        },
        filterFn: (row, columnId, filterValue) => myMultiTextFilter(row, filterValue, 'cmt'),
    },
];