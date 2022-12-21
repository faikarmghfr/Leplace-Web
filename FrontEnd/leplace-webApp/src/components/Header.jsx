import React from "react";

const Header = (props) => {
  return (
    <>
      <div className="pl-10 pr-10 pt-7">
        <nav class=" border-gray-200 shadow-xl px-2 md:px-7 rounded-xl py-2.5  bg-[#00664F] w-12/12 h-max">
          <div class="container flex flex-wrap items-center justify-between mx-auto">
            <div className="text-white">{props.name}</div>
            <div class="flex items-center md:order-2">
              <img
                class="w-10 h-10 rounded-full"
                src="/images/fai.png"
                alt="user photo"
              />
              <div className="block ml-4 text-white text-sm">
                <div className="font-light text-sm">Faikar Mochammad Ghifari</div>
                <div className="font-extralight text-xs">201511008</div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
