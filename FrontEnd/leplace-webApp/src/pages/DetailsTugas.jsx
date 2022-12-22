import React, { useState, useEffect } from "react";
import Home from "../components/Home";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

const DetailsTugas = () => {
  const { mhsId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/api/tugas/" + mhsId)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setData(resp.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="flex w-screen">
        <Home />
        <div className="flex flex-col w-screen">
          <Header name="Details" />
          <div className="gap-4 pl-10 pr-10 pt-10">
            {data && (
              <div class="w-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#131313]">
                    {data.judul}
                  </h5>
                </a>
                <p class="mb-1 mt-7 font-normal text-gray-900 dark:text-gray-900">
                  Nilai : 90
                </p>
                <p class="mb-3 font-normal text-gray-900 dark:text-gray-900">
                  {data.deskripsi}
                </p>

                <div class="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    class="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-300 dark:bg-white dark:hover:border-gray-400 dark:hover:bg-gray-200"
                  >
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        aria-hidden="true"
                        class="mb-3 h-10 w-10 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or drag
                        and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        PDF, SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                </div>
                <div className="flex justify-center">
                  <button
                    type="button"
                    class="text-white w-1/6 mt-7 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm  py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsTugas;
