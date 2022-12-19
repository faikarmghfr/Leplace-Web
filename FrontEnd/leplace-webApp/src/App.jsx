import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Help from "./pages/Help";
import InputMateri from "./pages/InputMateri";
import InputTugas from "./pages/InputTugas";
import Materi from "./pages/Materi";
import Profile from "./pages/Profile";
import Tugas from "./pages/Tugas";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tugas" element={<Tugas />} />
        <Route path="/inputTugas" element={<InputTugas />} />
        <Route path="/materi" element={<Materi />} />
        <Route path="/inputMateri" element={<InputMateri />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
};

export default App;
