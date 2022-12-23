import React, { useState, createContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashboard from "./pages/Dashboard";
import DetailsTugas from "./pages/DetailsTugas";
import Help from "./pages/Help";
import InputMateri from "./pages/InputMateri";
import InputTugas from "./pages/InputTugas";
import Materi from "./pages/Materi";
import Profile from "./pages/Profile";
import Tugas from "./pages/Tugas";

export const UserContext = createContext(null);
const App = () => {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tugas" element={<Tugas />} />
        <Route path="/inputTugas" element={<InputTugas />} />
        <Route path="/materi" element={<Materi />} />
        <Route path="/inputMateri" element={<InputMateri />} />
        <Route path="/details/:mhsId" element={<DetailsTugas />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </UserContext.Provider>
  );
};

export default App;
