import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Links = () => {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.5,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  const items = [
    {
      name: "Homepage",
      link: "/",
    },
    {
      name: "Services",
      link: `/#Services`,
    },
    {
      name: "Portfolio",
      link: `/#Portfolio`,
    },
    { name: "Contact", link: `/#Contact` },
    { name: "Bootcamp", link: `/Fullstack-MERN-Bootcamp` },
  ];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item, index) => (
        <motion.a
          href={`${item.link}`}
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.name}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
