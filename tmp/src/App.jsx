import React from "react";
// import Header from "../components/Header";
// import SignUp from "../components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Hero from "./components/Hero";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<IndexPage />} />
                <Route path={'/login'} element={<LoginPage />} />
                <Route path={'/signup'} element={<SignupPage />} />
                <Route path={'/main'} element={<Hero />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;