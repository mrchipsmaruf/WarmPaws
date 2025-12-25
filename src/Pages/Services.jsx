import React, { use, useLayoutEffect, useRef } from "react";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Fetch JSON
let servicesPromise = fetch("/petServices.json").then((res) => res.json());

const Services = () => {
  const services = use(servicesPromise);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      gsap.from(".service-heading", {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: "power3.out",
      });

      // Cards
      gsap.from(".service-card", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="py-10 md:px-15 pb-20 bg-orange-50 w-11/12 mx-auto">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center pt-8 pb-10 service-heading">
        Popular Winter Care{" "}
        <span className="text-orange-600">Services</span>
      </h2>

      {/* Cards Section */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service) => (
          <motion.div
            key={service.serviceId}
            className="service-card bg-white rounded-2xl shadow-lg p-5 flex flex-col border border-gray-200 will-change-transform"
            whileHover={{
              scale: 1.04,
              boxShadow: "0px 10px 20px rgba(255,120,50,0.4)",
            }}
            transition={{ duration: 0.25 }}
          >
            {/* Image */}
            <motion.img
              src={service.image}
              alt={service.serviceName}
              loading="lazy"
              className="h-48 w-full object-cover rounded-xl mb-4"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
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
