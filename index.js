require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.static("./public"));
app.use(express.json());

//connect to monggose
const connectDB = require("./db/connect");

app.get("/", (req, res) => {
  res.send("til server");
});

//routers
const cardRouter = require("./routes/cardRoutes");
const courseRouter = require("./routes/courseRoutes");

// error handler

app.use(express.json());

// routes
app.use("/api/v1/cards", cardRouter);
app.use("/api/v1/courses", courseRouter);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_CODE);
    app.listen(port, () => {
      console.log("server is lening on port ", port);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
