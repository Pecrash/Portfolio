import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { useState, useEffect, useRef, useCallback } from "react";
/* import { OrbitControls } from "@react-three/drei"; */
import Bot from "./bot";
import Camera from "./camera";

const Model = () => {
	const canvasRef = useRef(null);
	const [visible, setVisible] = useState(false);
	const canvasRefCallback = useCallback((node) => {
		canvasRef.current = node;
	}, []);

	const observer = useMemo(
		() =>
			new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// El elemento es visible
						setVisible(true);
					} else {
						// El elemento no es visible
						setVisible(false);
					}
				});
			}),
		[]
	);

	useEffect(() => {
		const canvas = canvasRef.current;

		if (canvas) {
			observer.observe(canvas);
		}

		return () => {
			const currentCanvas = canvasRef.current;

			if (currentCanvas) {
				observer.unobserve(currentCanvas);
			}
		};
	}, [canvasRef, observer, canvasRefCallback]);

	return (
		<div className="introduction__canvas" ref={canvasRef}>
			<div
				className={`introduction__canvas_container ${visible ? "" : "hidden"}`}
			>
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
