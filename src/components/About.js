import react from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom, faChalkboardTeacher, faLaptopCode, faUniversity, faUserGraduate, faRadiationAlt } from '@fortawesome/free-solid-svg-icons'
import { childDelay, contentAnimations, pageAnimations, iconAnimations, contentParent } from '../data/animations';
import Sidebar from './Sidebar';
import iconCss from '../media/icons/i-css.svg';
import iconExpress from '../media/icons/i-express.svg';
import iconFigma from '../media/icons/i-figma.svg';
import iconGatsby from '../media/icons/i-gatsby.svg';
import iconGithub from '../media/icons/i-github.svg';
import iconHtml from '../media/icons/i-html.svg';
import iconJs from '../media/icons/i-js.svg';
import iconMongo from '../media/icons/i-mongo.svg';
import iconReact from '../media/icons/i-react.svg';
import iconNode from '../media/icons/i-node.svg';
import AboutArticle from './AboutArticle';
import { jobData } from '../data/jobData';

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
        className="w-full my-14 pl-32 pr-16 py-12 bg-gray-600 grid xl:grid-cols-2 lg:grid-cols-1 gap-8 font-readex"
        variants={childDelay}
        initial="initial"
        animate="show"
      >
        <motion.div>
          <motion.h2 className="text-4xl mb-6" variants={contentAnimations}>Me</motion.h2>
          <motion.div className="text-xl leading-8 mb-10" variants={contentAnimations}>
            Hey! I'm a software engineer, tutor, and mentor. I primarily work with the MERN stack and Django.
            I'm an enthusiastic, analytical web developer who loves JavaScript, React, Node, and Python.
            I've even made a few RESTful APIs and know my way around Mongo and SQL.
          </motion.div>
          <motion.div variants={contentAnimations}>
            <motion.h2 className="text-4xl mb-6">Experience</motion.h2>
            <motion.div
              className="flex flex-wrap max-w-xl ml-8 rounded-xl overflow-hidden"
              variants={contentParent}
            >
              <div className="bg-gray-100 2xl:h-48 2xl:w-48 h-40 w-40 flex flex-col align-middle items-center overflow-hidden">
                <motion.div
                  className="flex m-auto"
                  variants={iconAnimations}
                  initial="reactI"
                  animate="reactF"
                >
                  <FontAwesomeIcon icon={faAtom} className="text-8xl text-gray-800 hover:scale-125 hover:rotate-180 hover:opacity-80 transition-all duration-500 ease-in-out cursor-pointer" />
                </motion.div>
              </div>
              <div className="bg-gray-800 2xl:h-48 2xl:w-48 h-40 w-40 flex flex-col align-middle items-center overflow-hidden">
                <motion.div
                  className="flex m-auto"
                  variants={iconAnimations}
                  initial="tutorI"
                  animate="tutorF"
                >
                  <FontAwesomeIcon icon={faChalkboardTeacher} className="text-8xl text-gray-100 hover:scale-125 hover:text-white transition-all duration-500 ease-in-out cursor-pointer" />
                </motion.div>
              </div>
              <div className="bg-gray-100 2xl:h-48 2xl:w-48 h-40 w-40 flex flex-col align-middle items-center overflow-hidden">
                <motion.div
                  className="flex m-auto"
                  variants={iconAnimations}
                  initial="webI"
                  animate="webF"
                >
                  <FontAwesomeIcon icon={faLaptopCode} className="text-8xl text-gray-800 hover:scale-125 hover:opacity-80 transition-all duration-500 ease-in-out cursor-pointer" />
                </motion.div>
              </div>
              <div className="bg-gray-800 2xl:h-48 2xl:w-48 h-40 w-40 flex flex-col align-middle items-center overflow-hidden">
                <motion.div
                  className="flex m-auto"
                  variants={iconAnimations}
                  initial="practicumI"
                  animate="webF2"
                >
                  <FontAwesomeIcon icon={faUserGraduate} className="text-8xl text-gray-100 hover:scale-125 hover:text-white transition-all duration-500 ease-in-out cursor-pointer" />
                </motion.div>
              </div>
              <div className="bg-gray-100 2xl:h-48 2xl:w-48 h-40 w-40 flex flex-col align-middle items-center overflow-hidden">
                <motion.div
                  className="flex m-auto"
                  variants={iconAnimations}
                  initial="nuclearI"
                  animate="reactF"
                >
                  <FontAwesomeIcon icon={faRadiationAlt} className="text-8xl text-gray-800 hover:scale-125 hover:-rotate-180 hover:opacity-80 transition-all duration-500 ease-in-out cursor-pointer" />
                </motion.div>
              </div>
              <div className="bg-gray-800 2xl:h-48 2xl:w-48 h-40 w-40 flex flex-col align-middle items-centermoverflow-hidden">
                <motion.div
                  className="flex m-auto"
                  variants={iconAnimations}
                  initial="gradI"
                  animate="gradF"
                >
                  <FontAwesomeIcon icon={faUniversity} className="text-8xl text-gray-100 hover:scale-125 hover:text-white transition-all duration-500 ease-in-out cursor-pointer" />
                </motion.div>
              </div>
              {/* <AboutArticle
              role="Javascript Developer, Associate Researcher"
              company="Conifer Point Pharmaceuticals"
              timeframe="2021 - 2022"
              desc={[
                `I spent 2021 working for a startup devloping web-based computational chemistry software used by
                labs and pharmaceutical companies to evaluate drug candidates. The software frontend is built with React,
                incorporating multiple JS libraries and external APIs for 3D graphics and certain chemical calculations,
                alongside other services using Django and PostgreSQL.`,
                `We started converting many of the older components into more modern functional React components that utilized
                MaterialUI for a more consistent look. I designed and implemented many high-demand features for users to more
                quickly and efficiently run multiple fragment simulations on systems, decompose fragments, and dock compounds.`,
              ]}
            /> */}
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="h-full flex flex-col">
          <motion.h2 className="text-4xl mb-4" variants={contentAnimations}>Tech</motion.h2>
          <motion.h2 className="text-4xl mb-auto flex flex-wrap" variants={contentAnimations}>
            <img src={iconReact} className="h-16 w-16 m-4" alt="React" />
            <img src={iconNode} className="h-16 w-16 m-4" alt="Node" />
            <img src={iconMongo} className="h-16 w-16 m-4" alt="Mongo" />
            <img src={iconExpress} className="h-16 w-16 m-4" alt="Express" />
            <img src={iconJs} className="h-16 w-16 m-4" alt="JS" />
            <img src={iconHtml} className="h-16 w-16 m-4" alt="Html" />
            <img src={iconCss} className="h-16 w-16 m-4" alt="CSS" />
            <img src={iconGatsby} className="h-16 w-16 m-4" alt="Gatsby" />
            <img src={iconGithub} className="h-16 w-16 m-4" alt="Github" />
            <img src={iconFigma} className="h-16 w-16 m-4" alt="Figma" />
          </motion.h2>
          <motion.div variants={contentAnimations} className="flex h-96 w-full">
            <AboutArticle job={jobData[0]} />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default About;
