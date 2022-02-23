import React from "react";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import MyPage from "./Pages/MyPage/MyPage";
import MainPage from "./Pages/MainPage/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Container, Body } from "./App.style";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Body>
          <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path="/user" element={<MyPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </Body>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
