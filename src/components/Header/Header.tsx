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
            <div className="_._boredr _._border-b-2 _._border-fuchsia-600/20">
                <div className="_._container _._mx-auto _._flex _._justify-end">
                    <div className="_._p-3 _._text-md md:_._text-lg _._font-semibold">+91 1234567890</div>
                    <div className="_._p-3 _._text-md md:_._text-lg _._font-semibold">email@domain.com</div>
                </div>
            </div>
            <div className="container _._flex _._flex-wrap md:_._justify-between _._justify-center _._p-2 _._md:p-5">
                <Link href="/" className="_._flex title-font _._font-medium _._items-center _._text-gray-900 _._mb-4">
                    <img src="/logo.png" alt="logo" width="200px" height="auto" />
                    {/* <div className="logo_text">
                        <span className="text-[#fe5855]">Back</span>
                        <span className="text-[#6721ff]">Link</span>Studio.com
                    </div> */}
                </Link>
                <div className="_._flex _._flex-wrap _._items-center _._text-base _._justify-center">
                    {NavLinks.map((nav, i) => {
                        return (
                            <Link key={i} href={nav.path} className={`_._m-1.5 md:_._m-3 _._text-nowrap _._leading-none ${pathName === nav.path ? "_._text-[#6721ff]" : "_._text-white"} _._text-sm md:_._text-xl _._font-semibold hover:_._text-[#6721ff]`}>
                                <nav.icon style={{ display: "inline-block", marginTop: "-6px", marginRight: "2px" }} />
                                {nav.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}
