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