"use client";
import axios from "axios";

import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useModal } from "@/hooks/use-modal-store";
import { useRouter } from "next/navigation";

export default function CreateEnvVars({ data }) {
  const { toast } = useToast();
  const { onOpen } = useModal();
  const router = useRouter();

  const modifiedData = data
    ? data.map((item) => {
        return {
          identifiant: item.id,
          varKey: item.varKey,
          varValue: item.varValue,
        };
      })
    : [];

  console.log({ modifiedData });

  const removeItem = async (id) => {
    try {
      await axios.delete(`/api/vars/${id}`);
      toast({
        title: "Nice.",
        description: "Your env var was successfully deleted.",
      });
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button
        variant="outline"
        type="button"
        onClick={() => onOpen("addEnvVar", {})}
        className="self-end"
      >
        Add
      </Button>
      {modifiedData?.map(({ varKey, identifiant }) => {
        return (
          <div>
            <div>
              {varKey}
              <Button
                variant="destructive"
                type="button"
                onClick={() => removeItem(identifiant)}
              >
                Remove
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
}
