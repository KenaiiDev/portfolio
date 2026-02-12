import localFont from "next/font/local";
import { JetBrains_Mono, Fira_Code } from "next/font/google";
import { AnimationProvider } from "@/contexts/AnimationContext";
import { getBlobSources } from "@/lib/getBlobSources";
import Background from "@/components/background";
import "./[locale]/globals.css";

const Renogare = localFont({
  src: "../../public/fonts/Renogare-Regular.otf",
  display: "swap",
  variable: "--font-renogare",
});

const blobSources = await getBlobSources();

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-firacode",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${Renogare.className} ${jetBrainsMono.variable} ${firaCode.variable}`}
    >
      <body className="bg-periwinkle-gray-950">
        <AnimationProvider>
          <main className="w-full min-h-screen overflow-x-hidden relative">
            <Background blobSources={blobSources} />
            {children}
          </main>
        </AnimationProvider>
      </body>
    </html>
  );
}
