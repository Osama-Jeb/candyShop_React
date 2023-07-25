import React, { useContext, useState } from "react";
import "./_home.scss"
import hero from "../../assets/images/hero.png"
import { Carousel } from "./components/Carousel";
import { motion } from "framer-motion";
import { Bakset } from "../../App";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const allValue = useContext(Bakset);
  const allInfo = allValue.allInfo[0];
  const [searchArray, setSearchArray] = useState([])

  const findItem = (event) => {
    let itemsFound = [];
    for (let index = 0; index < allInfo.length; index++) {
      let element = allInfo[index].items;
      let newItems = element.filter(el => el.name.includes(event.target.value.toLowerCase()))
      itemsFound = [...itemsFound, ...newItems];
    }
    setSearchArray([...itemsFound])
  }

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
            <h1 className="choco">HAPPY EATING</h1>
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

        <motion.div className="searchBar d-flex gap-1 align-items-center justify-content-center p-2 container"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
        >
          <input type="text" onChange={(event) => {
            findItem(event);
          }} />
          <button className="btn btn-purple fw-bolder fs-4 rounded-pill text-light ps-2 pe-2" onClick={(event) => {
            findItem(event)
          }}>
            Search
          </button>
        </motion.div>

        <motion.div className="myItems container"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
        >
          <>
            {
              searchArray.length === 0 ?
                <>
                  {
                    allInfo.map((element, index) =>
                      <>
                        {
                          allInfo[index].items.map((el, i) =>
                            <>
                              <div className="item">
                                <NavLink to={`/products/${element.type}/${el.name}`}>
                                  <img src={el.src} alt="" />
                                </NavLink>
                                <h2 className="mt-1">{el.name} : {el.price}$</h2>
                                <h2>Items Left: {el.stock}</h2>
                                <div className="d-flex align-items-center justify-content-around w-100">
                                  <button className="w-50" onClick={() => {
                                    allValue.removeItem(index, i)
                                  }}>-1</button>
                                  <button className="w-50" onClick={() =>
                                    allValue.addItem(index, i)
                                  }>+1</button>
                                </div>
                              </div>
                            </>
                          )
                        }
                      </>
                    )
                  }
                </>
                :
                <>
                  {
                    searchArray.map((el, i) =>
                      <>
                        <div className="item">
                          <NavLink to={`/products/${el.type}/${el.name}`}>
                            <img src={el.src} alt="" />
                          </NavLink>
                          <h2 className="mt-1">{el.name} : {el.price}$</h2>
                          <h2>Items Left: {el.stock}</h2>
                          <div className="d-flex align-items-center justify-content-around w-100">
                            <button className="w-50" onClick={() => {
                              allValue.SidebarItem(el, "remove")
                            }}>-1</button>
                            <button className="w-50" onClick={() =>
                              allValue.SidebarItem(el, "add")
                            }>+1</button>
                          </div>
                        </div>
                      </>
                    )
                  }
                </>
            }
          </>
        </motion.div>
      </motion.div>
    </>
  );
};
