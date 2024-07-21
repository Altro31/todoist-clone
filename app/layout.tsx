import type { Metadata } from "next";
import "../globals.css";
import { LateralBar } from "@/components/nav";

export const metadata: Metadata = {
  title: "Todoist Clone",
  description: "Todoist Clone made with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        <LateralBar className="basis-72 has-[#dock:checked]:basis-5 transition-[flex-basis] duration-500" />
        {children}
      </body>
    </html>
  );
}
