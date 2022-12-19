import React from "react";
import Home from "../components/Home";
import Header from "../components/Header";

const Profile = () => {
  return (
    <>
      <div className="flex">
        <Home />
        <div className="flex flex-col w-screen">
          <Header name="Profile" />
          <div>faikar</div>
        </div>
      </div>
    </>
  );
};

export default Profile;
