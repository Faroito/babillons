import Express from "express";
import cors from "cors";

const app = Express();
app.use(cors());

app.get("/", (req, res) => {
  res.send({
    exampleMessage: "React client connected to the Express server !",
  });
});

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
