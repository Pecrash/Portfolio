import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Bot from "./bot";
import Camera from "./camera";

const Model = () => {
	return (
		<div className="introduction__canvas">
			<Canvas /* style={{ height: "80vh", width: "40%" }} */>
				{/* <OrbitControls /> */}
				<Camera />
				<Suspense fallback={null}>
					<Bot />
				</Suspense>
			</Canvas>
		</div>
	);
};

export default Model;
