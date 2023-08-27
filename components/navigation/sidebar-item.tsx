"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface NavigationItemProps {
  title: string;
  href: string;
}

export const SideBarItem = ({ item }: { item: NavigationItemProps }) => {
  const pathname = usePathname();
  return (
    <Link
      key={item.href}
      href={item.href}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        pathname === item.href
          ? "bg-muted hover:bg-muted"
          : "hover:bg-transparent hover:underline",
        "justify-start"
      )}
    >
      {item.title}
    </Link>
  );
};
