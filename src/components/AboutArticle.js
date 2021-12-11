import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { contentAnimations } from '../data/animations.js';

const AboutArticle = ({ job }) => {
  const { title, dates, intro, bulletPoints } = job;
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
    <motion.article className="w-full h-full px-8 pt-8 rounded-xl flex flex-col bg-gray-800 drop-shadow-xl relative overflow-hidden">
      <div className="flex w-full">
        <h3 className="text-4xl mb-2">{title}</h3>
        <h4 className="text-xl ml-auto pb-1 self-center">{dates}</h4>
      </div>
      <div className="w-full h-6 bg-gradient-to-b from-gray-800 flex absolute left-0 top-20"></div>
      <div className="pt-4 pr-2 overflow-scroll">
        <p className="pb-2 text-justify">{intro}</p>
        <ul className="list-disc pl-4 pb-8">
          {bulletPoints.map((i) => (
            <li className="p-1"><p>{i}</p></li>
          ))}
        </ul>
      </div>
      <div className="w-full h-8 bg-gradient-to-t from-gray-800 flex absolute bottom-4 left-0"></div>
      <div className="w-full h-4 bg-gray-800 flex absolute bottom-0 left-0"></div>
    </motion.article>
  )
};

export default AboutArticle;
