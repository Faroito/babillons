import React from "react";

import { postRoomID } from "../services/api";
import { Button } from "../components";
import css from "./css/home-page.module.css";

const HomePage = ({ setRoomID }) => {
  const getNewRoomId = async () => {
    const data = await postRoomID();
    setRoomID(data.id);
    console.log(data);
  };

  return (
    <div className={css.page}>
      <h1>Babillons</h1>
      <Button
        to={"/call"}
        text={"Démarrer"}
        onClick={(e) => {
          getNewRoomId();
        }}
      />
    </div>
  );
};

export default HomePage;
