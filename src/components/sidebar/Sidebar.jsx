import { useState } from "react";
import Links from "./links/Links";
import "./sidebar.scss";
import Toggle from "./toggle/Toggle";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const varinats = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 40,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={varinats}>
        <Links />
      </motion.div>

      <Toggle open={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
