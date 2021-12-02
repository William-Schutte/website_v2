import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { contentAnimations } from '../data/animations.js';

const WorkArticle = ({ name, left }) => {
  const scrollAnimControls = useAnimation();
  const [ref, inView] = useInView();

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
    <article className="w-lg scroll-snap-target relative my-10" style={{ left: `${100 * left}px` }}>
      <motion.div
        ref={ref}
        initial="initial"
        animate={scrollAnimControls}
        variants={contentAnimations}
        className="h-lg w-lg bg-gray-300"
      >
        {name}
      </motion.div>
    </article>
  )
};

export default WorkArticle;
