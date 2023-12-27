import "./services.scss";
import { motion } from "framer-motion";

const Services = () => {
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

  const sendWa = () => {
    const link = "https://wa.me/6287720776871";

    window.open(link, "_blank");
  };

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Dedicating to transform your visionary <br />
          concepts into digital reality
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="people" />
          <h1>
            <motion.b
              whileHover={{ background: "orange", borderRadius: "20px" }}
            >
              Unique
            </motion.b>{" "}
            Ideas
          </h1>
        </div>

        <div className="title">
          <h1>
            <motion.b
              whileHover={{ background: "orange", borderRadius: "20px" }}
            >
              For Your
            </motion.b>{" "}
            Vision
          </h1>

          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            WHAT I DO?
          </motion.button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend</h2>
          <p>
            Inovasi untuk kebutuhan backend Anda dengan keahlian saya dalam
            Node.js, Express.js, Socket.io, dan manajemen folder statis yang
            dinamis. pemrosesan data real-time hingga integrasi API yang mulus,
            layanan backend saya menjamin efisiensi, keamanan, dan keunggulan
            teknologi yang mendorong ambisi digital Anda.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={sendWa}
          >
            Chat ME
          </motion.button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frontend</h2>
          <p>
            Sebagai pengembang React.js, keahlian saya sudah mempuni dan
            memanfaatkan keunggulan React.js, Redux, dan Framer Motion untuk
            menciptakan antarmuka pengguna yang visual, interaktif, dan
            responsif dengan mulus.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={sendWa}
          >
            Chat ME
          </motion.button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Fullstack MERN Bootcamp</h2>
          <p>
            Wujudkan impian menjadi seorang Web Developer dengan Dengan
            mengikuti program ini, Anda akan memiliki kemampuan untuk
            menciptakan berbagai jenis website sesuai dengan imajinasi Anda.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={sendWa}
          >
            Chat ME
          </motion.button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>TOEFL Online Test</h2>
          <p>
            Menyediakan layanan TOEFL Online test untuk berbagai kebutuhan,
            hasilnya sudah dapat digunakan dibeberapa kampus dan dibeberapa
            kementrian. Memungkinkan akses ke berbagai kesempatan pendidikan dan
            profesional di seluruh dunia.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={sendWa}
          >
            Chat ME
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
