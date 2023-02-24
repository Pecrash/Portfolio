import React from "react";

const Services = () => {
	return (
		<div className="services" id="services">
			<h1 className="services__title">Services</h1>
			<section className="services__container">
				<div className="services__container-item">
					<h2>
						Web <br /> Development
					</h2>
					<p>
						I develop and design your custom website, covering your specific
						needs.
					</p>
					<img src="/assets/services_icons/web.svg" alt="" />
				</div>
				<div className="services__container-item">
					<h2>Responsive Design</h2>
					<p>
						I design for compatibility with different types of devices to create
						the best possible user experience.
					</p>
					<img src="/assets/services_icons/responsive.svg" alt="" />
				</div>
				<div className="services__container-item">
					<h2>Illustration</h2>
					<p>
						I can help you bring to life exactly what you imagine through
						illustrations and graphic representations.
					</p>
					<img src="/assets/services_icons/illustration.svg" alt="" />
				</div>
				<div className="services__container-item">
					<h2>3D Modeling</h2>
					<p className="services__container-item_p">
						Your website will stand out even more if it comes to life with 3D
						designs and animations.
					</p>
					<img src="/assets/services_icons/model.svg" alt="" />
				</div>
				<div className="services__container-item">
					<h2>
						Social Media <br /> Integration
					</h2>
					<p>
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
