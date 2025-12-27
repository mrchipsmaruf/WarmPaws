import React, { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import toast from "react-hot-toast";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftCardRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftCardRef.current,
            start: "top 80%",
          },
          onComplete: () => {
            gsap.to(leftCardRef.current, {
              y: -10,
              repeat: -1,
              yoyo: true,
              duration: 2.2,
              ease: "sine.inOut",
            });
          },
        }
      );

      gsap.fromTo(
        rightCardRef.current,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightCardRef.current,
            start: "top 80%",
          },
          onComplete: () => {
            gsap.to(rightCardRef.current, {
              y: -10,
              repeat: -1,
              yoyo: true,
              duration: 2.4,
              ease: "sine.inOut",
            });
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // ✅ TOAST HANDLER
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully! 🐾", {
      duration: 3000,
    });
    e.target.reset();
  };

  return (
    <div className="bg-orange-50 w-11/12 mx-auto py-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Contact <span className="text-orange-600">Us</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Card */}
          <div
            ref={leftCardRef}
            className="bg-white p-8 rounded-2xl shadow-lg border border-orange-200 will-change-transform"
          >
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-orange-600 mb-4"
            >
              Get in Touch
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-6"
            >
              We'd love to hear from you! Whether you have questions, feedback,
              or want to adopt or support — feel free to reach out.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4 text-gray-700"
            >
              <p><strong>📍 Address:</strong> Narayanganj, Dhaka, Bangladesh</p>
              <p><strong>📞 Phone:</strong> +880 1813-912607</p>
              <p><strong>📧 Email:</strong> support@warmpaws.com</p>
            </motion.div>
          </div>

          {/* Right Card */}
          <form
            ref={rightCardRef}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg border border-orange-200 will-change-transform"
          >
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-orange-600 mb-4"
            >
              Send a Message
            </motion.h3>

            <div className="space-y-4">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />

              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                placeholder="Your Message"
                className="w-full p-3 border rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 duration-300"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
