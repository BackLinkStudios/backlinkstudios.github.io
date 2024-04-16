"use client";
import Link from "next/link";
import "./Header.scss";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/components/NavLinks";
// import logo from "../../../public/logo.png";
// import logo from './logo.png';
// import Image from "next/image";
export default function Header() {
    const pathName = usePathname();
    return (
        <header>
            <div className="boredr border-b-2 border-fuchsia-600/20">
                <div className="container mx-auto flex justify-end">
                    <div className="p-3 text-lg font-semibold">+91 1234567890</div>
                    <div className="p-3 text-lg font-semibold">email@domain.com</div>
                </div>
            </div>
            <div className="container mx-auto flex flex-wrap md:justify-between justify-center p-5">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4">
                    <img src="/logo.png" alt="logo" width="200px" height="auto" />
                    {/* <div className="logo_text">
                        <span className="text-[#fe5855]">Back</span>
                        <span className="text-[#6721ff]">Link</span>Studio.com
                    </div> */}
                </Link>
                <div className="flex flex-wrap items-center text-base justify-center">
                    {NavLinks.map((nav, i) => {
                        return (
                            <Link key={i} href={nav.path} className={`m-5 text-nowrap ${pathName === nav.path ? "text-[#6721ff]" : "text-white"} text-xl font-semibold hover:text-[#6721ff]`}>
                                {nav.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}
