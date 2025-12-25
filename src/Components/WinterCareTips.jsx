import React, { useEffect, useRef } from "react";
import { motion as Motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import warmImage from "../assets/warm.jpg";
import pawHealth from "../assets/pawHealth.jpg";
import nutritionImage from "../assets/nutration.jpg";

gsap.registerPlugin(ScrollTrigger);

const tipsData = [
  {
    id: 1,
    title: "Winter Warmth & Comfort",
    image: warmImage,
    points: [
      "Dress your pets in cozy sweaters or jackets during cold walks.",
      "Provide insulated bedding away from drafts.",
      "Limit outdoor exposure during extreme cold.",
    ],
  },
  {
    id: 2,
    title: "Paw & Health Protection",
    image: pawHealth,
    points: [
      "Apply paw balm to prevent cracking from ice, snow, and salt.",
      "Avoid icy sidewalks and areas treated with salt.",
      "Watch for signs of hypothermia or frostbite; consult a vet if needed.",
    ],
  },
  {
    id: 3,
    title: "Nutrition & Safety",
    image: nutritionImage,
    points: [
      "Provide a balanced diet with extra calories if pets are active outdoors.",
      "Ensure pets have fresh water at all times.",
      "Use reflective jackets, collars, or LED lights for evening walks.",
    ],
  },
];

const TipCard = ({ tip, isLast, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        delay: index * 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
      });
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col md:flex-row items-center gap-5 ${
        !isLast ? "md:border-r-2 border-orange-300 md:pr-5" : ""
      }`}
    >
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold text-orange-600 pb-2">
          {tip.title}
        </h3>

        {tip.points.map((point, i) => (
          <Motion.p
            key={i}
            className={`text-gray-600 ${
              i < tip.points.length - 1
                ? "border-b border-dashed border-orange-200 pb-2"
                : ""
            }`}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {point}
          </Motion.p>
        ))}
      </div>

      <Motion.img
        src={tip.image}
        alt={tip.title}
        loading="lazy"
        className="w-[220px] h-[160px] object-cover rounded-3xl shadow-md flex-shrink-0"
        whileHover={{
          scale: 1.08,
          boxShadow: "0 18px 35px rgba(249,115,22,0.35)",
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

const WinterCareTips = () => {
  const headingRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: -25,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="pb-20 bg-gradient-to-r from-orange-100 via-orange-50 to-orange-100 px-3 w-11/12 mx-auto"
    >
      <h2
        ref={headingRef}
        className="text-3xl md:text-4xl font-bold text-center pt-10 pb-12"
      >
        Winter Care Tips for <span className="text-orange-600">Pets</span>
      </h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 pb-10 gap-12 md:gap-10">
          {tipsData.map((tip, i) => (
            <TipCard
              key={tip.id}
              tip={tip}
              isLast={i === tipsData.length - 1}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WinterCareTips;
