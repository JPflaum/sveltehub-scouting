import type { ColumnDef } from "@tanstack/table-core";
import type { Row } from "$lib/types/types";
import { createRawSnippet } from "svelte";
import { renderSnippet, renderComponent } from "$lib/components/ui/data-table/index";
import AppTableButtonSort from '$lib/components/ui/app-table/app-table-button-sort.svelte';

export const columns: ColumnDef<Row>[] = [
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
    },
    {
        accessorKey: 'mt',
        header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'mt',
                tooltip: 'motion type',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
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
        }
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
    },
    {
        accessorKey: 'ya', header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'ya',
                tooltip: 'y action',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
                class: 'w-16',
            }),
    },
    {
        accessorKey: 'ha', header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'ha',
                tooltip: 'h action',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
                class: 'w-16',
            }),
    },
    {
        accessorKey: 'za', header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'za',
                tooltip: 'z action',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
                class: 'w-16',
            }),
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
        }
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
        }
    },
    {
        accessorKey: 'ctch', header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'ctch',
                tooltip: 'catched',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
    },
    {
        accessorKey: 'cmt', header: ({ column }) =>
            renderComponent(AppTableButtonSort, {
                text: 'cmt',
                tooltip: 'comment',
                onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
            }),
    },
];