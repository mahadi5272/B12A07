import React from "react";
import bg from "../assets/vector1.png";

const Banner = ({ InProgress, Resolve }) => {
  return (
    <div className=" grid grid-cols-2 gap-5 max-w-[1200px] m-auto ">
      <div className=" text-center bg-gradient-to-r from-[#632EE3] to-[rgb(159,98,242)] ">
        <div

          className=" "
        >
          <div
            style={{
              backgroundImage: `url(${bg}), url(${bg})`,
              backgroundSize: "200px 150px, 200px 150px",
              backgroundRepeat: "no-repeat, no-repeat",
              backgroundPosition: "left top, right bottom"
            }}
            className="p-8 w-full"
          >
            <p className=" text-white font-bold ">In-Progress</p>
            <p className=" text-white font-bold text-[25px]">{InProgress}</p>
          </div>
        </div>
      </div>
      <div  className=" text-center  bg-gradient-to-r from-[#54CF68] to-[#00827A]">
        <div            style={{
              backgroundImage: `url(${bg}),url(${bg})`,
              backgroundSize: "200px 150px, 200px 150px",
              backgroundRepeat: "no-repeat, no-repeat",
              backgroundPosition: "left top, right bottom"
            }} className="p-8 w-full">
          <p className=" text-white font-bold ">Resolved</p>
          <p className=" text-white font-bold text-[25px]">{Resolve}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
