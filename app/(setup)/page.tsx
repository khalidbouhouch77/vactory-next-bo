import { redirect } from "next/navigation";

import prisma from "./../../lib/prisma";
import { CreateSettingsModal } from "@/components/modals/create-settings-modal";

const SetupPage = async () => {

  const settings = await prisma.settings.findFirst();

  if (settings) {
    return redirect(`/env-vars`);
  }

  return <CreateSettingsModal />
}
 
export default SetupPage;