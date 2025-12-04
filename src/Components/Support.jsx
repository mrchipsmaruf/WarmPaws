import React, { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Support = () => {
    const cardRefs = useRef([]);
    const faqRefs = useRef([]);

    useEffect(() => {
        // Card Scroll Animation
        cardRefs.current.forEach((card, index) => {
            gsap.from(card, {
                opacity: 0,
                y: 60,
                duration: 1,
                delay: index * 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                },
            });

            // Floating effect
            gsap.to(card, {
                y: -10,
                duration: 2 + index * 0.3,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });
        });

        // FAQ Animation
        faqRefs.current.forEach((faq, index) => {
            gsap.from(faq, {
                opacity: 0,
                x: index % 2 === 0 ? -120 : 120,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: faq,
                    start: "top 90%",
                },
            });
        });
    }, []);

    return (
        <div className="bg-orange-50 min-h-screen py-16 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-center mb-10"
                >
                    Support <span className="text-orange-600">Center</span>
                </motion.h2>

                {/* Intro */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
                >
                    We're here to help! Whether you're facing issues, want to report a problem,
                    or need guidance — our support team is ready to assist you.
                </motion.p>

                {/* Grid Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {[
                        {
                            title: "🆘 General Help",
                            text: "Get answers to common questions about adoption, rescuing, donations, and more.",
                            btn: "Learn More"
                        },
                        {
                            title: "🐾 Report an Issue",
                            text: "Found a bug, animal safety concern, or platform issue? Report it here.",
                            btn: "Report Now"
                        },
                        {
                            title: "💬 Live Support",
                            text: "Need quick help? Connect with our support team anytime.",
                            btn: "Chat Now"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            ref={(el) => (cardRefs.current[index] = el)}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-orange-200 text-center"
                        >
                            <h3 className="text-2xl font-semibold text-orange-600 mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 mb-5">{item.text}</p>
                            <button className="bg-orange-600 text-white px-6 py-2 rounded-xl hover:bg-orange-700 duration-300">
                                {item.btn}
                            </button>
                        </motion.div>
                    ))}

                </div>

                {/* FAQ Section */}
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-center text-orange-600 mb-8">
                        Frequently Asked Questions
                    </h3>

                    <div className="space-y-6 max-w-3xl mx-auto">
                        {[
                            {
                                q: "How can I adopt a pet?",
                                a: "Visit the adoption page, browse animals, and submit an adoption request."
                            },
                            {
                                q: "How can I donate to support rescue missions?",
                                a: "Use our donation page to contribute securely."
                            },
                            {
                                q: "What if I find an injured stray animal?",
                                a: "Immediately call your nearest vet or report through our support form."
                            }
                        ].map((faq, index) => (
                            <motion.details
                                key={index}
                                ref={(el) => (faqRefs.current[index] = el)}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white p-6 rounded-2xl shadow-lg border border-orange-200"
                            >
                                <summary className="text-lg font-semibold text-orange-700 cursor-pointer">
                                    {faq.q}
                                </summary>
                                <p className="text-gray-600 mt-3">{faq.a}</p>
                            </motion.details>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Support;
