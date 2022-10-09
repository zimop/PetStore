import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./containers/layout/index";
import ItemPage from "./containers/pages/ItemPage/itemPage";
import Catalogue from "./containers/pages/Catalogue/catalogue";
import HomePage from "./containers/pages/homePage/homePage";
import ClickCollectPage from "./containers/pages/homePage/staticPage/clickCollectPage";
import DeliveryPage from "./containers/pages/homePage/staticPage/deliveryPage";
import AboutUsPage from "./containers/pages/homePage/staticPage/aboutUsPage";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/product/:productId" element={<ItemPage />} />

          {/* Static Pages */}
          <Route path="info/click-collect" element={<ClickCollectPage />} />
          <Route path="/info/delivery" element={<DeliveryPage />} />
          <Route path="/info/about-us" element={<AboutUsPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
