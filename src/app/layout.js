import { Geist, Geist_Mono, Libre_Baskerville, Nunito } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/components/provider/StoreProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400'], 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const libre = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'], // Available weights
  variable: '--font-libre',
})

export const metadata = {
  title: "Learning management",
  description: "learning menegement system for student",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${nunito.className} ${geistMono.variable} ${libre.variable} antialiased`} >
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
