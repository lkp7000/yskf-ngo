import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Component/Layout/Style.css";

const ContriButers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const contributors = [
    {
      id: 1,
      name: "Ms. Priyadarshini Nigam",
      image: "https://www.akshayapatra.org/includefiles/testimonial/2.png",
      description:
        "The Akshaya Patra Foundation’s implementation of the Mid-Day Meal Programme is a great initiative to address two Sustainable Development Goals – Zero Hunger and Quality Education with nutritious and quality food. The level of commitment that Akshaya Patra has showcased under this initiative has not only made an outstanding impact on the be",
      position: " Head - Galway Foundation ",
    },
    {
      id: 2,
      name: "Bhuvan Atluri",
      image: "https://www.akshayapatra.org/includefiles/testimonial/11.png",
      description:
        "While we at NCML had heard about Akshaya Patra via various films, news articles, and images about the fabulous work it does tirelessly every day, visiting the schools and kitchens was really an eye-opener and a highly recommended experience for everyone. The impact of a well-balanced nutritious meal goes a long way, and kudos to the team at Ak",
      position: "CEO, NCML MktYard Private Limited",
    },
    {
      id: 3,
      name: "Mr.Urmelesh Swami",
      image: "https://www.akshayapatra.org/includefiles/testimonial/3.png",
      description:
        "Hunger is not a natural disaster but man-made one to a large extent. Hence, I feel, it is our duty to make India hunger-free. It was pleasant to know about the implementation of the Mid-Day Meal Programme by The Akshaya Patra Foundation. The modus operandi and functioning of this programme deeply touched my heart as I, at Galway Foundation",
      position: "Head,CSR Newgen Software Technologies Ltd",
    },
    // Add more contributors as needed
  ];

  return (
    <div className="bg-[#2F6E9C] overflow-x-hidden sm:pb-0 pb-4">
      <div className="max-w-[800px] mx-auto sm:py-10 py-5 text-white">
        <Slider {...settings}>
          {contributors.map((contributor) => (
            <div key={contributor.id} className="px-8">
              <p className="flex justify-center items-center text-center font-inter sm:text-4xl text-2xl sm:my-6 my-0 font-[400]">
                Hear from our Biggest Contributers
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-10 gap-5">
                <img
                  src={contributor.image}
                  alt={contributor.name}
                  className="w-[200px] h-[200px] rounded-full object-cover sm:mt-0 mt-4"
                />
                <div className="flex flex-col text-[16px] font-inter items-center sm:items-start ">
                  <p className="text-center sm:text-left">
                    {contributor.description}
                  </p>
                  <div className="text-center sm:text-left font-inter py-1">
                  <h6 className="text-[26px] font-[400]  text-[#4FB846]">
                    {contributor.name}
                  </h6>
                  <p className="py-1">
                    {contributor.position}
                  </p>
                  </div>
                  {/* <p className="text-center sm:text-left">{contributor.description}</p> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const NextArrow = (props:any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-arrow-next`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props:any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-arrow-prev`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

export default ContriButers;
