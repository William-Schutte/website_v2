import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence, useMotionValue, Override, useAnimation } from "framer-motion";
import { pageAnimations, linkAnimations, contentAnimations, contentParent } from '../data/animations.js';
import Sidebar from './Sidebar.js';
import WorkArticle from './WorkArticle.js';

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
  // const scrollAnimControls = useAnimation();
  // const [ref, inView] = useInView();

  // useEffect(() => {
  //   console.log(inView);
  //   if (inView) {
  //     setTimeout(() => scrollAnimControls.start("show"), 400);
  //     // scrollAnimControls.start("show");
  //   } else {
  //     setTimeout(() => scrollAnimControls.start("initial"), 400);
  //     // scrollAnimControls.start("initial");
  //   }
  // }, [scrollAnimControls, inView]);

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
      <motion.h1 className="text-7xl py-10 pl-20 absolute top-0 left-0 w-screen z-10">Work</motion.h1>
      <motion.div
        variants={contentParent}
        initial="initial"
        animate="show"
        className="w-full h-full px-24 bg-black overflow-scroll scroll-snap-y"
      >
        <div className="my-20 h-20"></div>
        <WorkArticle name="Project 1" left={0} />
        <WorkArticle name="Project 2" left={1} />
        <WorkArticle name="Project 3" left={2} />
        <WorkArticle name="Project 4" left={3} />
        <WorkArticle name="Project 5" left={4} />
        <div className="my-20 h-96"></div>
      </motion.div>
    </motion.section>
  )
}

export default Work;
