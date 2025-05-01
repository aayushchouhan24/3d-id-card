import { Environment, Lightformer, } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Canvas } from "@react-three/fiber";
import Card from "./Card";
import { User } from "../types/types";

const Experience = (student: User) => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 13], fov: 25 }}>
      <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
        <Card student={student} />
      </Physics>
      <Environment background blur={0.75}>
        <color attach="background" args={["black"]} />
        <Lightformer intensity={10} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        <Lightformer intensity={2} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        <Lightformer toneMapped intensity={3} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[500, 10, 1]} />
      </Environment>
    </Canvas>
  )
}



export default Experience;