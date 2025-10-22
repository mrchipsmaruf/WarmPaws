import React from 'react';
import petsBanner1 from "../assets/petsBanner1.jpg"
import petsBanner2 from "../assets/petsBanner2.jpeg";
import petsBanner3 from "../assets/petsBanner3.jpeg";
import petsBanner4 from "../assets/petsBanner4.jpeg";
import { NavLink } from 'react-router';

const slides = [petsBanner1, petsBanner2, petsBanner3, petsBanner4];

const PetsSliderBanner = () => {
    return (
        <div className="carousel w-full">
            {slides.map((slide, i) => {
                const prev = (i - 1 + slides.length) % slides.length;
                const next = (i + 1) % slides.length;

                return (
                    <div
                        key={i}
                        id={`slide${i + 1}`}
                        className="carousel-item relative w-full"
                    >
                        <img
                            src={slide}
                            className="w-full h-[80vh] object-cover rounded-lg"
                            alt={`Pet Banner ${i + 1}`}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col items-center justify-center text-center text-white px-5">
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                                Keep Your Pet Cozy This Winter
                            </h1>
                            <p className="max-w-2xl text-lg md:text-xl mb-6">
                                Explore winter grooming, warm outfits, and care services designed for your furry friends.
                            </p>

                            <NavLink to="/services">
                                <button className="btn bg-orange-500 border-none text-white hover:bg-orange-700 px-6 text-lg font-semibold">
                                    Explore Services
                                </button>
                            </NavLink>
                        </div>

                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href={`#slide${prev + 1}`} className="btn btn-circle">❮</a>
                            <a href={`#slide${next + 1}`} className="btn btn-circle">❯</a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PetsSliderBanner;
