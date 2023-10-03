import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import Hero from "./components/Hero.jsx";
import Pagination from "./components/Pagination.jsx";
import PropertyPage from "./components/PropertyPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navigate to="/page/1" />} />
      <Route path="/page/:id" element={<App />} />

      <Route path="/:title" element={<PropertyPage />} />

      {/* <Route path='/page/:id' element={<Hero/>}/>   */}

      {/* passes city name to hero to render conditionally  */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
