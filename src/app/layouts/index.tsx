import "../styles";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { MainMenu } from "@/widgets";
import { queryClient } from "@/shared/api";
import { cn } from "@/shared/lib/utils";
import { Toaster } from "@/shared/ui/toaster";
import { QueryProvider } from "../providers/query-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies app",
  description: "Top movies imdb",
};

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("mb-11 sm:mb-3 sm:mt-11", inter.className)}>
        <QueryProvider client={queryClient}>
          <MainMenu />
          {children}
        </QueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
