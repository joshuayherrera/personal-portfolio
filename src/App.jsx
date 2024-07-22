import { BrowserRouter } from "react-router-dom";
import { useEffect, useRef } from 'react';
import { About, Contact ,Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  const wrapperRef = useRef(null);
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='wrapper' ref={wrapperRef}>
          <div id="hero" className='z-10'>
            <Hero scrollContainer={wrapperRef} />
          </div>
          <div id="about" className='relative z-30 bg-primary mt-[-2px]'>
            <About />
          </div>
          {/*
            <div id="work" className='relative z-30 bg-primary'>
              <Experience />
            </div>
          */}
          <div id="project" className='relative z-30 bg-primary'>
            <Works/>
          </div>
          <div id="tech" className='relative z-30 bg-primary'>
            <Tech/>
          </div>
          <div id="feedbacks" className='relative z-30 bg-primary'>
            <Feedbacks />
          </div>
          <div id="contact" className='relative z-30 bg-primary'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;