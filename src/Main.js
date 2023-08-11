import React from "react";
import { Routes, Route } from "react-router-dom";
import SignInSide from "./SignInSide";
import App from "./App";
import Submitted from "./components/end";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<SignInSide />} />
        <Route path="/signup" element={<App />} />
        <Route path="/success" element={<Submitted />} />
      </Routes>
    </main>
  );
}

export default Main;
