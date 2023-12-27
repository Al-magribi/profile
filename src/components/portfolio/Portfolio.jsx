import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Ecommerce",
    img: "https://inspirasipagi.id/wp-content/uploads/2019/03/Strategi-e-commerce-Ramadan-_-Feature.jpg",
    desc: "Aplikasi berbasis web yang dikembangkan menggunakan teknologi modern seperti Node.js, Express.js, React.js, MongoDB, dan Redux. Aplikasi ini dirancang untuk memberikan pengguna pengalaman berbelanja online yang mulus, dilengkapi dengan sistem pembayaran yang terintegrasi dengan bank.",
    link: "https://demo1.jadidalmagribi.com",
  },
  {
    id: 2,
    title: "Digital School",
    img: "https://edutechtalks.com/wp-content/uploads/2022/07/Digital-schools-The-rise-of-fully-online-education-1146x600.jpeg",
    desc: "Digital School adalah proyek inovatif berbasis Node.js, Express.js, React.js, dan Redux yang menyediakan platform pendidikan online dengan fitur berita, ujian online, perpustakaan digital, dan pembayaran online melalui transfer bank.",
    link: "https://demo2.jadidalmagribi.com",
  },
  {
    id: 3,
    title: "POS",
    img: "https://www.equiperp.com/blog/wp-content/uploads/2023/05/Equip-Pos.png",
    desc: "Aplikasi Point of Sale (POS) berbasis Node.js dan Express.js untuk manajemen penjualan dan inventaris. Dengan antarmuka intuitif, POS ini memfasilitasi transaksi penjualan, pencatatan inventaris real-time, dan pelacakan penjualan harian. Fitur utama mencakup manajemen stok, pembuatan faktur, serta laporan penjualan dan inventaris untuk mendukung keputusan bisnis.",
    link: "https://demo3.jadidalmagribi.com",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const openDemo = () => {
    window.open(item.link, "_blank");
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h3>{item.title}</h3>
            <article>{item.desc}</article>
            <button onClick={openDemo}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h2>My Projects</h2>
        <motion.div className="bar" style={{ scaleX }}></motion.div>
      </div>

      {items?.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
