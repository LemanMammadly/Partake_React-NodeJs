import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const BestSellerContext = createContext();

export const BestSellerContextProvider = ({ children }) => {
  const [bestseller, setBestseller] = useState();
  const [bestsellerprod, setBestsellers] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3030/product")
      .then((res) =>
        setBestseller(
          res.data.products.filter(
            (x) => x.statusCategory === "6403328368fcefd61e1127ea"
          )
        )
      )
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3030/product")
      .then((res) =>
        setBestsellers(
          res.data.products.filter(
            (x) =>
              x.category[0] === "6423155a9dcd1be03cdbd0be" ||
              x.category[1] === "6423155a9dcd1be03cdbd0be" ||
              x.category[2] === "6423155a9dcd1be03cdbd0be" ||
              x.category[3] === "6423155a9dcd1be03cdbd0be"
          )
        )
      )
      .catch((error) => console.log(error));
  }, []);

  const values = {
    bestseller,
    setBestseller,
    bestsellerprod,
    setBestsellers
  };
  return (
    <BestSellerContext.Provider value={values}>
      {children}
    </BestSellerContext.Provider>
  );
};

export const useBestseller = () => {
  const context = useContext(BestSellerContext);

  if (context === undefined) {
    throw new Error("useBestseller must be used within a BestsellerProvider");
  }

  return context;
};