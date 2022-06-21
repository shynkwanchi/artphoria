import React from "react";
import { Route, Routes } from "react-router-dom";
import UseAsUser from "./layout/useAsUser";
import Home from "./routes/home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<UseAsUser/>}>
          <Route path="/" element={<Home />} />{" "}
        </Route>{" "}
      </Routes>
    </>
  );
}

export default App;
