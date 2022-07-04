import React from "react";
import "./App.css";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import MainPage from "./mainPage/MainPage";
import Login from "./LoginPage/Login";
import Form from "./Form/Form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Team from "./Team/Team";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
