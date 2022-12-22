import React from "react";
import { useState } from "react";

const Register = () => {
  const [role, setRole] = useState("");
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-emerald-800">
        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8">
          <form class="space-y-6" action="#">
            <h5 class="text-2xl font-bold text-emerald-500">
              Sign up to Leplace
            </h5>
            <div>
              <label
                for="role"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Role
              </label>
              <select
                type="text"
                name="role"
                id="role"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 "
                placeholder="Select Role"
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option selected>Select a Role</option>
                <option value="1">Mahasiswa</option>
                <option value="2">Dosen</option>
              </select>
            </div>

            {role == "1" && (
              <>
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 "
                    placeholder="Input Name"
                    required
                  />
                </div>
                <div>
                  <label
                    for="nim"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    NIM
                  </label>
                  <input
                    type="number"
                    name="nim"
                    id="nim"
                    placeholder="Input NIM"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 "
                    required
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 "
                    placeholder="Input Email"
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Input Password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 "
                    required
                  />
                </div>
              </>
            )}

            {role == "2" && (
              <>
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 "
                    placeholder="Input Name"
                    required
                  />
                </div>
                <div>
                  <label
                    for="nip"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    NIP
                  </label>
                  <input
                    type="number"
                    name="nip"
                    id="nip"
                    placeholder="Input NIP"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 "
                    required
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 "
                    placeholder="Input Email"
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Input Password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 "
                    required
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              class="w-full text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Login to your account
            </button>
            <div class="text-sm font-medium text-gray-500">
              Already have an Account?{" "}
              <a href="/login" class="text-emerald-700 hover:underline ">
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
