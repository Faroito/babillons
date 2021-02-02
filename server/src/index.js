import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send({
    exampleMessage: "React client connected to the Express server !",
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);