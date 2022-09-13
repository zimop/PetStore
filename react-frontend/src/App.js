import logo from "./logo.svg";
import "./App.css";

import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./containers/layout/index";
import ProductPage from "./containers/pages/ItemPage/itemPage";
import Catalogue from "./containers/pages/Catalogue/catalogue"

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<h1>Placeholder Home Page</h1>} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
