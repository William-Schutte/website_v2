import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { contentAnimations } from '../data/animations.js';

const AboutArticle = ({ role, company, timeframe, desc }) => {
  const scrollAnimControls = useAnimation();
  const [ref, inView] = useInView({ threshold: .8 });

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
    <motion.article
      className="w-full scroll-snap-target flex-none p-4 text-gray-700 bg-gray-200 rounded-2xl"
      ref={ref}
      initial="initial"
      animate={scrollAnimControls}
      variants={contentAnimations}
    >
      <h3 className="text-2xl pb-2">{role}</h3>
      <h4 className="text-xl">{company}</h4>
      <h5 className="text-xl pb-2">{timeframe}</h5>
      <p className="text-l py-2">{desc[0]}</p>
      <p className="text-l py-2">{desc[1]}</p>
    </motion.article>
  )
};

export default AboutArticle;
