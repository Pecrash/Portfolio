import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FormattedMessage } from "react-intl";

const Form = () => {
	const [state, handleSubmit] = useForm("xgebaqre");
	if (state.succeeded) {
		return (
			<div className="contact">
				<section className="contact__section">
					<article className="contact__section_return">
						<img src="/assets/check-icon.svg" alt="" />
						<h1>Thanks For Your Message!!!</h1>
					</article>
				</section>
			</div>
		);
	}

	return (
		<div className="contact" id="contact">
			<section className="contact__section" id="form">
				<h1 className="contact__tittle">
					<FormattedMessage id="form.title" defaultMessage={"Contact me"} />
				</h1>
				<form
					onSubmit={handleSubmit}
					className="contact__section_form"
					id="contacto"
					action="https://formspree.io/f/mayzekjk"
					method="post"
				>
					<label htmlFor="email"></label>
					<input
						type="text"
						className="contact__section_form-box"
						name="name"
						required
					/>
					<label className="contact__section_form-label">
						<span>
							<FormattedMessage id="form.name" defaultMessage={"Name"} />
						</span>
					</label>
					<ValidationError prefix="Name" field="name" errors={state.errors} />

					<input
						type="text"
						className="contact__section_form-box"
						name="phone"
						required
					/>
					<label className="contact__section_form-label">
						<span>
							<FormattedMessage id="form.phone" defaultMessage={"Phone"} />
						</span>
					</label>
					<ValidationError prefix="Phone" field="phone" errors={state.errors} />

					<input
						type="text"
						className="contact__section_form-box"
						name="email"
						required
					/>
					<label className="contact__section_form-label">
						<span>
							<FormattedMessage id="form.email" defaultMessage={"Email"} />
						</span>
					</label>

					<textarea
						className="contact__section_form-box message"
						name="subject"
						required
					></textarea>
					<label className="contact__section_form-label message">
						<span>
							<FormattedMessage id="form.message" defaultMessage={"Message"} />
						</span>
					</label>

					<div className="contact__section_form-submit">
						<FormattedMessage id="form.send" defaultMessage={"Send"}>
							{(submitMessage) => (
								<input
									type="submit"
									className="contact__section_form-submit-btn"
									value={submitMessage}
								/>
							)}
						</FormattedMessage>
					</div>
				</form>
			</section>
			<section className="contact__media">
				<a
					href="https://www.facebook.com/profile.php?id=100090796002084"
					className="contact__media-icon"
					target={"_blank"}
				>
					<img src="/assets/media_icons/facebook.svg" alt="" />
				</a>
				<a
					href="https://www.instagram.com/pecrash_dev/?igshid=YmMyMTA2M2Y%3D"
					className="contact__media-icon"
					target={"_blank"}
				>
					<img src="/assets/media_icons/instagram.svg" alt="" />
				</a>
				<a
					href="https://wa.me/message/KE2UQDJTG75UG1"
					className="contact__media-icon"
					target={"_blank"}
				>
					<img src="/assets/media_icons/whatsapp.svg" alt="" />
				</a>
				<a
					href="https://twitter.com/PecrashDev"
					className="contact__media-icon"
					target={"_blank"}
				>
					<img src="/assets/media_icons/twitter.svg" alt="" />
				</a>
			</section>
		</div>
	);
};

export default Form;
