import { Poppins, Roboto, DM_Mono, Quicksand, Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/molecules/Navbar";


// Additional fonts
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Quick JSON | JSON Schema Builder Tool",
  description: "Create and manage JSON schemas effortlessly with Quick JSON. A modern, user-friendly tool for building, validating, and exporting JSON structures.",
  keywords: ["JSON", "schema builder", "JSON validator", "JSON tool", "Quick JSON"],
  authors: [{ name: "Quick JSON" }],
  creator: "Quick JSON",
  publisher: "Quick JSON",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://quick-json.example.com",
    title: "Quick JSON Schema Builder",
    description: "Create and manage JSON schemas effortlessly with Quick JSON.",
    images: [
      {
        url: "https://quick-json.example.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quick JSON Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quick JSON Schema Builder",
    description: "Create and manage JSON schemas effortlessly.",
    images: ["https://quick-json.example.com/twitter-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${poppins.variable}
          ${roboto.variable}
          ${dmMono.variable}
          ${quicksand.variable}
          ${ubuntu.variable}
          antialiased
          custom-scroll
          md:h-auto h-dvh
        `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
