import { useState } from "react";
import { FcDonate } from "react-icons/fc";
import Modal from "../../Model/Model";
import DonationForm from "../../Pages/DonationForm/Form";
import LanguageSelector from "../../LanguageSelector";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  const toggleMenu = () => {
    // setIsMenuOpen(!isMenuOpen);
    setSmallScreen(!smallScreen)
  };

  return (
    // <header className="bg-white p-4 shadow-lg fixed top-0 w-full z-50">
    // <header className="bg-gradient-to-t from-[#e30323]  to-[#e50378] p-4 shadow-lg fixed top-0 w-full z-50">
    <header
      className="sm:p-4 p-2 shadow-lg fixed top-0 w-full z-50"
      style={{ background: "linear-gradient(to bottom, #e30323, #e50378)" }}
    >
      <style>
        {`
          .rotate {
            -webkit-animation: rotate 15s normal linear infinite;
            animation: rotate 15s normal linear infinite;
          }

          @keyframes rotate {
            0% {
              -webkit-transform: rotate3d(0, 0, 1, 0deg);
              transform: rotate3d(0, 0, 1, 0deg);
            }
            25% {
              -webkit-transform: rotate3d(0, 0, 1, 90deg);
              transform: rotate3d(0, 0, 1, 90deg);
            }
            50% {
              -webkit-transform: rotate3d(0, 0, 1, 180deg);
              transform: rotate3d(0, 0, 1, 180deg);
            }
            75% {
              -webkit-transform: rotate3d(0, 0, 1, 270deg);
              transform: rotate3d(0, 0, 1, 270deg);
            }
            100% {
              -webkit-transform: rotate3d(0, 0, 1, 360deg);
              transform: rotate3d(0, 0, 1, 360deg);
            }
          }
        `}
      </style>
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex flex-col sm:flex-row text-black text-lg font-bold items-center">
          <div className="flex flex-row  items-center">
            <img
              src="/krishna2.png"
              width="50"
              // height="10"
              className="rotate"
              alt="Logo"
            />
            <span className="ml-2 text-white lg:text-2xl text-[12px] font-inter">
              YOGESHWAR SHRI KRISHNA FOUNDATION
            </span>
          </div>
          {/* <div className="flex text-orange-600 font-bold text-xs justify-between items-center mt-2 sm:mt-0 sm:ml-4">
            ॥ कृष्णं सदा सहायते ॥
          </div> */}
        </div>

        <button
          className="sm:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <nav
          className={`${
            // isMenuOpen ? "block" : "hidden"
            smallScreen ? "block" : "hidden"
          } w-full sm:w-auto flex flex-col font-inter sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-0 sm:block`}
        >
          {/* <a href="/" className="text-gray-600 hover:text-black">
            Home
          </a>
          <a href="/about" className="text-gray-600 hover:text-black">
            About
          </a>
          <a href="/contact" className="text-gray-600 hover:text-black">
            Contact
          </a> */}
          <div className="flex sm:flex-row flex-col text-white font-semibold items-center gap-1">
            <a className="p-1 px-2 group" href="/">
              Home
              <div className="bg-amber-200 h-[2px] w-0 sm:group-hover:w-full group-hover:w-[12%] transition-all duration-500"></div>
            </a>
            <a className="p-1 px-2 group" href="/about">
              About
              <div className="bg-amber-200 h-[2px] w-0 sm:group-hover:w-full group-hover:w-[13%] transition-all duration-500"></div>
            </a>
            <a className="p-1 px-2 group" href="/contact">
              Contact
              <div className="bg-amber-200 h-[2px] w-0 sm:group-hover:w-full group-hover:w-[15%] transition-all duration-500"></div>
            </a>
            <LanguageSelector />
            {/* <button className="flex gap-2 items-center mx-auto bg-gradient-to-r from-pink-500 to-amber-500 hover:from-pink-600 hover:to-amber-600 text-white font-bold py-1 px-2 sm:mb-0 mb-2 rounded-full">
              DONATE NOW{" "}
              <span>
                <FcDonate size={20} />
              </span>
            </button> */}
            <button
              onClick={() => {
                setIsMenuOpen(true);
              }}
              className="group flex gap-2 items-center mx-auto bg-gradient-to-r from-pink-500 to-amber-500 text-white  py-1 px-3 rounded-full sm:mb-0 mb-2 glow transition-colors duration-300 hover:bg-white hover:bg-none md:hidden lg:block"
            >
              <h4
                className="group-hover:text-transparent group-hover:bg-clip-text font-inter"
                style={{
                  // color: "white", // Default text color
                  background: "linear-gradient(to right, #ec4899, #f59e0b)",
                  WebkitBackgroundClip: "text",
                  // WebkitTextFillColor: "transparent",
                }}
              >
                DONATE NOW
              </h4>
              <span>
                <FcDonate size={20} className="sm:hidden"/>
              </span>
            </button>
          </div>
        </nav>
      </div>
      <Modal
        isOpen={isMenuOpen}
        onClose={() => {
          setIsMenuOpen(false);
        }}
      >
        <DonationForm />
      </Modal>
      
    </header>
  );
};

export default Header;
