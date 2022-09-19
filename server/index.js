const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json()) 
app.use(express.urlencoded({ extended: false }))

//! first way - put all routers individually
const productRouter = require("./routers/productRouter");
app.use("/api/product", productRouter);

//! second way - put all routers in apiRouter.js
// const apiRouter = express.Router();
// apiRouter.use(productRouter);
const apiRouter = require("./routers/apiRouter");
app.use("/api", apiRouter);


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../react-frontend/build')));

app.use("/api", apiRouter);

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../react-frontend/build', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

