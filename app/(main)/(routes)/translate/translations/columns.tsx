"use client";

import { Input } from "@/components/ui/input";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Tranlsation = {
  source_string: string;
  translation: string;
};

export const columns: ColumnDef<Tranlsation>[] = [
  {
    accessorKey: "source_string",
    header: "Source string",
  },
  {
    accessorKey: "translation",
    header: "Translation",
    cell: ({ row }) => <Input value={row.getValue("translation")} />,
  },
];
