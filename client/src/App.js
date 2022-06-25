import React from "react";
import { Route, Routes } from "react-router-dom";
import UseAsUser from "./layout/useAsUser";
import ForgotPassword from "./routes/user-routes/forgot-pasword";
import Home from "./routes/user-routes/home";
import SignIn from "./routes/user-routes/sign-in";
import SignUp from "./routes/user-routes/sign-up";

function App() {
  return (
    <>
      <Routes>
        <Route element={<UseAsUser/>}>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
