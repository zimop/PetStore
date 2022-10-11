import logo from "./logo.svg";
import "./App.css";

import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./containers/layout/index";
import ItemPage from "./containers/pages/ItemPage/itemPage";
import Catalogue from "./containers/pages/Catalogue/catalogue";
import HomePage from "./containers/pages/homePage/homePage";
import AddEditProductPage from "./containers/pages/AddEditProduct/AddEditProduct";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/product/:productId" element={<ItemPage />} />
          <Route path = "/addProduct" element= {<AddEditProductPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
