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
            <div className="tw-boredr tw-border-b-2 tw-border-fuchsia-600/20">
                <div className="tw-container tw-mx-auto tw-flex tw-justify-end">
                    <div className="tw-p-3 tw-text-lg tw-font-semibold">+91 1234567890</div>
                    <div className="tw-p-3 tw-text-lg tw-font-semibold">email@domain.com</div>
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-flex tw-flex-wrap md:tw-justify-between tw-justify-center tw-p-5">
                <Link href="/" className="tw-flex title-font tw-font-medium tw-items-center tw-text-gray-900 tw-mb-4">
                    <img src="/logo.png" alt="logo" width="200px" height="auto" />
                    {/* <div className="logo_text">
                        <span className="text-[#fe5855]">Back</span>
                        <span className="text-[#6721ff]">Link</span>Studio.com
                    </div> */}
                </Link>
                <div className="tw-flex tw-flex-wrap tw-items-center tw-text-base tw-justify-center">
                    {NavLinks.map((nav, i) => {
                        return (
                            <Link key={i} href={nav.path} className={`tw-m-5 tw-text-nowrap ${pathName === nav.path ? "tw-text-[#6721ff]" : "tw-text-white"} tw-text-xl tw-font-semibold hover:tw-text-[#6721ff]`}>
                                {nav.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}
