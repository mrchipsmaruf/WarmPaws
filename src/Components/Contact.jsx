import React, { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

    const leftCardRef = useRef(null);
    const rightCardRef = useRef(null);

    useEffect(() => {
        // Left Card Scroll Animation
        gsap.from(leftCardRef.current, {
            opacity: 0,
            x: -100,
            duration: 1,
            scrollTrigger: {
                trigger: leftCardRef.current,
                start: "top 80%",
            },
        });

        // Right Card Scroll Animation
        gsap.from(rightCardRef.current, {
            opacity: 0,
            x: 100,
            duration: 1,
            scrollTrigger: {
                trigger: rightCardRef.current,
                start: "top 80%",
            },
        });

        // Floating Animation
        gsap.to(leftCardRef.current, {
            y: -10,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            duration: 2,
        });

        gsap.to(rightCardRef.current, {
            y: -10,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            duration: 2.2,
        });
    }, []);

    return (
        <div className="bg-orange-50 py-20 px-4 overflow-hidden">
            <div className="max-w-5xl mx-auto">

                {/* Title Animation */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-center mb-12"
                >
                    Contact <span className="text-orange-600">Us</span>
                </motion.h2>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Left Card */}
                    <motion.div
                        ref={leftCardRef}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-orange-200"
                    >
                        <motion.h3
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl font-semibold text-orange-600 mb-4"
                        >
                            Get in Touch
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-gray-600 mb-6"
                        >
                            We'd love to hear from you! Whether you have questions, feedback,
                            or want to adopt or support — feel free to reach out.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="space-y-4 text-gray-700"
                        >
                            <p><strong>📍 Address:</strong> Narayanganj, Dhaka, Bangladesh</p>
                            <p><strong>📞 Phone:</strong> +880 1813-912607</p>
                            <p><strong>📧 Email:</strong> support@warmpaws.com</p>
                        </motion.div>
                    </motion.div>

                    {/* Right Card - Form */}
                    <motion.form
                        ref={rightCardRef}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-orange-200"
                    >
                        <motion.h3
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl font-semibold text-orange-600 mb-4"
                        >
                            Send a Message
                        </motion.h3>

                        <div className="space-y-4">
                            <motion.input
                                whileFocus={{ scale: 1.03 }}
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                                required
                            />

                            <motion.input
                                whileFocus={{ scale: 1.03 }}
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                                required
                            />

                            <motion.textarea
                                whileFocus={{ scale: 1.03 }}
                                placeholder="Your Message"
                                className="w-full p-3 border rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                                required
                            ></motion.textarea>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 duration-300"
                            >
                                Send Message
                            </motion.button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
