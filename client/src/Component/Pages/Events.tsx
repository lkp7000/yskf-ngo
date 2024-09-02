import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    category: "Medical",
    title: "Kavyanjali Program",
    description: "Providing essential medical services to those in need.",
    image: "images/events_img/e1.jpeg",
  },
  {
    category: "Education",
    title: "Women's Day",
    description: "Helping children get the education they deserve.",
    image: "images/events_img/e2.jpeg",
  },
  {
    category: "Food",
    title: "Hindi Rakshak International Prize",
    description: "Ensuring no one goes hungry by distributing food.",
    image: "images/events_img/e3.jpeg",
  },
  {
    category: "Food",
    title: "Bhajan Sandhya & Scholarship Distribution",
    description: "Ensuring no one goes hungry by distributing food.",
    image: "images/events_img/e4.jpeg",
  },
  {
    category: "Food",
    title: "NARI SANSAD Program - Rishikesh",
    description: "Ensuring no one goes hungry by distributing food.",
    image: "images/events_img/e5.jpeg",
  },
  {
    category: "Food",
    title: "Hindi Rakshak International Prize",
    description: "Hindi Rakshak International Prize",
    image: "images/events_img/e6.jpeg",
  },
];

const Events = () => {
  const navigate = useNavigate();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <DefaultNextArrow />,
    prevArrow: <DefaultPrevArrow />,
    responsive: [
      {
        // breakpoint: 1024, // large screen
        breakpoint:1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        // breakpoint: 768, // medium screen
        breakpoint:1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // small screen
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-1">
      <p className="text-4xl text-center text-[#47445f] font-inter font-medium">Our Events</p>
      <hr className="my-1 mx-auto md:w-[10%] w-[26%] border border-orange-500" />
      <hr className="my-1 mx-auto md:w-[7%] w-[18%] border  border-orange-500 " />
      <p className=" max-w-[500px] mx-auto px-2 text-[#63646d] my-3 text-center font-inter font-normal">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus quos
        repellendus quaerat in quae sit mollitia veritatis molestias qui quam.
      </p>
      <div className="flex justify-center mb-8 pt-4">
        <div className="slider-container max-w-[1240px] w-full px-8">
          <Slider {...settings}>
            {cardData.map((card, index) => (
              <div
                key={index}
                className="max-w-sm h-[400px] mx-auto rounded overflow-hidden shadow-lg"
              >
                <img
                  className="w-full h-[250px] object-cover"
                  src={card.image}
                  alt={card.title}
                />
                <div className="px-6 py-4">
                <div className="font-inter font-semibold text-center text-[#47445f] text-[18px] mb-2">{card.title}</div>
              <p className="font-inter text-[#63646d] font-normal text-center">{card.description}</p>
                </div>
              </div>
            ))}
          </Slider>
          <button
            onClick={() => navigate("/event_img")}
            className="group flex my-2 gap-2 items-center mx-auto bg-gradient-to-r from-pink-500 to-amber-500 text-white font-bold py-1 px-4 rounded-full sm:mb-0 glow transition-colors duration-300 hover:bg-white hover:bg-none"
          >
            <h4
              className="group-hover:text-transparent group-hover:bg-clip-text"
              style={{
                background: "linear-gradient(to right, #ec4899, #f59e0b)",
                WebkitBackgroundClip: "text",
              }}
            >
              View All
            </h4>
          </button>
        </div>
      </div>
    </div>
  );
};

const DefaultNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

const DefaultPrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

export default Events;
