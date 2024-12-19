import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Vector3 } from "three";

import { calculateSizes } from "../constants";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";

const Hero: React.FC = () => {
  const isSmall = useMediaQuery({ maxWidth: 640 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I'm Felipe Camus <span className="waving-hand">👋🏻</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Developing, Learning, Growing
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HackerRoom
              scale={sizes.deskScale}
              position={
                new Vector3(
                  sizes.deskPosition[0],
                  sizes.deskPosition[1],
                  sizes.deskPosition[2]
                )
              }
              rotation={[0.2, -Math.PI, 0]}
            />
            <group>
              <Target
                position={
                  new Vector3(
                    sizes.targetPosition[0],
                    sizes.targetPosition[1],
                    sizes.targetPosition[2]
                  )
                }
              />
              <ReactLogo
                position={
                  new Vector3(
                    sizes.reactLogoPosition[0],
                    sizes.reactLogoPosition[1],
                    sizes.reactLogoPosition[2]
                  )
                }
              />
              <Cube
                position={
                  new Vector3(
                    sizes.cubePosition[0],
                    sizes.cubePosition[1],
                    sizes.cubePosition[2]
                  )
                }
              />
              <Rings position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
