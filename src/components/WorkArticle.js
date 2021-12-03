import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { contentAnimations } from '../data/animations.js';

const WorkArticle = ({ name, desc, video, left }) => {
  const scrollAnimControls = useAnimation();
  const [ref, inView] = useInView({ threshold: .9 });

  useEffect(() => {
    if (inView) {
      setTimeout(() => scrollAnimControls.start("show"), 400);
      // scrollAnimControls.start("show");
    } else {
      setTimeout(() => scrollAnimControls.start("initial"), 400);
      // scrollAnimControls.start("initial");
    }
  }, [scrollAnimControls, inView]);

  return (
    <article className="w-lg scroll-snap-target mx-auto my-10 bg-gray-800 bg-opacity-30 rounded-xl overflow-hidden relative" style={{ left: `${0 * left}px` }}>
      {/* could add arrows here in article to indicate more scrolling up/down, 
        would be covered up by div content */}
      <motion.div
        ref={ref}
        initial="initial"
        animate={scrollAnimControls}
        variants={contentAnimations}
        className="h-lg w-lg text-4xl"
      >
        <video autoPlay loop muted className="w-full h-full relative">
          <source src={video} type="video/mp4" />
        </video>
        <div className="bg-gray-900 bg-opacity-80 p-4 w-full h-full text-center absolute top-0 left-0 flex flex-col">
          <div className="m-auto">
            <h2 className="text-6xl py-8 tracking-widest">{name}</h2>
            <h3 className="text-5xl font-barcode">{desc}</h3>
          </div>
        </div>
      </motion.div>
    </article>
  )
};

export default WorkArticle;
