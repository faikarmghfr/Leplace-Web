import React from "react";
import Home from "../components/Home";
import Header from "../components/Header";

const InputTugas = () => {
  return (
    <>
      <div className="flex">
        <Home />
        <div className="flex flex-col w-screen">
          <Header name="Input Tugas" />
          <div>INI INPUT TUGAS</div>
        </div>
      </div>
    </>
  );
};

export default InputTugas;
