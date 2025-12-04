import React, { use, useEffect, useRef } from "react";
import { NavLink } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Fetch JSON
let servicesPromise = fetch("/petServices.json").then((res) => res.json());

const Services = () => {
  let services = use(servicesPromise);
  const containerRef = useRef(null);

  // GSAP Animations
  useEffect(() => {
    // FIX ESLINT by using gsap inside context
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".service-card");

      // Heading animation
      gsap.from(".service-heading", {
        opacity: 0,
        y: -40,
        duration: 1.2,
        ease: "power3.out",
      });

      // Cards animation
      cards.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 1,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert(); // cleanup GSAP on unmount
  }, []);

  return (
    <div className="py-10 md:px-15 pb-20 bg-orange-50 w-11/12 mx-auto">
      {/* Heading */}
      <motion.h2
        className="text-3xl font-bold text-center pt-8 pb-10 service-heading"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Popular Winter Care{" "}
        <span className="text-orange-600">Services</span>
      </motion.h2>

      {/* Cards Section */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.serviceId}
            className="service-card bg-white rounded-2xl shadow-lg p-5 flex flex-col border border-gray-200"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 25px rgba(255,120,50,0.45)",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            {/* Image */}
            <motion.img
              src={service.image}
              alt={service.serviceName}
              className="h-48 w-full object-cover rounded-xl mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />

            <h3 className="text-xl font-semibold mb-2 text-orange-600">
              {service.serviceName}
            </h3>

            <p className="text-gray-600 text-sm mb-1">
              <strong>Provider:</strong> {service.providerName}
            </p>
            <p className="text-gray-600 text-sm mb-1">
              <strong>Email:</strong> {service.providerEmail}
            </p>
            <p className="text-gray-600 text-sm mb-1">
              <strong>Category:</strong> {service.category}
            </p>

            <p className="text-gray-800 font-semibold text-2xl mb-1">
              ${service.price}
            </p>

            <p className="text-yellow-500 mb-1">
              Rating: {service.rating} ⭐
            </p>

            <p className="text-gray-600 mb-3">
              Slots Available: {service.slotsAvailable}
            </p>

            <p className="text-gray-700 flex-1">{service.description}</p>

            <NavLink
              to={`/services/${service.serviceId}`}
              className="mt-4 bg-orange-400 hover:bg-orange-500 w-full text-center text-white py-2 px-4 rounded-lg"
            >
              View Details
            </NavLink>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
