import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { NavLink } from "react-router";

import petsBanner1 from "../assets/petsBanner1.jpg";
import petsBanner2 from "../assets/petsBanner2.jpeg";
import petsBanner3 from "../assets/petsBanner3.jpeg";
import petsBanner4 from "../assets/petsBanner4.jpeg";

const slides = [petsBanner1, petsBanner2, petsBanner3, petsBanner4];

const PetsSliderBanner = () => {
  return (
    <div className="w-11/12 mx-auto my-8 rounded-2xl overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-2xl"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[80vh]">
              <img
                src={slide}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent flex flex-col items-center justify-center text-center text-white px-5">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                  Keep Your Pet Cozy This Winter
                </h1>
                <p className="max-w-2xl text-lg md:text-xl mb-6">
                  Explore winter grooming, warm outfits, and care services
                  designed for your furry friends.
                </p>

                <NavLink to="/services">
                  <button className="btn bg-orange-500 border-none text-white hover:bg-orange-700 px-6 text-lg font-semibold">
                    Explore Services
                  </button>
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PetsSliderBanner;
