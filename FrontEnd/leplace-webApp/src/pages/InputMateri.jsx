import React, { useEffect, useState } from "react";
import Home from "../components/Home";
import Header from "../components/Header";

const InputMateri = () => {
  return (
    <>
      <div className="flex">
        <Home />
        <div className="flex flex-col w-screen">
          <Header name="Input Materi" />
          <div className="gap-4 pl-10 pr-10 pt-10">
            <div class="block w-full rounded-lg border border-gray-200 bg-white p-6 shadow-md">
              <form>
                <div class="mb-6">
                  <label
                    for="minggu_ke"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Materi Minggu ke-
                  </label>
                  <input
                    type="number"
                    id="minggu-ke"
                    class="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/6 p-2.5 "
                    placeholder="(1-16)"
                    min="1"
                    max="16"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="mata_kuliah"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Mata Kuliah
                  </label>
                  <input
                    type="text"
                    id="mata_kuliah"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/6 p-2.5 "
                    placeholder="Masukan Mata Kuliah"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="deskripsi"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Deskripsi
                  </label>
                  <textarea
                    type="deskripsi"
                    id="deskripsi"
                    rows="3"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 "
                    placeholder="Masukkan Deskripsi atau keterangan"
                    required
                  />
                </div>
                

                <div className="mt-5 flex flex-col justify-start gap-3">
                  <label
                    for="deadline"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Input File
                  </label>
                  <div class="flex w-full items-center justify-center">
                    <label
                      for="dropzone-file"
                      class=" flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
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
                        <p class="mb-2 text-sm text-gray-500">
                          <span class="font-semibold">Click to upload</span> or
                          drag and drop
                        </p>
                        <p class="text-xs text-gray-500 ">
                          PDF, SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-sm mt-3 w-40 text-white"
                    >
                      Add Submission
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputMateri;
