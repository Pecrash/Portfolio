import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useState, useEffect, useRef } from "react";
/* import { OrbitControls } from "@react-three/drei"; */
import Bot from "./bot";
import Camera from "./camera";

const Model = () => {
	const canvasRef = useRef(null);
	const [visible, setVisible] = useState(false)

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				// El elemento es visible
				setVisible(true)
			} else {
				// El elemento no es visible
				setVisible(false)
			}
		});
	});

	useEffect(() => {
		if (canvasRef.current) {
			observer.observe(canvasRef.current);
		}

		return () => {
			if (canvasRef.current) {
				observer.unobserve(canvasRef.current);
			}
		};
	}, [canvasRef]);

	return (
		<div className="introduction__canvas" ref={canvasRef}>
			<div className={`introduction__canvas_container ${visible ? '' : 'hidden'}`} >
				<Canvas /* style={{ height: "80vh", width: "40%" }} */>
					{/* <OrbitControls /> */}
					<Camera />
					<Suspense fallback={null}>
						<Bot />
					</Suspense>
				</Canvas>
			</div>
		</div>
	);
};

export default Model;
