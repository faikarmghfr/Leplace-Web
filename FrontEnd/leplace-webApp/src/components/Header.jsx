import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Header = (props) => {
  const Context = useContext(UserContext);
  const navigate = useNavigate();
  console.log(Context.user);
  return (
    <>
      <div className="pl-10 pr-10 pt-7">
        <nav className=" border-gray-200 shadow-xl md:px-7 rounded-xl py-2.5  bg-[#00664F] w-12/12 h-max">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <div className="text-white">{props.name}</div>
            <div class="flex items-center md:order-2">
              <img
                className="w-10 h-10 rounded-full"
                src="/images/fai.png"
                alt="user photo"
              />
              {Context.user ? (
                <div className="block ml-4 text-white text-sm">
                  <div className="font-light text-sm">
                    {Context.user.nama}
                  </div>
                  <div className="font-extralight text-xs">{Context.user.NIM}</div>
                </div>
              ) : (
                <div className="block ml-4 text-white text-sm">
                  <div className="font-light text-sm">
                    Dummy Name
                  </div>
                  <div className="font-extralight text-xs">Dummy NIM</div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
