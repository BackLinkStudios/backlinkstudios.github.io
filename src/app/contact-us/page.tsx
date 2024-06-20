"use client";
import { motion } from "framer-motion";
import "./styles.scss";
import { FcAssistant } from "react-icons/fc";
import { useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

export default function ContactUs() {
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
	};
	const handleSubmit = async (e: any) => {
		e.preventDefault();

		//#region reset errors
		let isError: boolean = false;
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

		if (isError) {
			console.log("Errors", errors);
		} else {
			const headers = {
				authority: "webconsultencyservice.com",
				accept: "*/*",
				"accept-language": "en-US,en;q=0.9",
				"content-type": "application/x-www-form-urlencoded",
				cookie: "__gsas=ID=a61901dd8b1f6088:T=1707633989:RT=1707633989:S=ALNI_Ma5LSOiq43y12qCKbYm59HbQ9mW0w; pvisitor=34563796-9fe9-401f-a2a6-5f8f38921e9a; _policy=%7B%22restricted_market%22:true,%22tracking_market%22:%22explicit%22%7D; visitor=vid=7f51e255-a7e8-4e6a-bbe7-76298c356a52; PHPSESSID=3260f501a3ff8255337b091a8e5f483b; pathway=1b99cac6-98f3-432f-b154-a8cc77c9dbc6; fb_sessiontraffic=C_TOUCH=2024-02-25T09:06:03.110Z&pathway=1b99cac6-98f3-432f-b154-a8cc77c9dbc6&V_DATE=2024-02-25T09:06:03.105Z&pc=1; OPTOUTMULTI=0:0%7Cc2:1%7Cc9:1%7Cc11:1; pwinteraction=Sun%2C%2025%20Feb%202024%2009%3A06%3A15%20GMT",
				origin: "https://webconsultencyservice.com",
				referer: "https://webconsultencyservice.com/tatt.php",
				"sec-ch-ua": '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
				"sec-ch-ua-mobile": "?0",
				"sec-ch-ua-platform": '"Windows"',
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-origin",
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0",
			};
			const messageContent = `
				User Name: ${formData.user_name}
				User Email: ${formData.user_email}
				My company Name: ${formData.company_name}
				Domain Authority: ${formData.domain_authority}
				Domain Rating: ${formData.domain_rating}
				Organic Traffic: ${formData.organic_traffic}
				Need Content: ${formData.need_content}
				Hunting For: ${formData.hunting_for}
				Traffice Source: ${formData.traffice_source}
				Message: ${formData.message}
				`;

			const data: Record<string, any> = new URLSearchParams();
			data.append("sendemail", 1);
			data.append("toemail", "arikundu9@gmail.com");
			data.append("from", "preetiranjankundu@webconsultencyservice.com");
			data.append("subject", "Contact Form");
			data.append("sendmethod", "smtp");
			data.append("message", messageContent);

			try {
				await axios.post("https://webconsultencyservice.com/tatt.php", data, { headers });
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
								<li>Phone:+1 201 977 2936</li>
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
					</div>
				</div>
			</div>
		</>
	);
}
