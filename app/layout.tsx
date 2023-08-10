import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SidebarNav } from "@/components/sidebar-nav";
import { Separator } from "@/components/ui/separator"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="hidden space-y-6 p-10 pb-16 md:block">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">VACTORY V4 - NEXT BACK OFFICE</h2>
            <p className="text-muted-foreground">
              Back office front
            </p>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside className="-mx-4 lg:w-1/5">
              <SidebarNav items={sidebarNavItems} />
            </aside>
            <div className="flex-1 lg:max-w-2xl">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
