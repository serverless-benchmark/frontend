import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./sections/Intro";

const App = () => {
  return (
    <div className="w-screen h-full min-h-screen bg-gradient-br-blue-purple-light antialiased overflow-auto text-grey-darkest font-sans">
      <div className="container m-4 h-full mx-auto">
        <Header />
        <Intro />
      </div>
      <Footer />
    </div>
  );
};

export default App;
