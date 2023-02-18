import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

function Bot(props) {
	const group = useRef();
	const { nodes, materials, animations } = useGLTF("/assets/3Dbot/bot.glb");
	const { actions } = useAnimations(animations, group);

	useEffect(() => {
		actions?.Greeting?.play()
	}, [])

	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Scene">
				<group name="Armature" position={[0, 1, 0]} scale={0.15}>
					<primitive object={nodes.Neck} />
					<primitive object={nodes.Twine} />
					<primitive object={nodes.Head} />
					<primitive object={nodes.Larm} />
					<primitive object={nodes.Rarm} />
					<primitive object={nodes.Eyes} />
					<skinnedMesh
						name="arm_001"
						geometry={nodes.arm_001.geometry}
						material={materials.body}
						skeleton={nodes.arm_001.skeleton}
					/>
					<skinnedMesh
						name="arm_002"
						geometry={nodes.arm_002.geometry}
						material={materials.body}
						skeleton={nodes.arm_002.skeleton}
					/>
					<group name="body_001">
						<skinnedMesh
							name="Cube005"
							geometry={nodes.Cube005.geometry}
							material={materials.body}
							skeleton={nodes.Cube005.skeleton}
						/>
						<skinnedMesh
							name="Cube005_1"
							geometry={nodes.Cube005_1.geometry}
							material={materials.base}
							skeleton={nodes.Cube005_1.skeleton}
						/>
					</group>
					<group name="Cube001">
						<skinnedMesh
							name="Cube007"
							geometry={nodes.Cube007.geometry}
							material={materials["Material.002"]}
							skeleton={nodes.Cube007.skeleton}
						/>
						<skinnedMesh
							name="Cube007_1"
							geometry={nodes.Cube007_1.geometry}
							material={materials.base}
							skeleton={nodes.Cube007_1.skeleton}
						/>
					</group>
					<group name="head_001">
						<skinnedMesh
							name="Cube003"
							geometry={nodes.Cube003.geometry}
							material={materials.body}
							skeleton={nodes.Cube003.skeleton}
						/>
						<skinnedMesh
							name="Cube003_1"
							geometry={nodes.Cube003_1.geometry}
							material={materials.screen}
							skeleton={nodes.Cube003_1.skeleton}
						/>
					</group>
					<skinnedMesh
						name="Plane_002"
						geometry={nodes.Plane_002.geometry}
						material={materials.eyes}
						skeleton={nodes.Plane_002.skeleton}
					/>
				</group>
				<pointLight
					name="Point"
					intensity={1}
					decay={2}
					color="#9d4edd"
					position={[-2.36, 2.76, -1]}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
				<pointLight
					name="Point001"
					intensity={2}
					decay={2}
					color="#e7c2ff"
					position={[3.07, 0.76, 5.7]}
					rotation={[-0.55, 0.75, -0.43]}
				/>
				<pointLight
					name="Point002"
					intensity={10}
					decay={2}
					color="#3e62ff"
					position={[-0.07, -0.32, -3.58]}
					rotation={[3.12, -0.01, -0.94]}
				/>
				<pointLight
					name="Point003"
					intensity={0.8}
					decay={2}
					color="#3e62ff"
					position={[-20.36, -3.14, -1]}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
				<ambientLight intensity={0.3}/>
			</group>
		</group>
	);
}

useGLTF.preload("/assets/3Dbot/bot.glb");
export default Bot;