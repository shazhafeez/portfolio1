import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Works/Work";
import Contact from "./components/ContactMe/Contact";
import Titan from "./components/Works/All works/Titan/Titan";
import RealState from "./components/Works/All works/RealState/RealState";
import TextUtility from "./components/Works/All works/TextUtility/TextUtility";
import NewsAPI from "./components/Works/All works/NewsAPI/NewsAPI";
import Amazon from "./components/Works/All works/Amazon/Amazon";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Work" element={<Work />} />
      <Route path="/Work/TitanStartup" element={<Titan />} />
      <Route path="/Work/realState" element={<RealState/>}/>
      <Route path="/Work/TextUtility" element={<TextUtility/>}/>
      <Route path="/Work/NewsAPI" element={<NewsAPI/>}/>
      <Route path="/Work/Amazon" element={<Amazon/>}/>
      <Route path="/Contact" element={<Contact />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
