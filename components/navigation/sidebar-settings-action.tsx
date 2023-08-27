"use client";

import { Plus } from "lucide-react";
import { Settings } from "@prisma/client"
import { useModal } from "@/hooks/use-modal-store";
import { Button } from "@/components/ui/button";

export const SideBarSettingsAction = ({settings}: {settings: Settings}) => {
  const { onOpen } = useModal();

  return (
    <div>
        <Button
          onClick={() => onOpen("editSettings", {settings})}
          variant="destructive"
          className="w-100"
        >
          Edit Settings
        </Button>
    </div>
  )
}