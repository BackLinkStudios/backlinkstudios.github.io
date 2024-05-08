import { NavLinks } from "@/components/NavLinks";
import Link from "next/link";
import "./Footer.scss";

export default function Footer() {
    return (
        <>
            <footer className="_._text-lg">
                <div className="container _._py-5">
                    <div className="row">
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="fw-title">Backlink Studios</h4>
                                <div className="footer-link">At Backlink Studios, we are not just about making profits. We aim to see our clients prosper and their busiWelcome to Backlink Studios; here, we offer the best services that will ensure a boost to your ranking.</div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="fw-title">Quick Links</h4>
                                <div className="footer-link">
                                    <ul className="list-wrap">
                                        {NavLinks.map((nav, i) => {
                                            return (
                                                <li key={i}>
                                                    <Link href={nav.path} className={`text-[#6721ff] hover:text-[#6721ff]`}>
                                                        {nav.name}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="fw-title">Services</h4>
                                <div className="footer-link">
                                    <ul className="list-wrap">
                                        <li>SEO</li>
                                        <li>Copywriting Services</li>
                                        <li>Linkbuilding Services</li>
                                        <li>Backlink Services</li>
                                        <li>Niche Edits</li>
                                        <li>Guest Blogging</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="fw-title">Office</h4>
                                <div className="footer-link">
                                    <ul className="list-wrap">
                                        <li>Bankura (West Bengal India) 722137</li>
                                        <li>+91 9800358963</li>
                                        <li>thelinkseller@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <h2 className="gradient_text">BacklinkStudios.com</h2>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="_._bg-[#12032F] _._py-3">
                <div className="container _._font-semibold">Copyright © 2024 Reserved by | BacklinkStudios.com</div>
            </div>
        </>
    );
}
