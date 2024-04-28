import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.scss";
import "animate.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "BS",
    description: "BacklinkStudios | Search Engine Optimization,Copywriting,Backlinking,Link Building,Guest Blogging,Niche Edits",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${outfit.className} _._text-slate-200`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
