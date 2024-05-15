"use client";
import Link from "next/link";
import "./Header.scss";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/components/NavLinks";
import { ExampleLogo } from "../ExampleLogo/ExampleLogo";
import { motion } from "framer-motion";
// import logo from "../../../public/logo.png";
// import logo from './logo.png';
// import Image from "next/image";
export default function Header() {
    const pathName = usePathname();
    return (
        <header>
            <div className="_._boredr _._border-b-2 _._border-fuchsia-600/20">
                <div className="_._container _._mx-auto _._flex _._justify-end _._text-sm">
                    <div className="_._p-3 _._text-md md:_._text-lg _._font-semibold">+91 9800358963</div>
                    <div className="_._p-3 _._text-md md:_._text-lg _._font-semibold">thelinkseller@gmail.com</div>
                </div>
            </div>
            <div className="container _._flex _._flex-wrap md:_._justify-between _._justify-center _._p-2 _._md:p-5">
                <Link href="/" className="_._flex title-font _._font-medium _._items-center _._text-gray-900 _._mb-4">
                    <img src="/new_logo.png" alt="logo" width="200px" height="auto" className="animate__animated animate__backInLeft animate__faster`" />
                    {/* <ExampleLogo /> */}
                    {/* <div className="logo_text">
                        <span className="_._text-[#fe5855]">Back</span>
                        <span className="_._text-[#6721ff]">Link</span>Studio.com
                    </div> */}
                    {/* <span className="large">B</span>
                    <span className="large S">S</span>
                    <span className="nor-text Backlink">Backlink</span>
                    <span className="nor-text Studios">Studios</span> */}
                </Link>
                <div className="_._flex _._flex-wrap _._items-center _._text-base _._justify-center">
                    {NavLinks.map((nav, i) => {
                        return (
                            <motion.span key={i} className="span" whileHover={{ scale: 1.2 }}>
                                <Link href={nav.path} className={`axa _._m-1.5 _._pb-1 md:_._m-3 _._text-nowrap _._leading-none ${pathName === nav.path ? "active-link" : "_._text-white/90"} _._text-sm md:_._text-lg _._font-semibold hover:_._text-[#6721ff] animate__animated animate__bounceInDown animate__fast`}>
                                    <nav.icon style={{ display: "inline-block", marginTop: "-6px", marginRight: "2px" }} />
                                    {nav.name}
                                </Link>
                            </motion.span>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}
