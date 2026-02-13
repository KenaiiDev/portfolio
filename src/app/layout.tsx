import type { Metadata } from "next";
import "./[locale]/globals.css";

export const metadata: Metadata = {
  title: "Lucas Villanueva - Full Stack Developer",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
