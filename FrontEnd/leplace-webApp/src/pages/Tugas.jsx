import React from "react";
import Home from "../components/Home";
import Header from "../components/Header";

const Tugas = () => {
  return (
    <>
      <div className="flex">
        <Home />
        <div className="flex flex-col w-screen">
          <Header name="Tugas" />
          <div>INI TUGAS</div>
        </div>
      </div>
    </>
  );
};

export default Tugas;
