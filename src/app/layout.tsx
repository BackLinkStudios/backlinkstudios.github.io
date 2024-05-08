import type { Metadata } from "next";
import { Inter, Outfit, Nanum_Gothic, Prompt } from "next/font/google";
import "./globals.scss";
import "animate.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });
const prompt_font = Prompt({
    subsets: ["latin"],
    weight: "400"
});
const Nanum_Gothic_font = Nanum_Gothic({
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
    title: "BS",
    description: "Backlink Studios | Search Engine Optimization,Copywriting,Backlinking,Link Building,Guest Blogging,Niche Edits",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${prompt_font.className} _._text-slate-200 _._text-[1.1rem]`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
