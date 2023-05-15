import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Container from "./component/Container/Container";
import Login from "./page/Login/Login";

import Signup from "./page/Signup/Signup";
import Bookenglish from "./page/Bookenglish/Bookenglish";

import Tool from "./page/Tool/Tool";
import Cart from "./page/Cart/Cart";
import Souvenir from "./page/Souvenir/Souvenir";
import Sachtiengviet from "./page/Sachtiengviet/Sachtiengviet";
import ContainEL from "./page/Bookenglish/ContainEL";
import Chitiet from "./page/Bookenglish/Chitiet";
import { AllProvider } from "./context/AllContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AllProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Container />} />
          <Route path="/Sachtiengviet" element={<Sachtiengviet />} />
          {/* <Route path='/login' element={<Login/>}/> */}
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/english" element={<Bookenglish />}>
            <Route index element={<ContainEL />} />
          </Route>
          <Route path="/tool" element={<Tool />} />
          <Route path="/souvenir" element={<Souvenir />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/:id" element={<Chitiet />} />
      </Routes>
    </AllProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
