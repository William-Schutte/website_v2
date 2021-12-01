import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { pageAnimations, headerAnimations, linkAnimations } from '../data/animations.js';

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
// <div className="flex w-screen h-screen bg-black">

const Hero = () => {
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
      className="w-screen h-screen bg-hero bg-cover"
      variants={pageAnimations}
      initial="startCenter"
      animate="enter"
      exit="exit"
    >
      <div className="w-screen h-screen text-white backdrop-filter backdrop-blur-lg">
        <div className="w-1/2 mx-auto flex flex-col font-mdtall relative top-1/4">
          <motion.h1
            variants={headerAnimations}
            initial="hidden"
            animate={animationStates.h1}
            className="text-customL cursor-default relative"
          >William</motion.h1>
          <motion.h2
            variants={headerAnimations}
            initial="hidden"
            animate={animationStates.h2}
            className="text-customXL mb-8 cursor-default relative"
          >Schutte</motion.h2>
          <ul>
            <AnimatePresence exitBeforeEnter>
              <Link to="/work">
                <motion.li
                  key={1}
                  className="main-link"
                  variants={linkAnimations}
                  initial="hidden1"
                  whileHover={linkClicked ? "" : "hover"}
                  animate={animationStates.link1}
                  onClick={() => {
                    handleLinkClick('link1');
                  }}
                >Work
                </motion.li>
              </Link>
              <Link to="/about">
                <motion.li
                  key={2}
                  className="main-link"
                  variants={linkAnimations}
                  initial="hidden"
                  whileHover={linkClicked ? "" : "hover"}
                  animate={animationStates.link2}
                  onClick={() => {
                    handleLinkClick('link2');
                  }}
                >About</motion.li>
              </Link>
              <Link to="/contact">
                <motion.li
                  key={3}
                  className="main-link"
                  variants={linkAnimations}
                  initial="hidden2"
                  whileHover={linkClicked ? "" : "hover"}
                  animate={animationStates.link3}
                  onClick={() => {
                    handleLinkClick('link3');
                  }}
                >Contact</motion.li>
              </Link>
            </AnimatePresence>
          </ul>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero
