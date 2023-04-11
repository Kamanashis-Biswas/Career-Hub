import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MainHeader from "./components/MainHeader";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      {/* header */}
      <MainHeader />
      <Outlet />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
