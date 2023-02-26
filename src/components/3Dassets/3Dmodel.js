import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { useState, useEffect, useRef, useCallback } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import Bot from "./bot";

const Model = () => {
	const canvasRef = useRef(null);
	const [position, setPosition] = useState(0);
	const [visible, setVisible] = useState(false);
	const canvasRefCallback = useCallback((node) => {
		canvasRef.current = node;
	}, []);

	const Camera = () => {
		return(
			<PerspectiveCamera 
			makeDefault
			position={[position,1,10]}
			fov={23}
			/>
		)
	};

	const observer = useMemo(
		() =>
			new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// El elemento es visible
						setVisible(true);
						setPosition(0)
					} else {
						// El elemento no es visible
						setVisible(false);
						setPosition(10)
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
						<Bot frustumCulled={true} />
					</Suspense>
				</Canvas>
			</div>
		</div>
	);
};

export default Model;
