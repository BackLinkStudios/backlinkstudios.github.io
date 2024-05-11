"use client";
import { FcRules } from "react-icons/fc";
import "./styles.scss";

export default function Blog() {
    return (
        <>
            <div className="container _._mt-10">
                <h2 className="h2_text _._text-center _._text-wrap animate__animated animate__flipInX animate__slower">
                    <span className="gradient_text">
                        <FcRules style={{ display: "inline-block", marginTop: "-15px", marginRight: "5px" }} />
                        Blog
                    </span>
                </h2>
            </div>
            <div className="container _._mx-auto _._px-5 _._mt-40">
                <div className="row"></div>
            </div>
        </>
    );
}
