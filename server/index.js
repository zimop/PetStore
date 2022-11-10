const path = require("path");
const express = require("express");
const expressFormData = require("express-form-data");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressFormData.parse());

const productRouter = require("./routers/productRouter");
const ordersRouter = require("./routers/ordersRouter");
const authRouter = require("./routers/authRouter");
const profileRouter = require("./routers/profileRouter");

const apiRouter = express.Router();
apiRouter.use(productRouter);
apiRouter.use(ordersRouter);
apiRouter.use(authRouter);
apiRouter.use(profileRouter);

app.use("/api", apiRouter);

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../react-frontend/build")));

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "../react-frontend/build", "index.html")
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;
