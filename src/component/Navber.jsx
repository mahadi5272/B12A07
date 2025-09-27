import React from "react";


const Navber = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm   p-5">
      <div className="max-w-[1200px] m-auto flex justify-between max-sm:flex-col">
        <div className="flex items-center">
          <p className=" font-bold text-[25px]">CS — Ticket System</p>
        </div>
        <div className="flex gap-7 max-sm:flex-col">
          <ul className="flex gap-5 items-center font-bold max-sm:flex-wrap">
            <li>Home</li>
            <li>FAQ</li>
            <li>Changelog</li>
            <li>Blog</li>
            <li>Download</li>
            <li>Contact</li>
          </ul>
          <button className="max-sm:h-15 max-sm: bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-full  text-white p-2 rounded-lg ">
            + New Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
