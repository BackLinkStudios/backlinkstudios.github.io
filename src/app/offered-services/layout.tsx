import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Offered Services : BacklinkStudios.com",
    description: "Backlink Studios | Search Engine Optimization,Copywriting,Backlinking,Link Building,Guest Blogging,Niche Edits",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
            <center>
                <Link href="/offered-services" type="button" className="_._p-4">Back to services</Link>
            </center>
        </>
    );
}
