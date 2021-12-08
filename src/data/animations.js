export const pageAnimations = {
  startRight: {
    x: 1200,
    opacity: 0,
  },
  startBottom: {
    y: 800,
    opacity: 0,
  },
  startCenter: {
    opacity: 0,
  },
  enter: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: 'spring',
      damping: 6,
      stiffness: 30,
      delay: .3,
      delayChildren: .5,
      staggerChildren: .5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: .5,
      delay: 1,
    }
  },
  exitRight: {
    scale: 1,
    x: 1200,
    opacity: 0,
    transition: {
      duration: .5,
      delay: 1,
    },
  },
  exitBottom: {
    scale: 1,
    y: 800,
    opacity: 0,
    transition: {
      duration: .5,
      delay: 1,
    },
  },
};

export const navAnimations = {
  initial: { opacity: 0, x: -100, transition: { duration: 1, }, },
  animate: { opacity: 1, x: 0, transition: { duration: 1, delay: 2, ease: [.25, .4, .08, 1], } },
  exit: {}
};

export const headerAnimations = {
  hidden: {
    y: '-600px',
    opacity: 0,
    transition: {
      duration: 2,
      type: "spring",
      delay: .4,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.4,
      type: "spring",
    },
  },
  visible1: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.4,
      type: "spring",
      delay: .2,
    },
  },
  exit: {
    y: '-600px',
    opacity: 0,
  }
};

export const linkAnimations = {
  hidden: {
    x: '-300px',
    opacity: 0,
  },
  hidden1: {
    x: '-400px',
    opacity: 0,
  },
  hidden2: {
    x: '-600px',
    opacity: 0,
  },
  visible: {
    x: '0',
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
      damping: 6,
      stiffness: 30,
    }
  },
  visible1: {
    x: '0',
    opacity: 1,
    transition: {
      duration: 1.4,
      type: "spring",
      damping: 5,
      stiffness: 50,
    }
  },
  selected: {
    x: '200px',
    scale: 2,
    color: '#ef4444',
    opacity: 1,
    transition: {
      duration: 1,
    }
  },
  hover: {
    x: '20px',
    transition: {
      duration: 1,
      type: "spring",
      damping: 6,
      stiffness: 30,
    }
  },
  exit0: {
    x: '-800px',
    opacity: 0,
    transition: {
      duration: 2,
      delay: .2,
    }
  },
  exit1: {
    x: '-700px',
    opacity: 0,
    transition: {
      duration: 2,
    }
  },
  exit2: {
    x: '-600px',
    opacity: 0,
    transition: {
      duration: 2,
      delay: .2,
    }
  },
};

export const contentParent = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 3,
    }
  }
};

export const childDelay = {
  initial: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 1,
      delayChildren: 2,
      staggerChildren: .2,
    },
  },
}

export const contentAnimations = {
  initial: {
    x: 0,
    scale: .4,
    opacity: 0,
  },
  show: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [.02, 1.49, .67, .92],
    }
  },
};

export const iconAnimations = {
  reactI: {
    rotate: 270,
    opacity: .8,
    scale: 0.8,
  },
  nuclearI: {
    rotate: -360,
    opacity: 0.5,
    scale: 1.6,
  },
  reactF: {
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      delay: 3.5,
      type: "spring",
    }
  },
  tutorI: {
    scale: 0,
    opacity: 0,
  },
  tutorF: {
    scale: 1,
    spin: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 4,
      ease: [.02, 1.49, .67, .92],
    }
  },
  webI: {
    x: 200,
    opacity: .8,
  },
  webF: {
    x: 0,
    y:0,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 3,
      type: "spring",
      stiffness: 20,
      damping: 3,
    }
  },
  webF2: {
    x: 0,
    y:0,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 2.5,
      type: "spring",
      stiffness: 20,
      damping: 3,
    }
  },
  gradI: {
    scale: 2,
    opacity: 0,
  },
  gradF: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 3.5,
      ease: [.02, 1.49, .67, .92],
    }
  },
  practicumI: {
    y: 200,
    opacity: .6,
  },
  hoverSpin: {
    ro: 360,
    scale: 1.2,
  }
}