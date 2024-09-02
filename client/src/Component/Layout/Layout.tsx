import { Suspense, useState } from "react";
import Loading from "../Loading/Loading";
import Cards from "../Pages/Cards";
import Events from "../Pages/Events";
import { FcDonate } from "react-icons/fc";
import "./Style.css";
import ContriButers from "../Pages/ContriButers";
import { Link } from "react-router-dom";
import Modal from "../Model/Model";
import DonationForm from "../Pages/DonationForm/Form";
import InfiniteText from "./InfiniteText";
import { useTranslation } from "react-i18next";
// import LanguageSelector from "../LanguageSelector";
const getFontClass = (text: any) => {
  const hindiRegex = /[\u0900-\u097F]/;
  return hindiRegex.test(text) ? "font-hindi" : "font-inter";
};
const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const heading = t("heading");
  const subheading = t("subheading");
  return (
    <div>
      <div className="max-w-[1240px] mx-auto sm:pt-22 pt-20">
        {/* <LanguageSelector/> */}
        <InfiniteText />
        <Suspense fallback={<Loading isLoading={true} />}>
          <div className="max-w-[1240px]  flex flex-col sm:flex-row sm:text-left text-center  mx-auto ">
            <div className="basis-[45%] sm:mt-12 sm:px-4 ">
              <p className="lg:text-[28px] sm:text-[24px] text-[24px] font-medium text-[#ff4c86]  sm:mt-0 mt-4 font-inter">
                ॥ कृष्णं सदा सहायते ॥
              </p>
              {/* <p className="my-2 lg:text-5xl sm:text-3xl  text-2xl text-[#47445F] font-medium">
              {t("heading")}
            </p> */}
              <p
                className={`my-2 lg:text-5xl sm:text-3xl text-2xl text-[#47445F] ${getFontClass(
                  heading
                )} font-medium`}
              >
                {heading}
              </p>
              <p
                className={`text-[#63646d]  sm:text-left text-center px-2 sm:mt-2 sm:mb-5 my-3 ${getFontClass(
                  subheading
                )} font-normal md:hidden lg:block`}
              >
                {subheading}
                <span>
                  {" "}
                  <Link
                    to="/about"
                    className="text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    {` Read more...`}
                  </Link>
                </span>
              </p>

              <button
                onClick={() => {
                  setIsMenuOpen(true);
                }}
                className="group flex gap-2 items-center bg-gradient-to-r from-pink-500 to-amber-500 text-white font-bold py-2 px-6 rounded-full sm:my-0 my-4 mx-auto sm:mx-0 glow transition-colors duration-300 hover:bg-white hover:bg-none "
              >
                <h4
                  className="group-hover:text-transparent group-hover:bg-clip-text"
                  style={{
                    background: "linear-gradient(to right, #ec4899, #f59e0b)",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  DONATE NOW
                </h4>
                <span>
                  <FcDonate size={20} />
                </span>
              </button>
            </div>
            {/* <div className="basis-[60%]"> */}
            <div className="basis-[55%] sm:block hidden">
              <img src="donate1.jpg" alt="" className="w-full" />
            </div>
          </div>

          <Modal
            isOpen={isMenuOpen}
            onClose={() => {
              setIsMenuOpen(false);
            }}
          >
            <DonationForm />
          </Modal>
        </Suspense>
      </div>
      <Cards />
      <Events />
      <ContriButers />
    </div>
  );
};

export default Layout;
