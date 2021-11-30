import react from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { navAnimations } from '../data/animations';

const Sidebar = ({ currentPage }) => {
  return (
    <motion.nav
      className="w-16 h-screen bg-gray-800 flex flex-col justify-between fixed top-0 left-0"
      variants={navAnimations}
      initial="initial"
      animate="animate"
      exit="initial"
    >
      <Link 
        className="text-4xl tracking-widest text-gray-500 text-center py-4 hover:text-white
          hover:scale-125 transition-all duration-300 ease-in-out"
        to="/"
      >WS</Link>
      <div className="flex flex-col text-gray-500">
        <Link
          className={currentPage === "work" ? "nav-link-selected" : "nav-link"}
          to="/work"
        >Work</Link>
        <Link
          className={currentPage === "about" ? "nav-link-selected" : "nav-link"}
          to="/about"
        >About</Link>
        <Link
          className={currentPage === "contact" ? "nav-link-selected" : "nav-link"}
          to="/contact"
        >Contact</Link>
      </div>
      <p className="text-center text-2xl py-4 text-gray-500">2021</p>
    </motion.nav>
  );
}

export default Sidebar;