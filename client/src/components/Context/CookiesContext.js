import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const CookiesContext = createContext();

export const CookiesContextProvider = ({ children }) => {
  const [cookies, setCookies] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3050/product")
      .then((res) =>
        setCookies(
          res.data.products.filter(
            (x) =>
              x.category[0] === "6422f5b4f2923dea70e80f9b" ||
              x.category[1] === "6422f5b4f2923dea70e80f9b" ||
              x.category[2] === "6422f5b4f2923dea70e80f9b"
          )
        )
      )
      .catch((error) => console.log(error));
  }, []);

  const values = {
    cookies,
    setCookies,
  };
  return (
    <CookiesContext.Provider value={values}>{children}</CookiesContext.Provider>
  );
};

export const useCookies = () => {
  const context = useContext(CookiesContext);

  if (context === undefined) {
    throw new Error("useCookies must be used within a CookiesProvider");
  }

  return context;
};
