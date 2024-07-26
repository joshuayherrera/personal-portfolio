import React, { lazy, Suspense } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { isMobile } from 'react-device-detect';

const BallCanvas = lazy(() => import("./canvas/Ball"));

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {isMobile ? (
            <img 
              src={technology.icon} 
              alt={technology.name} 
              className="w-full h-full object-contain"
            />
          ) : (
            <Suspense fallback={<div>Loading...</div>}>
              <BallCanvas icon={technology.icon} />
            </Suspense>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");