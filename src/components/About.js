import react from 'react';
import { motion } from 'framer-motion';
import { childDelay, contentAnimations, pageAnimations } from '../data/animations';
import Sidebar from './Sidebar';

const About = () => {
  return (
    <motion.section
      className="w-screen h-screen bg-black text-white font-mdtall"
      variants={pageAnimations}
      initial="startBottom"
      animate="enter"
      exit="exitBottom"
    >
      <Sidebar currentPage="about" />
      <h1 className="text-7xl pt-10 pl-20">About</h1>
      <motion.div
        className="w-full my-20 px-32 py-12 bg-gray-600 grid grid-cols-2 gap-8 font-readex"
        variants={childDelay}
        initial="initial"
        animate="show"  
      >
        <motion.div>
          <motion.h2 className="text-4xl mb-4" variants={contentAnimations}>Me</motion.h2>
          <motion.div className="text-xl mb-6" variants={contentAnimations}>
            Hey! I'm a software engineer, tutor, and mentor. I work with the MERN stack quite a bit.
            I'm a master front-end web developer who loves JavaScript and React, and a pro when it comes to
            Python and Node. I've even made a few RESTful APIs and know my way around Mongo and SQL.
          </motion.div>
          <motion.h2 className="text-4xl mb-4" variants={contentAnimations}>Experience</motion.h2>
          <motion.div className="text-xl mb-4" variants={contentAnimations}>
            I spent 2021 working for a startup devloping web-based computational chemistry software used by
            labs and pharmaceutical companies to evaluate drug candidates. The software frontend is built primarily
            in React, incorporating multiple JS libraries and external APIs for 3D graphics and certain 
            chemical calculations, alongside other services using Django and PostgreSQL.
          </motion.div>
          <motion.div className="text-xl mb-6" variants={contentAnimations}>
            I started in 2020 as a part-time web developer working with WordPress and HTML/CSS/JS as I completed my
            education in a Full Stack web development bootcamp. I managed sites for clients across the US while I built
            both frontend and backend projects using React, Node, Express, and MongoDB. My bootcamp experience 
            culminated with developing a new Gatsby site for a ML startup called Iterative, which they still currently use. 
          </motion.div>
        </motion.div>
        <motion.div>
          <motion.h2 className="text-4xl mb-4" variants={contentAnimations}>Tech</motion.h2>
          <motion.h2 className="text-4xl mb-4" variants={contentAnimations}>Me</motion.h2>
          <motion.h2 className="text-4xl mb-4" variants={contentAnimations}>Me</motion.h2>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default About;
