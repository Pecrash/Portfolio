import React from "react";
import { FormattedMessage } from "react-intl";

const Services = () => {
	return (
		<div className="services" id="services">
			<h1 className="services__title">
				<FormattedMessage id="services.title" defaultMessage={"Services"} />
			</h1>
			<section className="services__container">
				<div className="services__container-item">
					<h2>
						<FormattedMessage
							id="services.web"
							defaultMessage={"Web Development"}
						/>
					</h2>
					<p>
						<FormattedMessage
							id="services.webP"
							defaultMessage={
								"I develop and design your custom website, covering your specific needs."
							}
						/>
					</p>
					<img src="/assets/services_icons/web.svg" alt="" />
				</div>

				<div className="services__container-item">
					<h2 data-section="services" data-value="responsive">
						<FormattedMessage
							id="services.responsive"
							defaultMessage={"Responsive Design"}
						/>
					</h2>
					<p>
						<FormattedMessage
							id="services.responsiveP"
							defaultMessage={
								"I design for compatibility with different types of devices to create the best possible user experience."
							}
						/>
					</p>
					<img src="/assets/services_icons/responsive.svg" alt="" />
				</div>

				<div className="services__container-item">
					<h2 data-section="services" data-value="illustration">
						<FormattedMessage
							id="services.illustration"
							defaultMessage={"Illustration"}
						/>
					</h2>
					<p>
						<FormattedMessage
							id="services.illustrationP"
							defaultMessage={
								"I can help you bring to life exactly what you imagine through illustrations and graphic representations."
							}
						/>
					</p>
					<img src="/assets/services_icons/illustration.svg" alt="" />
				</div>

				<div className="services__container-item">
					<h2>
						<FormattedMessage
							id="services.modeling"
							defaultMessage={"3D Modeling"}
						/>
					</h2>
					<p className="services__container-item_p">
						<FormattedMessage
							id="services.modelingP"
							defaultMessage={
								"Your website will stand out even more if it comes to life with 3D designs and animations."
							}
						/>
					</p>
					<img src="/assets/services_icons/model.svg" alt="" />
				</div>

				<div className="services__container-item">
					<h2>
						<FormattedMessage
							id="services.media"
							defaultMessage={"Social Media Integration"}
						/>
					</h2>
					<p>
						<FormattedMessage
							id="services.mediaP"
							defaultMessage={
								"Your website and social media should work together seamlessly, I will help you with strategies to retain the traffic of your website."
							}
						/>
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
