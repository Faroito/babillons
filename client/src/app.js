import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import css from "./app.module.css";

function App() {
  const [data, setData] = useState();

  const fetchData = useCallback(async () => {
    axios
      .get("http://localhost:4000/")
      .then((response) => setData(response.data));
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <div className={css.app}>{data?.exampleMessage}</div>;
}

export default App;
