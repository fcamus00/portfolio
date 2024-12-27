import * as THREE from 'three';
import React from 'react';
import { useGLTF, Float } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    ['React-Logo_Material002_0']: THREE.Mesh;
  };
  materials: {
    ['Material.002']: THREE.MeshStandardMaterial;
  };
};

const ReactLogo: React.FC<JSX.IntrinsicElements['group']> = (props) => {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.VITE_APP_MODELS_PATH ? import.meta.env.VITE_APP_MODELS_PATH : ''}/models/react.glb`,
  ) as GLTFResult;

  return (
    <Float floatIntensity={1}>
      <group scale={0.4} {...props} dispose={null}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload('/portfolio/models/react.glb');

export default ReactLogo;
