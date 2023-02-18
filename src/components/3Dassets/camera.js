import React from "react";
import { PerspectiveCamera } from "@react-three/drei";

const Camera = () => {
	return(
        <PerspectiveCamera 
        makeDefault
        position={[0,1,10]}
        fov={23}
        />
    )
};

export default Camera;
