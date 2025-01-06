import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/pagination";

const slidesData = [
  {
    id: 1,
    image:
      "https://clevercloset.co.uk/wp-content/uploads/2023/06/shutterstock_1562568346.jpg",
      header: "High-Quality Football Gear",
      sort: "Get the best football gear for professionals and beginners alike.",
  },
  {
    id: 2,
    image:
      "https://www.tencom.com/hubfs/sports-1.jpeg",
      header: "Premium Tennis Equipment",
    sort: "Everything you need for a perfect match.",
  },
  {
    id: 3,
    image:
      "https://clevercloset.co.uk/wp-content/uploads/2023/06/shutterstock_1562568346.jpg",
    header: "Outdoor Adventure Gear",
    sort: "Trekking poles, backpacks, and durable apparel for every adventurer.",
  },
];

const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }} 
      autoplay={{ delay: 3000, disableOnInteraction: false }} 
      className="w-full"
    >
      {slidesData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="hero h-[280px] md:h-[500px] md:mb-8 mb-4 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.image})`
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-white">
                  {slide.header}
                </h1>
                <p className="mb-5 text-white">
                 {slide.sort}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
