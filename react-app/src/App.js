import logo from "./logo.svg";
import "./App.css";

import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import PrimarySearchAppBar from "./containers/navBar/Navbar";

function App() {
  return (
    // <ThemeProvider>
    <BrowserRouter>
      <main>
        {/* // Navigation Bar */}
        <PrimarySearchAppBar />
      </main>
    </BrowserRouter>
    // </ThemeProvider>
  );
}

export default App;
