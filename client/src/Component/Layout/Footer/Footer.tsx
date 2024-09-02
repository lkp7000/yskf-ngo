import { FaFacebook, FaGoogle, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-8 mt-auto">
      {/* <div className="container mx-auto flex flex-rows justify-between items-center gap-6"> */}
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        <div className="flex flex-col justify-between items-center gap-2 text-white ">
          <div className="flex items-center gap-2">
            <img
              src="/krishna2.png"
              width="100"
              height="80"
              className="rounded-full"
            />
            <span> ॥ कृष्णं सदा सहायते ॥</span>
          </div>

          <span className=" justify-between items-center gap-4 text-white font-inter">
            <p className="text-wrap text-center">
              Yogeshwar Shri Krishna Foundation
            </p>
          <p>CIN : U88900MP2023NPL0675036</p>
          </span>
          <div className="flex flex-rows justify-between items-center gap-4 text-white">
            <span
              className="rounded-full p-2"
              style={{
                background: "linear-gradient(to bottom, #e30323, #e50378)",
              }}
            >
              <FaFacebook size={20} />
            </span>
            <span
              className="rounded-full p-2"
              style={{
                background: "linear-gradient(to bottom, #e30323, #e50378)",
              }}
            >
              <FaWhatsapp size={20} />
            </span>
            <span
              className="rounded-full p-2"
              style={{
                background: "linear-gradient(to bottom, #e30323, #e50378)",
              }}
            >
              <FaLinkedin size={20} />
            </span>
            <span
              className="bg-[#e30323] rounded-full p-2"
              style={{
                background: "linear-gradient(to bottom, #e30323, #e50378)",
              }}
            >
              <FaGoogle size={20} className="bg-white-800" />
            </span>
          </div>
        </div>
        <div className="flex flex-col font-inter justify-between items-center gap-4 text-white">
          <span className="text-lg lg:mt-0 font-bold mt-4">Navigation</span>
          <span className="text-sm">Home</span>
          <span className="text-sm">About</span>
          <span className="text-sm">Services</span>
        </div>
        <div className="flex flex-col font-inter justify-between items-center gap-4 text-white">
          <span className="text-lg font-bold lg:mt-0 mt-4">Services</span>
          <span className="text-sm">Education</span>
          <span className="text-sm">Food</span>
          <span className="text-sm">Hospital</span>

          {/* <span className="text-sm">Services</span> */}
        </div>
        <div className="flex flex-col font-inter justify-between items-center gap-4 text-white">
          <p className="text-lg font-bold lg:mt-0 mt-4">Address</p>
          <span className="text-sm text-wrap">46 Slice D/C Ananya Nagar </span>
          <span className="text-sm">Sch. No.78, Vijay Nagar </span>
          <span className="text-sm">Indore (M.P.) - 452010</span>
        </div>
      </div>
      {/* <div className="container mx-auto text-center text-white">
        &copy; {new Date().getFullYear()} My Website. All rights reserved.
      </div> */}
    </footer>
  );
};

export default Footer;
