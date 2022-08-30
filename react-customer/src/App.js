import logo from "./logo.svg";
import "./App.css";

import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./containers/layout/index";
import ProductPage from "./containers/pages/ItemPage/itemPage";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <ProductPage />
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
