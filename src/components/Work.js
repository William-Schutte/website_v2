import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence, useMotionValue, Override, useAnimation } from "framer-motion";
import { pageAnimations, linkAnimations, contentAnimations, contentParent } from '../data/animations.js';
import Sidebar from './Sidebar.js';

const defaultAnimationStates = {
  h1: "visible1",
  h2: "visible",
  link1: "visible",
  link2: "visible1",
  link3: "visible",
};

const exitAnimationStates = {
  h1: "hidden",
  h2: "hidden",
  link1: "exit0",
  link2: "exit1",
  link3: "exit2",
};

const Work = () => {
  const [linkClicked, setLinkClicked] = useState(false);
  const [animationStates, setAnimationStates] = useState(defaultAnimationStates);
  const scrollAnimControls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    console.log(inView);
    if (inView) {
      scrollAnimControls.start("show");
    }
  }, [scrollAnimControls, inView]);

  function handleLinkClick(key) {
    setLinkClicked(true);
    const newState = exitAnimationStates;
    newState[key] = "selected";
    setAnimationStates(newState);
  }

  return (
    <motion.section
      className="w-screen h-screen flex flex-col bg-black text-white font-mdtall"
      variants={pageAnimations}
      initial="startRight"
      animate="enter"
      exit="exitRight"
    >
      <Sidebar currentPage="work"/>
      <motion.h1 className="bg-gradient-to-b from-black text-7xl py-10 pl-20 absolute top-0 left-0 z-10 w-screen">Work</motion.h1>
      <motion.div
        // variants={contentParent}
        // initial="initial"
        // animate="show"
        className="w-full h-full px-24 bg-black overflow-scroll"
      >
        <motion.article variants={contentAnimations} className="h-lg w-lg my-10 flex bg-gray-500 m-auto relative">Cool</motion.article>
        <motion.article variants={contentAnimations} className="h-lg w-lg my-10 flex bg-gray-500 m-auto relative">Cool</motion.article>
        <motion.article ref={ref} variants={contentAnimations} initial="initial" animate={scrollAnimControls} className="h-lg w-lg my-10 flex bg-gray-500 m-auto">Cool</motion.article>

        <motion.article variants={contentAnimations} className="h-lg w-lg my-10 flex bg-gray-500 m-auto relative">Cool</motion.article>
      </motion.div>
    </motion.section>
  )
}

export default Work;
