import { animate, motion } from "framer-motion";
import "./hero.scss";

const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },

    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-620%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 40,
      },
    },
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Mujaddid Al Magribi</motion.h2>
          <motion.h1 variants={textVariants}>Fullstack Web Developer</motion.h1>

          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>Latest Works</motion.button>
            <motion.button variants={textVariants}>Contact me</motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="sliding"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web Developer Conter Creator
      </motion.div>
      <div className="imageContainer">
        <img src="/user.png" alt="avatar" />
      </div>
    </div>
  );
};

export default Hero;
