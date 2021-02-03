import React, { useState, useEffect } from "react";

import { getHelloMessage } from "../services/api";
import css from "./css/home-page.module.css";

const HomePage = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const getData = async () => {
      const results = await getHelloMessage();
      setData(results);
    };

    getData();
  }, []);

  return (
    <div className={css.app}>
      <h1></h1>
      <div>{data?.exampleMessage}</div>
    </div>
  );
};

export default HomePage;
