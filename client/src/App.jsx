import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import PrivateRoute from "./components/PrivateRoute";
import About from "./pages/About";
import CreatePost from "./pages/CreatePost";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function App() {
    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
                <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
                <Route element={<PrivateRoute></PrivateRoute>}>
                    <Route
                        path="/dashboard"
                        element={<Dashboard></Dashboard>}
                    ></Route>
                </Route>
                <Route
                    element={<OnlyAdminPrivateRoute></OnlyAdminPrivateRoute>}
                >
                    <Route
                        path="/create-post"
                        element={<CreatePost></CreatePost>}
                    ></Route>
                </Route>
                <Route path="/projects" element={<Projects></Projects>}></Route>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    );
}
