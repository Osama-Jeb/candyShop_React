import React from "react";
import "./_home.scss"
import hero from "../../assets/images/hero.png"
import { Carousel } from "./components/Carousel";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <>
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.9, ease: "easeInOut" }}
        exit={{
          x: "-100vw",
          opacity: 0,
          transition: { duration: 0.75, delay: 0.25, ease: "easeInOut" }
        }}
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
            <h4 className="pacifico">Shop Your Favourite Food</h4>
            <h1 className="wonka">HAPPY EATING</h1>
            <p className="choco">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis earu obcaecati.</p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.75, ease: "easeInOut" }}
          >
            <Carousel></Carousel>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
