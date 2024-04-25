import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import EquityLandingPage from "./pages/EquityLandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeAnalytics from "./pages/HomeAnalytics";
import BuyerLandingPage from "./pages/BuyerLandingPage";
import FaqPage from "./pages/FaqPage";
import BlogsPage from "./pages/BlogsPage";
import DetailsPage from "./pages/DetailsPage";
import Seller from "./pages/Seller";
import HomeEquityLanding from "./pages/HomeEquityLanding";
import PressPage from "./pages/PressPage";
import CulturePage from "./pages/CulturePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/equity-landing" element={<EquityLandingPage />} />
        <Route path="/home-analytics-landing" element={<HomeAnalytics />} />
        <Route path="/buyer-landing" element={<BuyerLandingPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route exact path="/details/:id" element={<DetailsPage />} />
        <Route exact path="/seller" element={<Seller />} />
        <Route
          exact
          path="/home-equity-qualify"
          element={<HomeEquityLanding />}
        />
        <Route exact path="/press" element={<PressPage />} />
        <Route exact path="/culture" element={<CulturePage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
