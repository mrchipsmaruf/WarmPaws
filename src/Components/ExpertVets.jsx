import React from 'react';
import { motion as Motion } from 'framer-motion';
import drjoseph from "../assets/drjoseph.jpg";
import emly from "../assets/drsarah.jpg";
import micale from "../assets/drmicale.jpg";

const vets = [
  {
    id: 1,
    src: drjoseph,
    name: "Dr. Joseph Thompson",
    title: "Canine Specialist",
    lines: [
      "Over 10 years of experience in dog health and nutrition.",
      "Expert in winter coat care and paw protection."
    ],
    alt: "Portrait of Dr. Joseph Thompson"
  },
  {
    id: 2,
    src: micale,
    name: "Dr. Michael Lee",
    title: "Feline & Small Pets Expert",
    lines: [
      "Specializes in grooming, diet, and winter care for cats and small pets.",
      "Focuses on stress-free veterinary care and comfort during colder months."
    ],
    alt: "Portrait of Dr. Michael Lee"
  },
  {
    id: 3,
    src: emly,
    name: "Dr. Emily Carter",
    title: "Veterinary Nutritionist",
    lines: [
      "Guides pet owners on winter diets, supplements, and hydration.",
      "Experienced in creating tailored nutrition plans for pets of all sizes."
    ],
    alt: "Portrait of Dr. Emily Carter"
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: 'easeOut' } 
  }
};

const imageHover = { scale: 1.06, y: -6, transition: { duration: 0.25 } };

const VetCard = ({ vet }) => (
  <Motion.article
    className="flex flex-col items-center text-center p-4"
    variants={cardVariant}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.99 }}
    role="group"
    aria-label={`${vet.name} — ${vet.title}`}
  >
    <Motion.figure className="w-full max-w-[350px]" initial={false}>
      <Motion.img
        src={vet.src}
        alt={vet.alt}
        loading="lazy"
        decoding="async"
        className="w-full h-64 object-cover rounded-2xl shadow-md"
        whileHover={imageHover}
      />
      <figcaption className="sr-only">{vet.name} — {vet.title}</figcaption>
    </Motion.figure>

    <h3 className="text-2xl font-semibold text-orange-600 mt-4">
      {vet.name}
      <span className="block text-base text-gray-600">{vet.title}</span>
    </h3>

    <div className="mt-3 text-gray-500 space-y-2 w-full max-w-[350px]">
      {vet.lines.map((line, i) => (
        <p key={i} className={`${i === 0 ? "border-b border-dashed border-orange-200 pb-3" : ""}`}>
          {line}
        </p>
      ))}
    </div>
  </Motion.article>
);

const ExpertVets = () => {
  return (
    <Motion.section
      className="bg-orange-50 w-11/12 mx-auto px-3 py-8 rounded-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      aria-label="Meet our expert veterinarians"
    >
      <Motion.h2
        className="text-3xl font-bold text-center pt-6 pb-6"
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Meet Our <span className="text-orange-600">Expert Vets</span>
      </Motion.h2>

      <Motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-6"
        variants={containerVariants}
      >
        {vets.map(vet => <VetCard key={vet.id} vet={vet} />)}
      </Motion.div>
    </Motion.section>
  );
};

export default ExpertVets;