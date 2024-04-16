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
            <div className="___boredr ___border-b-2 ___border-fuchsia-600/20">
                <div className="___container ___mx-auto ___flex ___justify-end">
                    <div className="___p-3 ___text-lg ___font-semibold">+91 1234567890</div>
                    <div className="___p-3 ___text-lg ___font-semibold">email@domain.com</div>
                </div>
            </div>
            <div className="___container ___mx-auto ___flex ___flex-wrap md:___justify-between ___justify-center ___p-5">
                <Link href="/" className="___flex title-font ___font-medium ___items-center ___text-gray-900 ___mb-4">
                    <img src="/logo.png" alt="logo" width="200px" height="auto" />
                    {/* <div className="logo_text">
                        <span className="text-[#fe5855]">Back</span>
                        <span className="text-[#6721ff]">Link</span>Studio.com
                    </div> */}
                </Link>
                <div className="___flex ___flex-wrap ___items-center ___text-base ___justify-center">
                    {NavLinks.map((nav, i) => {
                        return (
                            <Link key={i} href={nav.path} className={`___m-5 ___text-nowrap ${pathName === nav.path ? "___text-[#6721ff]" : "___text-white"} ___text-xl ___font-semibold hover:___text-[#6721ff]`}>
                                {nav.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}
