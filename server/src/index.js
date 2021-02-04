import express from "express";
import cors from "cors";

import room from "./routes/room.js";

const app = express();
app.use(cors());

app.use("/room", room);

const start = () => {
  try {
    const port = process.env.PORT || 4000;

    app.listen(port, () =>
      console.log(`Example app listening at http://localhost:${port}`)
    );
  } catch (err) {
    console.error(err);
  }
};

start();
