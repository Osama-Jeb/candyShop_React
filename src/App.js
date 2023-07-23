import React, { createContext, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import { Navigation } from "./layouts/Navigation";
import { Product_id } from "./pages/products_id/Products_id";
import { Modal } from "./layouts/modal/Modal";
import { Products_Id_Unique } from "./pages/products_id/components/Products_Id_Unique";

// importing all my variables and images from here as an array
import { productInfo } from "./variables"
import { AnimatePresence } from "framer-motion";

// creating my context
export const Bakset = createContext();

export const App = () => {
  // all my variables in a useState so I can modify them
  const [allInfo, setAllInfo] = useState(productInfo);
  const [basketInfo, setBasketInfo] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [users, setUsers] = useState([])

  // adding an item using what group it belongs to and what it's position is
  const addItem = (groupIndex, uniqueIndex) => {
    let temp = [...allInfo];
    if (temp[groupIndex].items[uniqueIndex].stock) {
      temp[groupIndex].items[uniqueIndex].stock -= 1;
      setAllInfo(temp);

      let tempBask = [...basketInfo];
      let newItem = temp[groupIndex].items[uniqueIndex];

      calc();
      let exists = tempBask.find(element => element.name === newItem.name);
      if (!exists) {
        tempBask.push(newItem);
        setBasketInfo(tempBask)
        calc();
      }
    } else {
      alert("Not in Stock")
    }
  }

  // opposite -_-
  const removeItem = (groupIndex, uniqueIndex) => {
    let temp = [...allInfo];

    let tempBask = [...basketInfo];
    let itemToRemove = temp[groupIndex].items[uniqueIndex];

    if (temp[groupIndex].items[uniqueIndex].stock < 10) {
      temp[groupIndex].items[uniqueIndex].stock += 1;
      setAllInfo(temp);
      if (temp[groupIndex].items[uniqueIndex].stock === 10) {
        let indexToRemove = tempBask.findIndex((element) => element.name === itemToRemove.name);
        if (indexToRemove !== -1) {
          tempBask.splice(indexToRemove, 1);
          setBasketInfo(tempBask);
        }
      }
    }
    calc();
  };

  // to calculate the total
  //todo something's still not right when adding the first element.
  //todo need to check the addItem function later
  const calc = () => {
    let total = 0;
    for (let index = 0; index < basketInfo.length; index++) {
      let element = basketInfo[index];
      total += element.price * (10 - element.stock);
    }
    setTotalPrice(total);
  }

  // What I'm gonna send to other components via useContext
  const allValue = {
    // my info and how to modify them
    allInfo: [allInfo, setAllInfo],
    // my basket and how to modify it
    basketInfo: [basketInfo, setBasketInfo],
    // functions to add and remove item
    addItem: addItem,
    removeItem: removeItem,
    // total price to display on checkout sidebar
    totalPrice: [totalPrice, setTotalPrice],
    // my Users
    users : [users, setUsers],
  }

  const location = useLocation();

  return (
    <>
      {/* Calling the context provider using my object as a value */}
      <Bakset.Provider value={allValue} >
        <Navigation />
        <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product_id />} />
          <Route path="/products/:id/:unique" element={<Products_Id_Unique />} />
        </Routes>
        </AnimatePresence>
        <Modal />
      </Bakset.Provider>
    </>
  );
};
