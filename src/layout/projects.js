import React from "react";
import { FormattedMessage } from "react-intl";

const Projects = () => {
	return (
		<div className="projects" id="projects">
			<h1 className="projects__title">
				<FormattedMessage
					id="projects.title"
					defaultMessage={"Projects"}
				/>
			</h1>
			<section className="projects__container">
				<span className="projects__container-box">
					<img src="/assets/Projects_views/Odontologia.png" alt="" />
					<div className="projects__container-box-links">
						<a
							href="https://muestra-webodontologia-production.up.railway.app/"
							target="_blank"
							rel="noreferrer"
						>
							<p>Link</p>
						</a>
						<a
							href="https://github.com/Pecrash/Muestra-web__odontologia"
							target="_blank"
							rel="noreferrer"
						>
							<p>GitHub</p>
						</a>
					</div>
				</span>
				<span className="projects__container-box">
					<img src="/assets/Projects_views/Landing.png" alt="" />
					<div className="projects__container-box-links">
						<a
							href="https://muestraweblandingpage-production.up.railway.app/#principal"
							target="_blank"
							rel="noreferrer"
						>
							<p>Link</p>
						</a>
						<a
							href="https://github.com/Pecrash/Muestra_web_LandingPage"
							target="_blank"
							rel="noreferrer"
						>
							<p>GitHub</p>
						</a>
					</div>
				</span>
				<span className="projects__container-box">
					<img src="/assets/Projects_views/Peluqueria.png" alt="" />
					<div className="projects__container-box-links">
						<a
							href="https://muestra-webpeluqueria-production-c79a.up.railway.app/"
							target="_blank"
							rel="noreferrer"
						>
							<p>Link</p>
						</a>
						<a
							href="https://github.com/Pecrash/Muestra-web_peluqueria"
							target="_blank"
							rel="noreferrer"
						>
							<p>GitHub</p>
						</a>
					</div>
				</span>
				<span className="projects__container-box">
					<img src="/assets/Projects_views/Game.png" alt="" />
					<div className="projects__container-box-links">
						<a
							href="https://buberrimo-app.netlify.app/"
							target="_blank"
							rel="noreferrer"
						>
							<p>Link</p>
						</a>
						<a
							href="https://github.com/Pecrash/Verdad-o-Reto/tree/master"
							target="_blank"
							rel="noreferrer"
						>
							<p>GitHub</p>
						</a>
					</div>
				</span>
			</section>
		</div>
	);
};

export default Projects;
