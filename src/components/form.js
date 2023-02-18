import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
	const [state, handleSubmit] = useForm("xgebaqre");
	if (state.succeeded) {
		return <p>Thanks for joining!</p>;
	}

	return (
		<div className="contact" id="contact">
			<section className="contact__section" id="form">
				<h1 className="contact__tittle">Contact me</h1>
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
					<label for="" class="contact__section_form-label">
						<span>Tu Nombre</span>
					</label>

					<input
						type="text"
						className="contact__section_form-box"
						name="phone"
						required
					/>
					<label for="" class="contact__section_form-label">
						<span>Número de Teléfono</span>
					</label>

					<input
						type="text"
						className="contact__section_form-box"
						name="email"
						required
					/>
					<label for="" class="contact__section_form-label">
						<span>Correo</span>
					</label>

					<textarea
						className="contact__section_form-box message"
						name="subject"
						required
					></textarea>
					<label for="" class="contact__section_form-label message">
						<span>Mensaje</span>
					</label>

					<div className="contact__section_form-submit">
						<input
							type="submit"
							className="contact__section_form-submit-btn"
							value="Enviar"
						/>
					</div>
				</form>
			</section>
			<section className="contact__media">
				<a href="" className="contact__media-icon"><img src="/assets/media_icons/facebook.svg" alt="" /></a>
				<a href="" className="contact__media-icon"><img src="/assets/media_icons/instagram.svg" alt="" /></a>
				<a href="" className="contact__media-icon"><img src="/assets/media_icons/whatsapp.svg" alt="" /></a>
			</section>
		</div>
	);
};

export default Form;
