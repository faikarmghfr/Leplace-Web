import React from "react";
import Home from "../components/Home";
import Header from "../components/Header";

const InputMateri = () => {
  return (
    <>
      <div className="flex">
        <Home />
        <div className="flex flex-col w-screen">
          <Header name="Input Materi" />
          <div>INI INPUT MATERI</div>
        </div>
      </div>
    </>
  );
};

export default InputMateri;
