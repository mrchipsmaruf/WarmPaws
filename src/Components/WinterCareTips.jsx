import React, { useEffect, useRef } from 'react';
import { motion as Motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
      "Limit outdoor exposure during extreme cold."
    ]
  },
  {
    id: 2,
    title: "Paw & Health Protection",
    image: pawHealth,
    points: [
      "Apply paw balm to prevent cracking from ice, snow, and salt.",
      "Avoid icy sidewalks and areas treated with salt.",
      "Watch for signs of hypothermia or frostbite; consult a vet if needed."
    ]
  },
  {
    id: 3,
    title: "Nutrition & Safety",
    image: nutritionImage,
    points: [
      "Provide a balanced diet with extra calories if pets are active outdoors.",
      "Ensure pets have fresh water at all times.",
      "Use reflective jackets, collars, or LED lights for evening walks."
    ]
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const TipCard = ({ tip, isLast, index }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // GSAP card entrance with ScrollTrigger
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 60, rotateX: 90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        ease: 'back.out',
        delay: index * 0.15,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // GSAP hover animation for image
    if (imageRef.current) {
      imageRef.current.addEventListener('mouseenter', () => {
        gsap.to(imageRef.current, {
          scale: 1.12,
          rotateY: 10,
          boxShadow: '0 20px 40px rgba(249, 115, 22, 0.4)',
          duration: 0.4,
          ease: 'power2.out'
        });
      });

      imageRef.current.addEventListener('mouseleave', () => {
        gsap.to(imageRef.current, {
          scale: 1,
          rotateY: 0,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          duration: 0.4,
          ease: 'power2.out'
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col md:flex-row items-center gap-5 ${!isLast ? 'border-r-0 md:border-r-2 border-orange-300 md:pr-5' : ''}`}
      style={{ perspective: '1000px' }}
    >
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold text-orange-600 pb-2">
          {tip.title}
        </h3>

        {tip.points.map((point, i) => (
          <Motion.p
            key={i}
            className={`text-gray-600 ${i < tip.points.length - 1 ? 'border-b border-dashed border-orange-200 pb-2' : ''}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {point}
          </Motion.p>
        ))}
      </div>

      <img
        ref={imageRef}
        className="w-[220px] h-[160px] object-cover rounded-3xl shadow-md flex-shrink-0 cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        src={tip.image}
        alt={tip.title}
        loading="lazy"
      />
    </div>
  );
};

const WinterCareTips = () => {
  const headingRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!headingRef.current) return;

    // GSAP heading animation with character reveal effect
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -30, letterSpacing: '0.1em' },
      {
        opacity: 1,
        y: 0,
        letterSpacing: '0em',
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Background animation
    gsap.fromTo(
      containerRef.current,
      { backgroundPosition: '0% 50%' },
      {
        backgroundPosition: '100% 50%',
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="pb-20 bg-gradient-to-r from-orange-100 via-orange-50 to-orange-100 px-3 w-11/12 mx-auto"
      style={{ backgroundSize: '200% 200%' }}
    >
      <h2
        ref={headingRef}
        className="text-3xl md:text-4xl font-bold text-center pt-10 pb-12"
      >
        Winter Care Tips for <span className="text-orange-600">Pets</span>
      </h2>

      <div className="flex justify-center">
        <Motion.div
          className="grid grid-cols-1 md:grid-cols-3 pb-10 gap-12 md:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {tipsData.map((tip, i) => (
            <TipCard key={tip.id} tip={tip} isLast={i === tipsData.length - 1} index={i} />
          ))}
        </Motion.div>
      </div>
    </div>
  );
};

export default WinterCareTips;