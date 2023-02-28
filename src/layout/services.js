import React from "react";

const Services = () => {
	return (
		<div className="services" id="services">
			<h1 className="services__title"  data-section="services" data-value="title">Services</h1>
			<section className="services__container">
				<div className="services__container-item">
					<h2  data-section="services" data-value="web">
						Web <br /> Development
					</h2>
					<p  data-section="services" data-value="webP">
						I develop and design your custom website, covering your specific
						needs.
					</p>
					<img src="/assets/services_icons/web.svg" alt="" />
				</div>
				<div className="services__container-item">
					<h2  data-section="services" data-value="responsive">Responsive Design</h2>
					<p  data-section="services" data-value="responsiveP">
						I design for compatibility with different types of devices to create
						the best possible user experience.
					</p>
					<img src="/assets/services_icons/responsive.svg" alt="" />
				</div>
				<div className="services__container-item">
					<h2  data-section="services" data-value="illustration">Illustration</h2>
					<p  data-section="services" data-value="illustrationP">
						I can help you bring to life exactly what you imagine through
						illustrations and graphic representations.
					</p>
					<img src="/assets/services_icons/illustration.svg" alt="" />
				</div>
				<div className="services__container-item">
					<h2  data-section="services" data-value="modeling">3D Modeling</h2>
					<p className="services__container-item_p"  data-section="services" data-value="modelingP">
						Your website will stand out even more if it comes to life with 3D
						designs and animations.
					</p>
					<img src="/assets/services_icons/model.svg" alt="" />
				</div>
				<div className="services__container-item">
					<h2 data-section="services" data-value="media">
						Social Media <br /> Integration
					</h2 >
					<p  data-section="services" data-value="mediaP">
						Your website and social media should work together seamlessly, I
						will help you with strategies to retain the traffic of your website.
					</p>
					<img src="/assets/services_icons/socialMedia.svg" alt="" />
				</div>
				{/* <div className="services__container-item">
					<h2>Otro no se</h2>
					<p></p>
					<img src="/assets/services_icons/web.svg" alt="" />
				</div> */}
			</section>
		</div>
	);
};

export default Services;
