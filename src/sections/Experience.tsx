import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import { workExperiences } from '../constants';
import CanvasLoader from '../components/CanvasLoader';
import Developer from '../components/Developer';

const Experience: React.FC = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="max-w-screen-2xl mx-auto c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text">My Work Experience</h3>
        <div className="work-container">
          <div className="work-canvas">
            <Canvas camera={{ position: [0, 2, 4.5] }}>
              <ambientLight intensity={2} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((work) => (
                <div
                  className="work-content_container group"
                  key={work.id}
                  onClick={() => setAnimationName(work.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(work.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img src={work.icon} alt="logo" className="w-full h-full" />
                    </div>
                    <div className="work-content_bar" />
                  </div>
                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{work.name}</p>
                    <p className="text-sm mb-5">
                      {work.pos} - {work.duration}
                    </p>
                    <p className="group-hover:text-white-transition ease-in-out duration-500">{work.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
