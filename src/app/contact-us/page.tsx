"use client";
import { motion } from "framer-motion";
import "./styles.scss";
import { FcAssistant } from "react-icons/fc";
import { useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { addDoc, collection } from "firebase/firestore";
import { auth, db, firest, googleProvider } from "@/components/firebase";
import { ref, set } from "firebase/database";
import GoogleSignIn from "@/components/GoogleSignIn/GoogleSignIn";
import { signInWithPopup } from "firebase/auth";
import { LeadDetails } from "./interfaces";

export default function ContactUs() {
	let isError: boolean = false;
	const [formData, setFormData] = useState({
		user_name: "",
		user_email: "",
		company_name: "",
		domain_authority: "",
		domain_rating: "",
		organic_traffic: "",
		need_content: "",
		hunting_for: "",
		traffice_source: "",
		message: "",
	});

	const [errors, setErrors] = useState({
		user_name: "",
		user_email: "",
		company_name: "",
		domain_authority: "",
		domain_rating: "",
		organic_traffic: "",
		need_content: "",
		hunting_for: "",
		traffice_source: "",
		message: "",
	});
	const form: any = useRef();
	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
		detectErrors();
	};
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		detectErrors();

		if (isError) {
			console.log("Errors", errors);
		} else {
			try {
				// await axios.post("https://webconsultencyservice.com/tatt.php", data, { headers });
				// await addDataToFirestore(formData);
				await sendMessageToGoogleChat(formData);
				setFormData({
					user_name: "",
					user_email: "",
					company_name: "",
					domain_authority: "",
					domain_rating: "",
					organic_traffic: "",
					need_content: "",
					hunting_for: "",
					traffice_source: "",
					message: "",
				});
				// Reset errors
				setErrors({
					user_name: "",
					user_email: "",
					company_name: "",
					domain_authority: "",
					domain_rating: "",
					organic_traffic: "",
					need_content: "",
					hunting_for: "",
					traffice_source: "",
					message: "",
				});
				alert("Requirement Form Submit sucessfully!");
			} catch (error) {
				console.error("Error sending email:", error);
			}
		}
	};

	// const addDataToFirestore = async (data: any) => {
	const sendMessageToGoogleChat = async (lead: LeadDetails): Promise<void> => {
		try {
			const webhookUrl = "https://chat.googleapis.com/v1/spaces/AAAA-RrTYz0/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=pokQaKDZgFEpoMobApM4W1KGbpL4Ux29C4NGCWXzuz0";
			const response = await axios.post(webhookUrl, {
				text: `*New Lead Details*\n👤 *Name:* \`${lead.user_name}\`\n📧 *Email:* \`${lead.user_email}\`\n🏢 *Company:* \`${lead.company_name}\`
\n*Website Metrics:*\n📊 *Domain Authority (DA):* \`${lead.domain_authority}\`\n📈 *Domain Rating (DR):* \`${lead.domain_rating}\`\n🚦 *Organic Traffic:* \`${lead.organic_traffic}\`
\n*Requirements:*\n✍️ *Needs Content:* \`${lead.need_content}\`\n🎯 *Looking For:* \`${lead.hunting_for}\`\n🌍 *Target Traffic Source:* \`${lead.traffice_source}\`
\n*Message:*\n\`${lead.message}\`
					`,
			});

			if (response.status === 200) {
				console.log("Message sent successfully");
			} else {
				console.error("Failed to send message", response.statusText);
			}
		} catch (error) {
			console.error("Error sending message:", error);
		}
	};

	function detectErrors() {
		//#region reset errors
		isError = false;
		setErrors({
			user_name: "",
			user_email: "",
			company_name: "",
			domain_authority: "",
			domain_rating: "",
			organic_traffic: "",
			need_content: "",
			hunting_for: "",
			traffice_source: "",
			message: "",
		});
		//#endregion

		//#region check errors
		if (!formData.user_name || !formData.user_name.trim()) {
			isError = true;
			setErrors((prevData) => ({
				...prevData,
				user_name: "Name is required.",
			}));
		}
		if (!formData.user_email || !formData.user_email.trim()) {
			isError = true;
			setErrors((prevData) => ({
				...prevData,
				user_email: "Email is required.",
			}));
		} else if (!/^\S+@\S+\.\S+$/.test(formData.user_email)) {
			isError = true;
			setErrors((prevData) => ({
				...prevData,
				user_email: "Invalid email format.",
			}));
		}
		if (!formData.message || !formData.message.trim()) {
			isError = true;
			setErrors((prevData) => ({
				...prevData,
				message: "Message is required.",
			}));
		}
		//#endregion
	}

	const handleSignInWithGoogle = async () => {
		try {
			const result = await signInWithPopup(auth, googleProvider);
			let user = result.user;
			setFormData((prevData) => ({
				...prevData,
				["user_name"]: `${user.displayName}`,
				["user_email"]: `${user.email}`,
			}));
			console.log(result);

			alert(`Signed in as ${user.displayName}`);
		} catch (error: any) {
			alert(error.message);
		}
	};

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
								<li>Abee, Alberta, Canada (HQ)</li>
								<li>Email: lena.backlinkstudios@gmail.com</li>
								<li>Phone:+1-201-977-2936</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<form ref={form} onSubmit={handleSubmit} encType="multipart/form-data" autoComplete="off" className="contact-form mt-5">
							<h2 className="_._text-[28px] md:_._text-[38px]">Requirement Form</h2>
							<div className="form-group">
								<label>
									Your name<span className="text-danger">*</span>
								</label>
								<input name="user_name" type="text" className="form-control" placeholder="Please Enter Your Full Name Here" value={formData.user_name} onChange={handleChange} />
								{errors.user_name.length > 0 && <div className="alert alert-danger mt-2">{errors.user_name}</div>}
							</div>
							<Row>
								<Col>
									<div className="form-group">
										<label>
											Your email<span className="text-danger">*</span>
										</label>
										<input name="user_email" type="email" className="form-control" placeholder="Please Enter Your Valid Email Address" value={formData.user_email} onChange={handleChange} />
										{errors.user_email.length > 0 && <div className="alert alert-danger mt-2">{errors.user_email}</div>}
									</div>
								</Col>
								<Col>
									<div className="form-group">
										<label>Company Name </label>
										<input name="company_name" type="text" className="form-control" placeholder="Enter Your Company Name" value={formData.company_name} onChange={handleChange} />
									</div>
								</Col>
							</Row>
							<Row>
								<Col>
									<div className="form-group">
										<label className="exampleInputEmail1">Domain Authority (DA)</label>
										<select className="form-control form-control-lg" name="domain_authority" value={formData.domain_authority} onChange={handleChange}>
											<option value="">Select Domain Authority</option>
											<option value="DA 30+">DA 30+</option>
											<option value="DA 40+">DA 40+</option>
											<option value="DA 50 to DA79">DA 50 to DA79</option>
											<option value="DA 80+">DA 80+</option>
										</select>
										<small id="emailHelp" className="form-text text-danger"></small>
									</div>
								</Col>
								<Col>
									<div className="form-group">
										<label className="exampleInputEmail1">Domain Rating (DR)</label>
										<select className="form-control form-control-lg" name="domain_rating" value={formData.domain_rating} onChange={handleChange}>
											<option value="">Select Domain Rating</option>
											<option value="DR 30+">DR 30+</option>
											<option value="DR 40+">DR 40+</option>
											<option value="DR 50 to DR 79">DR 50 to DR 79 </option>
											<option value="DR 80+">DR 80+</option>
										</select>
										<small id="emailHelp" className="form-text text-danger"></small>
									</div>
								</Col>
							</Row>
							<Row>
								<Col>
									<div className="form-group">
										<label className="exampleInputEmail1">Organic Traffic</label>
										<select className="form-control form-control-lg" name="organic_traffic" value={formData.organic_traffic} onChange={handleChange}>
											<option value="">Select Organic Traffic</option>
											<option value="1000+">1000+</option>
											<option value="10000+">10000+</option>
											<option value="500+">500+</option>
											<option value="5000+">5000+</option>
										</select>
										<small id="emailHelp" className="form-text text-danger"></small>
									</div>
								</Col>
								<Col>
									<div className="form-group">
										<label className="exampleInputEmail1">Need Content</label>
										<select className="form-control form-control-lg" name="need_content" value={formData.need_content} onChange={handleChange}>
											<option value="">Select Need Content</option>
											<option value="Yes">Yes</option>
											<option value="No">No</option>
										</select>
										<small id="emailHelp" className="form-text text-danger"></small>
									</div>
								</Col>
							</Row>
							<Row>
								<Col>
									<div className="form-group">
										<label className="exampleInputEmail1">Hunting For</label>
										<select className="form-control form-control-lg" name="hunting_for" value={formData.hunting_for} onChange={handleChange}>
											<option value="">Select Hunting For</option>
											<option value="Guest Post">Guest Post</option>
											<option value="Link Placement Only">Link Placement Only</option>
											<option value="Niche Edit">Niche Edit</option>
										</select>
										<small id="emailHelp" className="form-text text-danger"></small>
									</div>
								</Col>
								<Col>
									<div className="form-group">
										<label className="exampleInputEmail1">Traffice Source</label>
										<select className="form-control form-control-lg" name="traffice_source" value={formData.traffice_source} onChange={handleChange}>
											<option value="">Select Traffice Source</option>
											<option value="USA">USA</option>
											<option value="UK">UK</option>
											<option value="India">India</option>
											<option value="Other">Other</option>
										</select>
										<small id="emailHelp" className="form-text text-danger"></small>
									</div>
								</Col>
							</Row>
							<div className="form-group">
								<label>
									Let us know whats your Requirement for Now<span className="text-danger">*</span>
								</label>
								<textarea name="message" className="form-control" placeholder="Message" value={formData.message} onChange={handleChange} />
								{errors.message.length > 0 && <div className="alert alert-danger mt-2">{errors.message}</div>}
							</div>
							<br></br>
							<p className="text-center mb-0">
								<motion.input whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="submit" value="SUBMIT" />
							</p>
						</form>
						{/* <GoogleSignIn /> */}
						<div className="_._text-center _._mt-5">
							<button className="login-with-google-btn" onClick={handleSignInWithGoogle}>
								Sign in with Google
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
