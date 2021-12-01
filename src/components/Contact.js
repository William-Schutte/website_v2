import react from 'react';
import { motion } from 'framer-motion';
import { pageAnimations } from '../data/animations';
import Sidebar from './Sidebar';

const Contact = () => {
  return (
    <motion.section
      className="w-screen h-screen bg-black text-white font-mdtall"
      variants={pageAnimations}
      initial="startBottom"
      animate="enter"
      exit="exitBottom"
    >
      <Sidebar currentPage="contact" />
      <h1 className="text-7xl pt-10 pl-20">Contact</h1>
      <div className="w-full px-32 py-12 bg-gray-400 grid grid-cols-2 gap-8 font-sans">
        <h2 className="w-2/3 text-2xl">Cool</h2>
        <h2 className="w-1/3 text-2xl">Also</h2>
      </div>
    </motion.section>
  );
}

export default Contact;
