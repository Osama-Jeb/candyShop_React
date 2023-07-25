import React, { createContext, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import { Navigation } from "./layouts/Navigation";
import { ProductId } from "./pages/products_id/ProductsId";
import { Modal } from "./layouts/modal/Modal";
import { ProductsIdUnique } from "./pages/products_id/components/ProductsIdUnique";
import { AnimatePresence } from "framer-motion";

// importing all my variables and images from here as an array
import { productInfo } from "./variables"

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

  const SidebarItem = (element, action) => {
    const uniqueIndex = element.id - 1;

    switch (element.type) {
      case "drinks":
        action === "add" ? allValue.addItem(0, uniqueIndex) : allValue.removeItem(0, uniqueIndex);
        break;
      case "chips":
        action === "add" ? allValue.addItem(1, uniqueIndex) : allValue.removeItem(1, uniqueIndex);
        break;
      case "bars":
        action === "add" ? allValue.addItem(2, uniqueIndex) : allValue.removeItem(2, uniqueIndex);
        break;
      case "candy":
        action === "add" ? allValue.addItem(3, uniqueIndex) : allValue.removeItem(3, uniqueIndex);
        break;
      default:
        break;
    }
  };

  // to calculate the total
  //todo issue when adding the first element.
  //todo check the addItem or calc functions later
  const calc = () => {
    let total = 0;
    let temp = [...basketInfo]
    for (let index = 0; index < temp.length; index++) {
      let element = temp[index];
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
    SidebarItem: SidebarItem,
    // total price to display on checkout sidebar
    totalPrice: [totalPrice, setTotalPrice],
    // my Users
    users: [users, setUsers],
  }

  // Changes value according to current route path
  const location = useLocation();

  return (
    <>
      {/* Calling the context provider using my object as a value */}
      <Bakset.Provider value={allValue} >
        <Navigation />
        {/* Detects when Routes change */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route path="/candyShop_React/*" element={<Error />} />
            <Route path="/candyShop_React/" element={<Home />} />
            <Route path="/candyShop_React/products/:id" element={<ProductId />} />
            <Route path="/candyShop_React/products/:id/:unique" element={<ProductsIdUnique />} />
          </Routes>
        </AnimatePresence>
        <Modal />
      </Bakset.Provider>
    </>
  );
};
