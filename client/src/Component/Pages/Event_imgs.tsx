const imageUrls = [
  {
    image: "images/events_img/kavyanjali/img6.jpeg",
    title: "Event Title 1",
    date: "2023-04-04",
    category: "Kavyanjali Program",
  },
  {
    image: "images/events_img/kavyanjali/img7.jpeg",
    title: "Event Title 2",
    date: "2023-04-04",
    category: "Kavyanjali Program",
  },
  {
    image: "images/events_img/kavyanjali/img3.jpeg",
    title: "Event Title 2",
    date: "2023-04-04",
    category: "Kavyanjali Program",
  },
  {
    image: "images/events_img/kavyanjali/img4.jpeg",
    title: "Event Title 2",
    date: "2023-04-04",
    category: "Kavyanjali Program",
  },
  {
    image: "images/events_img/kavyanjali/img5.jpeg",
    title: "Event Title 2",
    date: "2023-04-04",
    category: "Kavyanjali Program",
  },
  {
    image: "images/events_img/kavyanjali/img1.jpeg",
    title: "Event Title 2",
    date: "2023-04-05",
    category: "Kavyanjali Program",
  },
  {
    image: "images/events_img/kavyanjali/img2.jpeg",
    title: "Event Title 2",
    date: "2023-04-06",
    category: "Kavyanjali Program",
  },
  {
    image: "images/events_img/women_day/img1.jpeg",
    title: "Event Title 2",
    date: "2024-03-08",
    category: "Women's Day Program",
  },
  {
    image: "images/events_img/women_day/img2.jpeg",
    title: "Event Title 2",
    date: "2024-03-08",
    category: "Women's Day Program",
  },
  {
    image: "images/events_img/women_day/img3.jpeg",
    title: "Event Title 2",
    date: "2024-03-08",
    category: "Women's Day Program",
  },
  {
    image: "images/events_img/women_day/img4.jpeg",
    title: "Event Title 2",
    date: "2024-03-08",
    category: "Women's Day Program",
  },
  {
    image: "images/events_img/women_day/img5.jpeg",
    title: "Event Title 2",
    date: "2024-03-08",
    category: "Women's Day Program",
  },
  {
    image: "images/events_img/women_day/img6.jpeg",
    title: "Event Title 2",
    date: "2024-03-08",
    category: "Women's Day Program",
  },
  {
    image: "images/events_img/bhajan/img1.jpeg",
    title: "Event Title 2",
    date: "2024-05-08",
    category: "Bhajan Sandhya & Scholarship Distribution",
  },
  {
    image: "images/events_img/bhajan/img2.jpeg",
    title: "Event Title 2",
    date: "2024-05-08",
    category: "Bhajan Sandhya & Scholarship Distribution",
  },
  {
    image: "images/events_img/bhajan/img3.jpeg",
    title: "Event Title 2",
    date: "2024-05-08",
    category: "Bhajan Sandhya & Scholarship Distribution",
  },
  {
    image: "images/events_img/bhajan/img4.jpeg",
    title: "Event Title 2",
    date: "2024-05-08",
    category: "Bhajan Sandhya & Scholarship Distribution",
  },
  {
    image: "images/events_img/nariSansad/img1.jpeg",
    title: "Event Title 2",
    date: "2022-10-08",
    category: "NARI SANSAD Program - Rishikesh",
  },
  {
    image: "images/events_img/nariSansad/img2.jpeg",
    title: "Event Title 2",
    date: "2022-10-08",
    category: "NARI SANSAD Program - Rishikesh",
  },
  {
    image: "images/events_img/nariSansad/img3.jpeg",
    title: "Event Title 2",
    date: "2022-10-08",
    category: "NARI SANSAD Program - Rishikesh",
  },
  {
    image: "images/events_img/nariSansad/img4.jpeg",
    title: "Event Title 2",
    date: "2022-10-08",
    category: "NARI SANSAD Program - Rishikesh",
  },
  {
    image: "images/events_img/bauddhikVikas/img1.jpeg",
    title: "Event Title 2",
    date: "2022-03-23",
    category: "Bauddhik Vikas and Karya Kushalta Parikshan Shivir",
  },
  {
    image: "images/events_img/bauddhikVikas/img2.jpeg",
    title: "Event Title 2",
    date: "2022-03-23",
    category: "Bauddhik Vikas and Karya Kushalta Parikshan Shivir",
  },
  {
    image: "images/events_img/bauddhikVikas/img3.jpeg",
    title: "Event Title 2",
    date: "2022-03-23",
    category: "Bauddhik Vikas and Karya Kushalta Parikshan Shivir",
  },
  {
    image: "images/events_img/hindiRakshak/img1.jpeg",
    title: "Event Title 2",
    date: "2024-01-29",
    category: "Hindi Rakshak International Prize",
  },
  {
    image: "images/events_img/hindiRakshak/img2.jpeg",
    title: "Event Title 2",
    date: "2024-01-29",
    category: "Hindi Rakshak International Prize",
  },
  {
    image: "images/events_img/hindiRakshak/img3.jpeg",
    title: "Event Title 2",
    date: "2024-01-29",
    category: "Hindi Rakshak International Prize",
  },
  {
    image: "images/events_img/hindiRakshak/img4.jpeg",
    title: "Event Title 2",
    date: "2024-01-29",
    category: "Hindi Rakshak International Prize",
  },
];

const Event_imgs = () => {
  // Get unique categories from imageUrls
  const categories = [...new Set(imageUrls.map((item) => item.category))];

  return (
    <div className="mt-24">
      {/* <h1 className='text-center my-4 text-5xl text-[#47445f]'>Photo Gallery</h1>
      <hr className="my-1 mx-auto md:w-[10%] w-[26%] border border-orange-500" />
      <hr className="my-1 mx-auto md:w-[7%] w-[18%] border border-orange-500 " /> */}

      {categories.map((category) => (
        <div key={category}>
          <h2 className="text-center my-4 text-4xl text-[#47445f]">
            {category}
          </h2>
          <hr className="my-1 mx-auto md:w-[10%] w-[26%] border border-orange-500" />
          <hr className="my-1 mx-auto md:w-[7%] w-[18%] border border-orange-500 " />
          <div className="flex flex-wrap justify-center gap-3">
            {imageUrls
              .filter((data) => data.category === category)
              .map((data, index) => (
                <div
                  key={index}
                  className="relative w-64 mx-2 my-4 rounded overflow-hidden shadow-lg transform transition-transform hover:scale-125 hover:z-10"
                >
                  <img
                    className="w-full h-40 object-cover"
                    src={data.image}
                    alt={`Event image ${index + 1}`}
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{data.title}</div>
                    <p className="text-gray-700 text-base">{data.date}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Event_imgs;
