"use client";

import { useEffect, useState } from "react";
import { EditSettingsModal } from "../modals/edit-settings-modal";
import { CreateVarModal } from "../modals/create-env-var";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <EditSettingsModal />
      <CreateVarModal />
    </>
  )
}