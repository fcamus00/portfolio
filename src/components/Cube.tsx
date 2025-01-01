import * as THREE from 'three';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useRef, useState } from 'react';
import { Float, useGLTF, useTexture } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    ['Cube']: THREE.Mesh;
  };
  materials: {
    ['Cube']: THREE.MeshStandardMaterial;
  };
};

const Cube: React.FC<JSX.IntrinsicElements['group']> = (props) => {
  const { nodes } = useGLTF('/portfolio/models/cube.glb') as GLTFResult;

  const texture = useTexture('textures/cube.png');

  const cubeRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
      })
      .to(cubeRef.current!.rotation, {
        y: hovered ? '+=2' : `+=${Math.PI * 2}`,
        x: hovered ? '+=2' : `-=${Math.PI * 2}`,
        duration: 2.5,
        stagger: {
          each: 0.15,
        },
      });
  });

  return (
    <Float floatIntensity={2}>
      <group position={[9, -4, 0]} rotation={[2.6, 0.8, -1.8]} scale={0.74} dispose={null} {...props}>
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          onPointerEnter={() => setHovered(true)}
        >
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload('/portfolio/models/cube.glb');

export default Cube;