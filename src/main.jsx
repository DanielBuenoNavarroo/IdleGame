import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./components/layout.jsx";

const pages = {
  Shop: import("./pages/Shop.jsx"),
  Inventory: import("./pages/Inventory.jsx"),
  Combat: import("./pages/Combat.jsx"),
  Agriculture: import("./pages/Agriculture.jsx"),
  Town: import("./pages/Town.jsx"),
  Chop: import("./pages/Chop.jsx"),
  Fishing: import("./pages/Fishing.jsx"),
  Fire: import("./pages/Fire.jsx"),
  Cook: import("./pages/Cook.jsx"),
  Mine: import("./pages/Mine.jsx"),
  Smithy: import("./pages/Smithy.jsx"),
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {Object.entries(pages).map(([path, component]) => (
            <Route
              key={path}
              path={`/${path.toLowerCase()}`}
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  {React.createElement(
                    React.lazy(() => component),
                    {}
                  )}
                </React.Suspense>
              }
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
