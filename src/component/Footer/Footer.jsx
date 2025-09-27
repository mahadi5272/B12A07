import React from "react";
import Png1 from "../../assets/fi_145807.png"
import Png2 from "../../assets/Group (1).png"
import Png3 from "../../assets/fi_6244710.png"
import Png4 from "../../assets/fi_145807.png"

const Footer = () => {
  return (
    <footer className=" bg-black text-gray-400">
      <div className="max-sm:grid-cols-1 p-20 grid grid-cols-5 items-center gap-5 max-w-[1200px] m-auto  ">
        <div>
          <h1 className="font-bold text-white">CS — Ticket System</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-white">Company</h1>
          <ul>
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Saled</li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-white">Services</h1>
          <ul>
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>

        <div>
          <h1 className=" text-white font-bold">Information</h1>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>

        <div>
          <h1 className=" text-white font-bold">Social Links</h1>
          <ul >
            <li className="flex ">
              <img className="max-sm:object-contain" src={Png1} alt="" />
              @CS — Ticket System
            </li>
            <li className="flex object-fill">
              <img className="max-sm:object-contain" src={Png2} alt="" />
              @CS — Ticket System
            </li>
            <li className="flex object-fill">
              <img className="max-sm:object-contain" src={Png3} alt="" />
              @CS — Ticket System
            </li>
            <li className="flex object-fill">
              <img className="max-sm:object-contain" src={Png4} alt="" />
              support@cst.com
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
