import "./App.css";

import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./containers/layout/index";
import ItemPage from "./containers/pages/ItemPage/itemPage";
import Catalogue from "./containers/pages/Catalogue/catalogue";
import HomePage from "./containers/pages/homePage/homePage";
import LoginPage from "./containers/pages/Login/loginPage";
import SignUpPage from "./containers/pages/Login/signUpPage";
import CheckoutPage from "./containers/pages/checkout/checkoutPage";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/product/:productId" element={<ItemPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
