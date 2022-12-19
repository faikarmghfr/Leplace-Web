import React from "react";
import Home from "../components/Home";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <Home />
        <div className="flex flex-col w-auto">
          <Header name="Dashboard" />
          <div className="flex flex-col pl-10 pr-10 pt-10 w-auto">
            <div class="grid grid-cols-4 gap-4 mb-7">
              <div className="card w-auto bg-primary text-primary-content">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="card w-auto bg-primary text-primary-content">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="card w-auto bg-primary text-primary-content">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="card w-auto bg-primary text-primary-content">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="mb-4 flex rounded-lg bg-blue-100 p-4 text-sm text-blue-700 dark:bg-blue-200 dark:text-blue-800"
              role="alert"
            >
              <svg
                aria-hidden="true"
                class="mr-3 inline h-5 w-5 flex-shrink-0"
                fill="random"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Info</span>
              <div>
                <span class="font-medium">Pengumuman!</span> Perkuliahan akan dimulai
                pada tanggal 8 Juli 2022. Bagi Mahasiswa yang terkendala untuk enroll
                mata kuliah silahkan hubungi PUTI di nomor +62 1234567890
              </div>
            </div>
            <div
              class="mb-4 flex rounded-lg bg-orange-400 p-4 text-sm text-white dark:bg-yellow-200 dark:text-yellow-800"
              role="alert"
            >
              <svg
                aria-hidden="true"
                class="mr-3 inline h-5 w-5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Info</span>
              <div>
                <span class="font-medium">Pengingat</span> Tugas yang belum silahkan
                segera diselesaikan dikarenakan akan perekapan nilai.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
