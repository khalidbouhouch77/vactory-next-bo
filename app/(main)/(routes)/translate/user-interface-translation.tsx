"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DataTable } from "./translations/data-table";
import { columns } from "./translations/columns";
import { useState } from "react";

const formSchema = z.object({});

export default function UserInterfaceTranlsation() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stringContains: "",
      translationLanguage: "",
      searchIn: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {};

  const isLoading = form.formState.isSubmitting;

  const [data, setData] = useState([
    {
      'source_string': 'test',
      'translation': 'dsds'
    },
    {
      'source_string': 'Nx:sign in',
      'translation': ''
    }
  ]);

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="stringContains"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                  Project name
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="Enter searched keyword"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="translationLanguage"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                  Translation language
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a language" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="ar">Arabic</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="fr">Frensh</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="searchIn"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                  Search in
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Search in" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="all">
                      Both translated and untranslated strings
                    </SelectItem>
                    <SelectItem value="translated">
                      Only translated strings
                    </SelectItem>
                    <SelectItem value="untranslated">
                      Only untranslated strings
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isLoading}>Filter</Button>
        </form>
      </Form>
      <div className="mt-4">
        <DataTable columns={columns} data={data} />
        <Button className="mt-2" variant='destructive'>Save translations</Button>
      </div>
    </div>
  );
}
