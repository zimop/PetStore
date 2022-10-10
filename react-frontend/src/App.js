import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./containers/layout/index";
import ItemPage from "./containers/pages/ItemPage/itemPage";
import Catalogue from "./containers/pages/Catalogue/catalogue";
import HomePage from "./containers/pages/homePage/homePage";
import ClickCollectPage from "./containers/pages/homePage/staticPage/clickCollectPage";
import DeliveryPage from "./containers/pages/homePage/staticPage/deliveryPage";
import AboutUsPage from "./containers/pages/homePage/staticPage/aboutUsPage";

import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <BrowserRouter>
      <AppLayout>
        <div className="App">
          {/* Loading Animation */}
          {loading ? (
            <img
              src={require("./containers/pages/homePage/staticPage/animations/30206-loading.gif")}
              style={{
                width: "30%",
                height: "100%",
                border: 0,
                display: "flex",
                margin: "auto",
                marginTop: "10%",
                marginBottom: "10%",
              }}
            />
          ) : (
            // All the Routes
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/product/:productId" element={<ItemPage />} />

              {/* Static Pages */}
              <Route path="info/click-collect" element={<ClickCollectPage />} />
              <Route path="/info/delivery" element={<DeliveryPage />} />
              <Route path="/info/about-us" element={<AboutUsPage />} />
            </Routes>
          )}
        </div>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
