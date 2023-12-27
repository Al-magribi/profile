import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Jadid Al Magribi
        </motion.span>

        <div className="social">
          <a
            href="https://www.instagram.com/mujaddidalmagribi/"
            target="_blank"
          >
            <img src="/instagram.png" alt="ig" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCl9oxBNIVDgdOsnD4L-hA1Q"
            target="_blank"
          >
            <img src="/youtube.png" alt="yb" />
          </a>
          <a href="https://wa.me/6287720776871" target="_blank">
            <img src="/whatsapp.png" alt="wa" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
