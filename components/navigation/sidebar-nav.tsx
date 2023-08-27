import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SideBarItem } from "@/components/navigation/sidebar-item";
import prisma from "./../../lib/prisma";
import { redirect } from "next/navigation";
import { SideBarSettingsAction } from "@/components/navigation/sidebar-settings-action";

const sidebarNavItems = [
  {
    title: "variables d'envirenement",
    href: "/env-vars",
  },
  {
    title: "translate",
    href: "/translate",
  },
];

const SidebarNav = async () => {

  const settings = await prisma.settings.findFirst();

  if (!settings) {
    return redirect(`/`);
  }

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1"
      )}
    >
      {sidebarNavItems.map((item) => (
        <SideBarItem item={item} />
      ))}

      <SideBarSettingsAction settings={settings} />
    </nav>
  );
}

export default SidebarNav