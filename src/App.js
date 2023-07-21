import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import { Navigation } from "./layouts/Navigation";
import { Product_id } from "./pages/products_id/Products_id";
import { Modal } from "./layouts/modal/Modal";
import { Products_Id_Unique } from "./pages/products_id/components/Products_Id_Unique";

import {productInfo} from "./variables"

export const App = () => {
  const [allInfo, setAllInfo] = useState(productInfo)

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product_id allInfo={allInfo} />} />
        <Route path="/products/:id/:unique" element={<Products_Id_Unique allInfo={allInfo} />} />
      </Routes>
      <Modal />
    </>
  );
};
