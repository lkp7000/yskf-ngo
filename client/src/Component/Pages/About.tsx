import { MdStarPurple500 } from "react-icons/md";
import { useTranslation } from "react-i18next";
import "../Layout/Style.css";

const getFontClass = (text: any) => {
  const hindiRegex = /[\u0900-\u097F]/;
  return hindiRegex.test(text) ? "font-hindi" : "font-inter";
};

const About = () => {
  const { t } = useTranslation();
  const aboutTextOne = t("aboutTextOne");
  const aboutTextTwo = t("aboutTextTwo");
  const संगठनकीगतिविधियोंकाविश्लेषण = t("संगठनकीगतिविधियोंकाविश्लेषण");
  const गैरसरकारीसंगठन = t("गैरसरकारीसंगठन");
  const सामाजिकविकासकार्यक्रम = t("सामाजिकविकासकार्यक्रम");
  const ग़रीबीसेप्रभावित = t("ग़रीबीसेप्रभावित");
  const शिक्षाऔरस्वास्थ्य = t("शिक्षाऔरस्वास्थ्य");
  const शिक्षावास्थ्यसंबंधित = t("शिक्षावास्थ्यसंबंधित");
  const पर्यावरणसंरक्षण = t("पर्यावरणसंरक्षण");
  const पर्यावरणकीसुरक्षा = t("पर्यावरणकीसुरक्षा");
  const आध्यात्मिकऔरभावात्मक = t("आध्यात्मिकऔरभावात्मक");
  const आध्यात्मिकभावात्मकजागरूकता = t("आध्यात्मिकभावात्मकजागरूकता");
  const वंचितसमुदायोंसमर्थन = t("वंचितसमुदायोंसमर्थन");
  const वंचितवर्गविशेष = t("वंचितवर्गविशेष");
  const सामाजिकमुद्दोंमुकाबला = t("सामाजिकमुद्दोंमुकाबला");
  const नशाबालशोषण = t("नशाबालशोषण");
  const सहयोगऔरसमर्थन = t("सहयोगऔरसमर्थन");
  const अन्यसहायकसंस्थाओं = t("अन्यसहायकसंस्थाओं");
  const विशेषज्ञोंकीभागीदार = t("विशेषज्ञोंकीभागीदार");
  const विभिन्नविशेषज्ञोंआमंत्रित = t("विभिन्नविशेषज्ञोंआमंत्रित");
  const शिक्षाचरित्रनिर्माण = t("शिक्षाचरित्रनिर्माण");
  const शिक्षाचरित्रनिर्माणप्राथमिकउद्देश्यों = t(
    "शिक्षाचरित्रनिर्माणप्राथमिकउद्देश्यों"
  );
  const परामर्शसेवाएँ = t("परामर्शसेवाएँ");
  const इनगतिविधियोंसमर्थन = t("इनगतिविधियोंसमर्थन");

  return (
    <div className="sm:mt-28 mt-24">
      <div className="max-w-[1280px] mx-auto">
        <p className="text-4xl text-center text-[#47445f] font-inter font-medium">
          About Us
        </p>
        <hr className="my-1 mx-auto md:w-[10%] w-[26%] border border-orange-500" />
        <hr className="my-1 mx-auto md:w-[7%] w-[18%] border border-orange-500" />
        <div className="py-4 sm:text-[20px] text-[16px]  px-2 text-center sm:text-left">
          <p className={`${getFontClass(aboutTextOne)}`}>{aboutTextOne}</p>
          <p className={`my-4 ${getFontClass(aboutTextTwo)}`}>{aboutTextTwo}</p>
          <div className="bg-[#f6f5ff] p-2">
            <div className="text-center my-4">
              <p
                className={`inline-block border-2 border-[orange] sm:text-[24px] text-[20px] font-bold p-2 ${getFontClass(
                  संगठनकीगतिविधियोंकाविश्लेषण
                )}`}
              >
                {संगठनकीगतिविधियोंकाविश्लेषण}
              </p>
            </div>
            <p className={`${getFontClass(गैरसरकारीसंगठन)}`}>
              {गैरसरकारीसंगठन}
            </p>
            <p className="flex items-center my-4">
              <MdStarPurple500
                className="mr-2 text-[#e30323] sm:block hidden"
                size={22}
              />
              <div className="items-center">
                <span
                  className={`font-semibold ${getFontClass(
                    सामाजिकविकासकार्यक्रम
                  )} spacing-right`}
                >
                  {सामाजिकविकासकार्यक्रम}
                </span>{" "}
                :
                <span
                  className={`${getFontClass(ग़रीबीसेप्रभावित)} spacing-left`}
                >
                  {ग़रीबीसेप्रभावित}
                </span>
              </div>
            </p>
            <p className="flex items-center my-4">
              <MdStarPurple500
                className="mr-2 text-[#e30323] sm:block hidden"
                size={22}
              />
              <div className="items-center">
                <span
                  className={`font-semibold ${getFontClass(
                    शिक्षाऔरस्वास्थ्य
                  )} spacing-right`}
                >
                  {शिक्षाऔरस्वास्थ्य}
                </span>{" "}
                :
                <span
                  className={`${getFontClass(
                    शिक्षावास्थ्यसंबंधित
                  )} spacing-left`}
                >
                  {शिक्षावास्थ्यसंबंधित}
                </span>
              </div>
            </p>
            <p className="flex items-center my-4">
              <MdStarPurple500
                className="mr-2 text-[#e30323] sm:block hidden"
                size={22}
              />
              <div className="items-center">
                <span
                  className={`font-semibold ${getFontClass(
                    पर्यावरणसंरक्षण
                  )} spacing-right`}
                >
                  {पर्यावरणसंरक्षण}
                </span>{" "}
                :
                <span
                  className={`${getFontClass(पर्यावरणकीसुरक्षा)} spacing-left`}
                >
                  {पर्यावरणकीसुरक्षा}
                </span>
              </div>
            </p>
            <p className="flex items-center my-4">
              <MdStarPurple500
                className="mr-2 text-[#e30323] sm:block hidden"
                size={22}
              />
              <div className="items-center">
                <span
                  className={`font-semibold ${getFontClass(
                    आध्यात्मिकऔरभावात्मक
                  )} spacing-right`}
                >
                  {आध्यात्मिकऔरभावात्मक}
                </span>{" "}
                :
                <span
                  className={`${getFontClass(
                    आध्यात्मिकभावात्मकजागरूकता
                  )} spacing-left`}
                >
                  {आध्यात्मिकभावात्मकजागरूकता}
                </span>
              </div>
            </p>
            <p className="flex items-center my-4">
              <MdStarPurple500
                className="mr-2 text-[#e30323] sm:block hidden"
                size={22}
              />
              <div className="items-center">
                <span
                  className={`font-semibold ${getFontClass(
                    वंचितसमुदायोंसमर्थन
                  )} spacing-right`}
                >
                  {वंचितसमुदायोंसमर्थन}
                </span>{" "}
                :
                <span
                  className={`${getFontClass(वंचितवर्गविशेष)} spacing-left`}
                >
                  {वंचितवर्गविशेष}
                </span>
              </div>
            </p>
            <p className="flex items-center my-4">
              <MdStarPurple500
                className="mr-2 text-[#e30323] sm:block hidden"
                size={22}
              />
              <div className="items-center">
                <span
                  className={`font-semibold ${getFontClass(
                    सामाजिकमुद्दोंमुकाबला
                  )} spacing-right`}
                >
                  {सामाजिकमुद्दोंमुकाबला}
                </span>{" "}
                :
                <span className={`${getFontClass(नशाबालशोषण)} spacing-left`}>
                  {नशाबालशोषण}
                </span>
              </div>
            </p>
            <p className="flex flex-nowrap items-center my-4">
              <MdStarPurple500
                className="mr-2 text-[#e30323] sm:block hidden"
                size={22}
              />
              <div className="items-center">
                <span
                  className={`font-semibold ${getFontClass(
                    सहयोगऔरसमर्थन
                  )} spacing-right`}
                >
                  {सहयोगऔरसमर्थन}
                </span>{" "}
                :
                <span
                  className={`${getFontClass(अन्यसहायकसंस्थाओं)} spacing-left`}
                >
                  {अन्यसहायकसंस्थाओं}
                </span>
              </div>
            </p>
            <p className="flex items-center my-4">
              <MdStarPurple500
                className="mr-2 text-[#e30323] sm:block hidden"
                size={22}
              />
              <div className="items-center">
                <span
                  className={`font-semibold ${getFontClass(
                    विशेषज्ञोंकीभागीदार
                  )} spacing-right`}
                >
                  {विशेषज्ञोंकीभागीदार}
                </span>{" "}
                :
                <span
                  className={`${getFontClass(
                    विभिन्नविशेषज्ञोंआमंत्रित
                  )} spacing-left`}
                >
                  {विभिन्नविशेषज्ञोंआमंत्रित}
                </span>
              </div>
            </p>
            <p className="flex items-center my-4">
              <MdStarPurple500
                className="mr-2 text-[#e30323] sm:block hidden"
                size={22}
              />
              <div className="items-center">
                <span
                  className={`font-semibold ${getFontClass(
                    शिक्षाचरित्रनिर्माण
                  )} spacing-right`}
                >
                  {शिक्षाचरित्रनिर्माण}
                </span>{" "}
                :
                <span
                  className={`${getFontClass(
                    शिक्षाचरित्रनिर्माणप्राथमिकउद्देश्यों
                  )} spacing-left`}
                >
                  {शिक्षाचरित्रनिर्माणप्राथमिकउद्देश्यों}
                </span>
              </div>
            </p>
            <p className="flex items-center my-4">
              <MdStarPurple500
                className="mr-2 text-[#e30323] sm:block hidden"
                size={22}
              />
              <div className="items-center">
                <span
                  className={`font-semibold ${getFontClass(
                    परामर्शसेवाएँ
                  )} spacing-right`}
                >
                  {परामर्शसेवाएँ}
                </span>{" "}
                :
                <span
                  className={`${getFontClass(इनगतिविधियोंसमर्थन)} spacing-left`}
                >
                  {इनगतिविधियोंसमर्थन}
                </span>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
