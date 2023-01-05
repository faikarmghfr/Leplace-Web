import React, { useState, useEffect } from "react";
import Home from "../components/Home";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const InputNilai = () => {
  const { mhsId } = useParams();
  const [data, setData] = useState({});
  const [file, setFile] = useState(null);
  const dataUser = JSON.parse(sessionStorage.getItem("user"));
  const formData = {
    tugas_id: mhsId,
    mahasiswa_id: dataUser.id,
    file_tugas: file,
  };
  const navigate = useNavigate();

  console.log(mhsId);
  console.log(dataUser.id);
  console.log(file);

  useEffect(() => {
    fetch("http://localhost:8000/api/tugas/" + mhsId)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setData(resp.data);
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
                <p class="mt-3 mb-3 font-normal text-gray-900 dark:text-gray-900">
                  {data.deskripsi}
                </p>

                {/* MASUKIN NILAI */}
                {data.nilai ? (
                  <div class="mb-6">
                    <label
                      for="success"
                      class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                    >
                      Nilai
                    </label>
                    <input
                      type="text"
                      id="success"
                      class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                      placeholder="get dari api"
                      disabled
                    />
                    <p class="mt-2 text-sm text-green-600 dark:text-green-500">
                      <span class="font-medium">Selamat</span> Nilai anda sudah
                      keluar.
                    </p>
                  </div>
                ) : (
                  <div class="mb-6">
                    <label
                      for="success"
                      class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                    >
                      Nilai
                    </label>
                    <input
                      type="text"
                      id="success"
                      class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-green-500"
                      placeholder="Masukan Nilai"
                    />
                  </div>
                )}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="btn bg-emerald-600 hover:bg-emerald-700 border-transparent hover:border-transparent btn-xl mt-3 w-40 text-white "
                  >
                    SUBMIT NILAI
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

export default InputNilai;
