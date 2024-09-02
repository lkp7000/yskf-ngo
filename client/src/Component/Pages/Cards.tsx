import { useState } from "react";

const Cards = () => {
  const [selectedCategory, setSelectedCategory] = useState("Education");

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
  };

  const cardsData = [
    {
      category: "Medical",
      title: "Medical Assistance",
      description: "Providing essential medical services to those in need.",
      image:
        "https://as1.ftcdn.net/v2/jpg/06/62/49/52/1000_F_662495265_RwodellG8NEN1m1RbSQZWQ6ZLMJRiLo4.jpg",
    },
    {
      category: "Medical",
      title: "Medical Assistance",
      description: "Providing essential medical services to those in need.",
      image:
        "https://t3.ftcdn.net/jpg/06/86/46/38/240_F_686463889_kMNRcam2QCnzZU40ZDs0zUfQwgyGkPin.jpg",
    },
    {
      category: "Education",
      title: "Educational Support",
      description: "Helping children get the education they deserve.",
      image: "https://in.childhelpfoundation.in/assets/img/slide/women.jpg",
    },
    {
      category: "Education",
      title: "Educational Support",
      description: "Helping children get the education they deserve.",
      image:
        "https://dkprodimages.gumlet.io/JanSewaSociety08112021_Body2.JPG?format=webp&w=768&dpr=1.0",
    },
    {
      category: "Food",
      title: "Food Distribution",
      description: "Ensuring no one goes hungry by distributing food.",
      image:
        "https://img.freepik.com/premium-photo/donations-food-with-canned-food-wooden-pasta-canned-goods-dry-food-non-perishable-with-pea-beans-cooking-oil-instant-noodles-macaroni-donate_73523-4017.jpg?w=740",
    },
    {
      category: "Food",
      title: "Food Distribution",
      description: "Ensuring no one goes hungry by distributing food.",
      image:
        "https://img.freepik.com/premium-photo/volunteers-putting-various-dry-food-donation-box-help-people_39768-12637.jpg?w=740",
    },
  ];

  // const filteredCards =
  //   selectedCategory === "All"
  //     ? cardsData
  //     : cardsData.filter((card) => card.category === selectedCategory);
  const filteredCards = cardsData.filter((card) => card.category === selectedCategory);

  return (
    // <div className="sm:my-2">
    <div className="max-w-[1280px] mx-auto">
      <p className="text-4xl text-center text-[#47445f] font-inter font-medium">
        Our Causes
      </p>
      {/* <hr className="my-1 mx-auto w-[10%] border-orange-500" /> */}
      <hr className="my-1 mx-auto md:w-[10%] w-[26%] border border-orange-500" />
      <hr className="my-1 mx-auto md:w-[7%] w-[18%] border  border-orange-500 " />
      <p className=" max-w-[500px] mx-auto px-2 text-[#63646d] my-3 text-center font-inter font-normal">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus quos
        repellendus quaerat in quae sit mollitia veritatis molestias qui quam.
      </p>
      <div className="flex font-inter font-semibold gap-8 border justify-center items-center px-4 py-2 rounded-full max-w-[400px] mx-auto text-[#47445F] bg-[#F6F5FF]">
        {/* <p
          onClick={() => handleCategoryClick("All")}
          // className={` group cursor-pointer ${selectedCategory === "All" ? "text-[#dd7575]" : ""} hover:text-[#dd7575]`}
          className={` group cursor-pointer ${
            selectedCategory === "All" ? "text-amber-500" : ""
          }`}
        >
          All
          <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full  transition-all duration-500"></div>
        </p> */}
         <p
          onClick={() => handleCategoryClick("Education")}
          className={`group cursor-pointer ${
            selectedCategory === "Education" ? "text-amber-500" : ""
          }`}
        >
          Education
          <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full  transition-all duration-500"></div>
        </p>
        <p
          onClick={() => handleCategoryClick("Medical")}
          className={`group cursor-pointer ${
            selectedCategory === "Medical" ? "text-amber-500" : ""
          }`}
        >
          Medical
          <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full  transition-all duration-500"></div>
        </p>
       
        <p
          onClick={() => handleCategoryClick("Food")}
          className={`group cursor-pointer ${
            selectedCategory === "Food" ? "text-amber-500" : ""
          }`}
        >
          Food
          <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full  transition-all duration-500"></div>
        </p>
      </div>
      <div className="flex flex-wrap gap-6 mx-auto justify-center my-4 px-2">
        {filteredCards.map((card, index) => (
          <div key={index} className="max-w-sm rounded shadow-lg">
            <div className="overflow-hidden">
            <img className="w-full h-48 hover:scale-125 duration-1000" src={card.image} alt={card.title} />
            </div>
            <div className="px-6 py-4">
              <div className="font-inter font-semibold text-center text-[#47445f] text-[18px] mb-2">{card.title}</div>
              <p className="font-inter text-[#63646d] font-normal text-center">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
