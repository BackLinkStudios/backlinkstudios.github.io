/* eslint-disable @next/next/no-img-element */
"use client";
import handleViewport, { type InjectedViewportProps } from "react-in-viewport";
import "./styles.scss";
import { PiFacebookLogo, PiTwitterLogo, PiLinkedinLogo, PiEnvelopeSimple } from "react-icons/pi";
import { FaSkype } from "react-icons/fa6";
import { Members } from "@/components/Members";
import { FcBusinessman } from "react-icons/fc";

const Member = handleViewport(
    (props: any) => {
        const { inViewport, forwardedRef, enterCount, mem } = props;
        return (
            <div ref={forwardedRef} className={`col-lg-4 col-md-6 mb-5 ${inViewport && enterCount === 1 ? "animate__animated animate__flipInX animate__slow" : ""}`}>
                <div className="card border-0 bg-transparent">
                    <center>
                        <img src={`/team/${mem.photo}`} alt={mem.name} className="img-fluid _._rounded-full" />
                        <div className="card-body mt-2 ">
                            <div className="blog-item-meta">
                                <a href={`mailto:${mem.email}`} className="text-white-50 _._ml-2 _._inline-block _._text-xl">
                                    <PiEnvelopeSimple />
                                </a>
                                <a href={mem.linkendin} className="text-white-50 _._ml-2 _._inline-block _._text-xl">
                                    <PiLinkedinLogo />
                                </a>
                                <a href={mem.facebook} className="text-white-50 _._ml-2 _._inline-block _._text-xl">
                                    <PiFacebookLogo />
                                </a>
                                <a href={mem.twitter} className="text-white-50 _._ml-2 _._inline-block _._text-xl">
                                    <PiTwitterLogo />
                                </a>
                                {getSkype(mem.skype)}
                            </div>
                            <h3 className="my-1 lh-36 text-white">{mem.name}</h3>
                            <a className="btn btn-small btn-solid-border btn-round-full text-white">{mem.designation}</a>
                        </div>
                    </center>
                </div>
            </div>
        );
    } /**, options: {}, config: {} **/
);
function getSkype(s: string) {
    return s != "" ? (
        <>
            <br />
            <a href={s} className="text-white-50 _._ml-2 _._inline-block _._text-xl">
                <FaSkype />
                &nbsp;{s}
            </a>
        </>
    ) : (
        ""
    );
}
export default function MeetUs() {
    return (
        <>
            <div className="container _._mt-10">
                <h2 className="h2_text _._text-center animate__animated animate__flipInX animate__slower">
                    <span className="gradient_text">
                        <FcBusinessman style={{ display: "inline-block", marginTop: "-15px", marginRight: "5px" }} />
                        Meet Our Team Of Experts
                    </span>
                </h2>
            </div>
            <section className="section latest-blog bg-2">
                <div className="container">
                    <div className="row justify-content-center _._mb-10">
                        <div className="col-lg-7 text-center">
                            <div className="section-title">
                                <h2 className="mt-3 content-title text-white">Our Team</h2>
                            </div>
                        </div>
                        <div className="col-12">
                            <img src="/team/team.jpg" alt="" className="team" />
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        {Members.map((mem, i) => {
                            return <Member key={i} mem={mem} />;
                        })}
                    </div>
                </div>
            </section>
            <br />
        </>
    );
}
