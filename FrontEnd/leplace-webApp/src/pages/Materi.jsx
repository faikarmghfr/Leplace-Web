import React from "react";
import Home from "../components/Home";
import Header from "../components/Header";

const Materi = () => {
  return (
    <>
      <div className="flex w-screen">
        <Home />
        <div className="flex flex-col w-screen">
          <Header name="Materi" />
          <div className="gap-4 pl-10 pr-10 pt-10">
            <div className="card card-side bg-white shadow-lg mb-7">
              <div>
                <div className="w-10 h-full bg-[#0ba6ff]" />
              </div>
              <div className="card-body">
                <h2 className="card-title text-[#131313]">
                  Minggu 1 - Komputer Grafik
                </h2>
                <p className="text-base-100">
                  Click the button to watch on Jetflix app.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn bg-[#0ba6ff] text-white btn-ghost hover:bg-[#0087d5]">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Materi;
