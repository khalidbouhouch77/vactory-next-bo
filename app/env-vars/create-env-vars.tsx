"use client";

import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, useFieldArray } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

export default function CreateEnvVars({ data }) {
  const { toast } = useToast();
  const modifiedData = data
    ? data.map((item) => {
        return {
          identifiant: item.id,
          varKey: item.varKey,
          varValue: item.varValue,
        };
      })
    : [];

  const { register, control, handleSubmit, formState } = useForm({
    defaultValues: { envVars: modifiedData ?? [] },
  });

  const { isSubmitting } = formState;

  const { fields, remove, append } = useFieldArray({
    control,
    name: "envVars",
  });

  const registerSubmit = async (data: []) => {
    try {
      await fetch(`/api/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      toast({
        title: "Nice.",
        description: "You values was successfully submitted.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  const removeItem = async (index: string, identifiant) => {
    remove(index);
    // RAF : delete the record on DB if exist.
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">SUBMIT</h3>
        <p className="text-sm text-muted-foreground">
          Enter to each key a value
        </p>
      </div>
      <Separator />
      <form onSubmit={handleSubmit(registerSubmit)}>
        <div className="flex flex-col gap-3">
          <Button
            variant="outline"
            type="button"
            disabled={isSubmitting}
            onClick={() => append({})}
            className="self-end"
          >
            Add
          </Button>
          {fields.map(({ id, identifiant, varKey, varValue }, index) => (
            <div key={id} className="flex gap-3">
              <Input
                {...register(`envVars[${index}].identifiant`)}
                defaultValue={identifiant}
                type="hidden"
              />
              <Input
                {...register(`envVars[${index}].varKey`)}
                placeholder="key"
                disabled={isSubmitting}
                defaultValue={varKey}
                type="text"
              />
              <Input
                {...register(`envVars[${index}].varValue`)}
                placeholder="value"
                disabled={isSubmitting}
                defaultValue={varValue}
                type="text"
              />
              <Button
                variant="destructive"
                type="button"
                disabled={isSubmitting}
                onClick={() => removeItem(index, identifiant)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button disabled={isSubmitting} type="submit">
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save On MongoDb
          </Button>
        </div>
      </form>
    </div>
  );
}
