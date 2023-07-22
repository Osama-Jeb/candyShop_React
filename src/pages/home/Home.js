import React from "react";
import "./_home.scss"
import hero from "../../assets/images/hero.png"
import { Carousel } from "./components/Carousel";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <>
      <motion.div
        initial={{ x: "100vw", opacity:0 }}
        animate={{ x: 0, opacity:1 }}
        transition={{ type: "tween", delay: 0.2, duration: 0.4, stiffness: 200 }}
      >
        <div className="heroHolder">
          <img className="heroImg" src={hero} alt="" />
          <div className="text-light text-center">
            <h1>I'll take you to the candy shop</h1>
            <p className="text-secondary">Yum Lorem Yum</p>
            <button className="btn btn-light">BUY BUY BUY</button>
          </div>
        </div>

        <div className="secNcaro container">
          <div className="sectionTitle container w-50 p-2 text-center text-light">
            <h4>Shop Your Favourite Food</h4>
            <h1 className="pacifico">HAPPY EATING</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis earu obcaecati.</p>
          </div>

          <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay: 0.2, duration: 1}}
          >
          <Carousel></Carousel>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
