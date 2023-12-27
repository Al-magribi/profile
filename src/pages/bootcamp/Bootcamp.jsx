import { motion } from "framer-motion";
import Navbar from "../../components/navbar/Navbar";
import "./bootcamp.scss";
import { toast } from "react-toastify";

const Bootcamp = () => {
  const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
      scale: 0.1,
    },
    animate: {
      x: 0,
      y: 1,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const donwload = () => {
    const link =
      "https://drive.google.com/file/d/1dYmoOQFejJnB6sLB1BvwpvK0ZPLTGS4l/view?usp=sharing";

    window.open(link, "_blank");
  };

  const register = () => toast.info("Pendaftaran Belum dibuka");

  return (
    <div>
      <Navbar />

      <motion.div
        className="bootcamp"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <motion.div className="textContainer" variants={variants}>
          <h4>Full Stack Web Developer</h4>
          <h2>Jadi Programmer dengan MERN Stack</h2>
          <p>
            Program online bootcamp full stack MERN web developer, membantu kamu
            jadi programer yang menguasai backend dan frontend. Program ini kami
            dirancang khusus untuk memberikan solusi yang mudah dan efektif agar
            kamu dapat menguasai keempat teknologi tersebut. Dengan mengikuti
            program ini, kamu akan memiliki kemampuan untuk menciptakan berbagai
            jenis website sesuai dengan imajinasi kamu. Jangan lewatkan
            kesempatan untuk bergabung, dan kuasai peran sebagai seorang
            pengembang Fullstack MERN. Mari wujudkan potensi kamu dalam dunia
            pengembangan web!
          </p>

          <div className="buttons">
            <motion.button
              whileHover={{
                backgroundColor: "orange",
                color: "black",
                fontWeight: "bold",
                border: "none",
                scale: 1.1,
              }}
              whileTap={{ scale: 0.9 }}
              onClick={register}
            >
              Daftar
            </motion.button>
            <motion.button
              whileHover={{
                backgroundColor: "orange",
                color: "black",
                fontWeight: "bold",
                border: "none",
                scale: 1.1,
              }}
              whileTap={{ scale: 0.9 }}
              onClick={donwload}
            >
              Silabus & Jadwal
            </motion.button>
          </div>
        </motion.div>
        <div className="imgContainer" variants={variants}>
          <motion.img
            whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
            src="/web.png"
            alt="mern"
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Bootcamp;
