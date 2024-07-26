import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
import { isMobile } from 'react-device-detect';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = useRef();

  useFrame((state) => {
    if (!isMobile) {
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = Math.sin(time) * 0.1;
      meshRef.current.rotation.x = Math.cos(time * 0.5) * 0.1;
      meshRef.current.rotation.z = Math.sin(time * 0.3) * 0.1;
    }
  });

  return (
    <Float 
      speed={isMobile ? 1 : 2} 
      rotationIntensity={isMobile ? 1 : 2} 
      floatIntensity={isMobile ? 2 : 4}
    >
      <mesh ref={meshRef} castShadow receiveShadow scale={isMobile ? 1.2 : 1.65}>
        <icosahedronGeometry args={[1, isMobile ? 0 : 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop={isMobile ? 'demand' : 'always'}
      dpr={[1, isMobile ? 1 : 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 5], fov: 45 }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[8, 8, 5]} intensity={2} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;