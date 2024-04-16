import { NavLinks } from "@/components/NavLinks";
import Link from "next/link";
import "./Footer.scss";

export default function Footer() {
    return (
        <footer>
            {/* BackLinkStudios.com &copy; 2024 */}
            <div className="container">
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                        <div className="footer-widget">
                            <h4 className="fw-title">BackLinkStudios</h4>
                            <div className="footer-link">At BackLinkStudios, we are not just about making profits. We aim to see our clients prosper and their busiWelcome to the link seller; here, we offer the best services that will ensure a boost to your ranking.</div>
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
                            <div className="footer-contact">Bankura (West Bengal India) 722137 +91 9800358963 thelinkseller@gmail.com</div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <h2 className="gradient_text">BackLinkStudios.com</h2>
                    </div>
                </div>
            </div>
        </footer>
    );
}
