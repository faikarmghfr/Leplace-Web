import React, { useEffect, useRef, useState } from "react";

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const [user, setUser] = useState("");

    const [token, setToken] = useState();
    if (!token) {
        return <Login setToken={setToken} />;
    }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-emerald-800">
        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8">
          <form class="space-y-6" action="#">
            <h5 class="text-2xl font-bold text-emerald-500">
              Sign in to Leplace
            </h5>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 "
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 "
                required
              />
            </div>
            <button
              type="submit"
              class="w-full text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Login to your account
            </button>
            <div class="text-sm font-medium text-gray-500">
              Not registered?{" "}
              <a href="/register" class="text-emerald-700 hover:underline ">
                Create account
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
