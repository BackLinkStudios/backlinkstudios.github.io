"use client";
import { motion } from "framer-motion";
import "./styles.scss";
import { FcAssistant } from "react-icons/fc";

export default function ContactUs() {
    return (
        <>
            <div className="container _._mt-10">
                <h2 className="h2_text _._text-center _._text-wrap animate__animated animate__flipInX animate__slower">
                    <span className="gradient_text">
                        <FcAssistant style={{ display: "inline-block", marginTop: "-15px", marginRight: "5px" }} />
                        Contact Us
                    </span>
                </h2>
            </div>
            <div className="container _._mx-auto _._px-5 _._my-40">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 animate__animated animate__fadeInLeft animate__slow">
                        <div className="contact-form">
                            <b>Send a message</b>
                            <h2 className="_._text-[28px] md:_._text-[38px]">Contact Form</h2>
                            <form action="">
                                <input type="text" name="name" id="name" placeholder="Your Name" />
                                <input type="email" name="email" id="email" placeholder="Your Email" />
                                <input type="phone" name="phone" id="phone" placeholder="Your Phone" />
                                <textarea style={{ height: "85px" }} name="message" id="message" placeholder="Please describe what you need*"></textarea>
                                <motion.input whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="button" value="SUBMIT" />
                            </form>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 animate__animated animate__fadeInright animate__slow">
                        <div className="_._p-16">
                            <b>We are Professionals</b>
                            <h2 className="_._text-[34px] md:_._text-[38px]">Don’t Hesitate to contact with us for any kind of information</h2>
                            {/* <div className="_._text-lg _._text-white/60">abc</div> */}
                            <ul className="_._p-4">
                                <li>Bankura (West Bengal India) 722137</li>
                                <li>Email: thelinkseller@gmail.com</li>
                                <li>Phone:+91 9800358963</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
