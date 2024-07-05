import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbody bg-red-300 align-middle h-10 ">
        <nav className=" flex justify-between p-1">
          <div>
            <span className="font-bold text-xl mx-7 hover:text-red-800">kaam</span>
          </div>
          <ul className="flex gap-8 mx-7">
            <li className="hover:font-bold transition-all">Home</li>
            <li className="hover:font-bold transition-all">About</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
