import React, { createContext, useContext, useEffect, useState } from "react";
import { APIs } from "../const/APIs";

const getAllProducts = APIs.getAllProducts;
const getSingleProduct = APIs.getSingleProduct;

const MyExamContext = createContext();

export const MyExamInformationProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(getAllProducts);
      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(getSingleProduct);
      const data = await response.json();
      setSingleProduct(data);
    }
    fetchData();
  }, []);

  // states
  return (
    <MyExamContext.Provider
      value={{
        products,
        setProducts,
        singleProduct,
        setSingleProduct,
      }}
    >
      {children}
    </MyExamContext.Provider>
  );
};

export const useExamContext = () => {
  const context = useContext(MyExamContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
