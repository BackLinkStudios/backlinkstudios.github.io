"use client";
import type { Metadata } from "next";
import Link from "next/link";
import { Container, Row } from "react-bootstrap";
import { usePathname } from "next/navigation";
import { Services } from "@/components/ServiceList";

const metadata: Metadata = {
    title: "Offered Services : BacklinkStudios.com",
    description: "Backlink Studios | Search Engine Optimization,Copywriting,Backlinking,Link Building,Guest Blogging,Niche Edits",
};

function getCurrentService(path: string | null) {
    return Services.filter((s) => path?.includes(s.link))[0];
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathName = usePathname();
    const service = getCurrentService(pathName);
    return (
        <>
            <Container className="_._mt-5">
                <Row>
                    <b>Services{!!service ? ` / ${service?.heading}` : ""}</b>
                </Row>
            </Container>
            {children}
            <center>
                <Link href="/offered-services" type="button" className="_._p-4">
                    Back to services
                </Link>
            </center>
        </>
    );
}
