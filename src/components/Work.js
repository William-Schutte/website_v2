import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { pageAnimations, linkAnimations } from '../data/animations.js';
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

  function handleLinkClick(key) {
    setLinkClicked(true);
    const newState = exitAnimationStates;
    newState[key] = "selected";
    setAnimationStates(newState);
  }

  return (
    <motion.section
      className="w-screen h-screen bg-black text-white font-mdtall"
      variants={pageAnimations}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Sidebar currentPage="work"/>
      {/* Page content in here */}
      <h1 className="text-7xl pt-10 pl-20">Work</h1>
    </motion.section>
  )
}

export default Work;
