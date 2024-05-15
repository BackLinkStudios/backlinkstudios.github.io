"use client";
import handleViewport, { type InjectedViewportProps } from "react-in-viewport";
import "./styles.scss";
import { FcAbout } from "react-icons/fc";

const Stats = handleViewport(
    (props: InjectedViewportProps<HTMLDivElement>) => {
        const { inViewport, forwardedRef, enterCount } = props;
        return (
            <div ref={forwardedRef} className={`col-xs-12 col-sm-12 col-md-6 col-lg-6 counter-item-wrap-three ${inViewport && enterCount === 1 ? "animate__animated animate__fadeInRight animate__slow" : ""}`}>
                <ul className="list-wrap">
                    <li>
                        <div className="counter-item-three">
                            <h2 className="count">30+</h2>
                            <p>Employees</p>
                        </div>
                    </li>
                    <li>
                        <div className="counter-item-three">
                            <h2 className="count">15K</h2>
                            <p>Websites</p>
                        </div>
                    </li>
                    <li>
                        <div className="counter-item-three">
                            <h2 className="count">5K</h2>
                            <p>Links Build</p>
                        </div>
                    </li>
                    <li>
                        <div className="counter-item-three">
                            <h2 className="count">300+</h2>
                            <p>Clients Worldwide</p>
                        </div>
                    </li>
                </ul>
            </div>
        );
    } /**, options: {}, config: {} **/
);

export default function About() {
    return (
        <>
            <div className="container _._mt-10">
                <h2 className="h2_text _._text-center _._text-wrap animate__animated animate__flipInX animate__slower">
                    <FcAbout style={{ display: "inline-block", marginTop: "-15px", marginRight: "5px" }} />
                    About
                    <span className="gradient_text">Backlink Studios</span>
                </h2>
            </div>
            <div className="container _._mx-auto _._px-5 _._mt-40">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 animate__animated animate__fadeInLeft animate__slow">
                        <h2 className="_._text-[34px] md:_._text-[38px]">Welcome to BacklinkStudios.com</h2>
                        <div className="_._text-lg _._text-white/60">Here, we offer the best services that will ensure a boost to your ranking. We are digital specialists who help re-known brands push their brands beyond boundaries. We help our clients achieve this by ensuring best practices, such as using the best marketing techniques and data-driven insights and developing processes that unlock their business growth. We provide solutions and ideas for upgrading your business and taking it to the next level. We have the best project management software, digital marketing tools, and reporting tools that give them complete visibility over what we do and how it impacts their business. We love what we do, especially if it concerns pushing new technology. We have been in operation for a while and have created a bond with our clients. The number of our clients keeps growing daily. Currently, we have over 1000+ clients and over 150+ completed projects. We are passionate about creating the best strategies that help our customers reach their potential and push their products beyond borders.</div>
                    </div>
                    <Stats />
                </div>
            </div>
        </>
    );
}
