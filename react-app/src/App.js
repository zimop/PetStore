import logo from "./logo.svg";
import "./App.css";

import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./containers/layout/index";
import ProductItem from "./containers/pages/ItemPage";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        {/* One Item */}
        <ProductItem />

        {/* Three tabs in itemPage */}
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
