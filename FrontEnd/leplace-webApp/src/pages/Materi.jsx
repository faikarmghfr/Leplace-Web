import React from "react";
import Home from "../components/Home";
import Header from "../components/Header";

const Materi = () => {
  return (
    <>
      <div className="flex">
        <Home />
        <div className="flex flex-col w-screen">
          <Header name="Materi" />
          <div>INI MATERI</div>
        </div>
      </div>
    </>
  );
};

export default Materi;
