import React, { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../assets/petLogo.png";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
    const sectionRef = useRef(null);
    const particlesRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            // FLOATING LOGO
            gsap.to(".about-logo", {
                y: -10,
                duration: 3,
                ease: "easeInOut",
                repeat: -1,
                yoyo: true,
            });

            // STAGGER TITLES + TEXT
            tl.from(".about-main > *", {
                opacity: 0,
                y: 40,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
            });

            // LIGHT BACKGROUND ZOOM ANIMATION
            gsap.from(".about-bg", {
                scale: 1.1,
                opacity: 0,
                duration: 1.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                },
            });

            // Snow-like floating particles
            particlesRef.current.forEach((el) => {
                gsap.to(el, {
                    y: "random(20, 120)",
                    x: "random(-30, 30)",
                    opacity: "random(0.4, 1)",
                    duration: "random(3, 6)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={sectionRef}
            className="relative w-11/12 mx-auto px-10 pb-20 rounded-2xl overflow-hidden bg-gradient-to-b from-orange-50 to-orange-200"
        >
            {/* BG Animation Layer */}
            <div className="about-bg absolute inset-0 w-full h-full opacity-20 bg-[url('https://i.ibb.co.com/8RTP4r6/3d-render-winter-snowy-landscape.jpg')] bg-cover"></div>

            {/* FLOATING PARTICLES */}
            {[...Array(12)].map((_, i) => (
                <div
                    key={i}
                    ref={(el) => (particlesRef.current[i] = el)}
                    className="absolute w-2 h-2 bg-white rounded-full opacity-50"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                ></div>
            ))}

            {/* Content */}
            <div className="relative z-10 about-main">

                {/* Logo */}
                <motion.img
                    className="w-[150px] mx-auto pt-10 about-logo drop-shadow-xl"
                    src={logo}
                    alt=""
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                />

                {/* Titles */}
                <h2 className="text-3xl font-bold text-center pb-3">
                    About <span className="text-orange-600">Us</span>
                </h2>

                <h2 className="text-4xl font-semibold text-center pb-5">
                    Welcome to Warm<span className="text-orange-600">Paws</span>
                </h2>

                {/* Paragraph */}
                <p className="pb-10 text-orange-600 leading-relaxed text-lg">
                    <span className="text-2xl font-bold text-black">Warm</span>
                    <span className="text-orange-600 text-2xl font-bold">Paws</span> – Your
                    Pet’s Cozy Winter Companion. <br /><br />

                    WarmPaws is a dedicated online platform designed to help pet owners care
                    for their furry friends during the colder months. Our mission is to ensure
                    that pets stay warm, healthy, and happy. <br /><br />

                    <span className="font-semibold text-black">On WarmPaws, users can:</span>
                    <br /><br />

                    • Discover Winter Pet Care Tips<br />
                    • Explore Local Groomers & Vets<br />
                    • Shop Winter Clothing & Paw Protection<br />
                    • Get Expert Pet Care Guidance<br /><br />

                    From playful puppies to senior cats — WarmPaws ensures every pet enjoys a
                    cozy, safe winter.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
