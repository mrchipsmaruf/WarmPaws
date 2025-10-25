import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router";

let ServicesDetails = () => {

    let [isBooked, setIsBooked] = useState(false);

    let data = useLoaderData();
    let { serviceId } = useParams();


    let service = data.find(item => item.serviceId == serviceId);
    if (!service) {
        return <p className="text-center text-3xl text-red-500 my-20 ">Service not found</p>;
    }


    return (
        <div className="max-w-3xl mx-auto bg-white p-6 py-10 border border-gray-300 rounded-xl shadow-md">
            <img
                src={service.image}
                alt={service.serviceName}
                className="w-full h-64 object-cover rounded-lg mb-5"
            />
            <h2 className="text-3xl font-bold mb-2 text-orange-600">{service.serviceName}</h2>
            <p className="text-gray-600 mb-1 "><span className="font-semibold">Provider: </span> {service.providerName}</p>
            <p className="text-gray-600 mb-1"><span className="font-semibold">Email: </span>{service.providerEmail}</p>
            <p className="text-gray-600 mb-1"><span className="font-semibold">Category: </span>{service.category}</p>
            <p className="text-orange-500 font-semibold mb-1"><span className="font-semibold">Price: $</span>{service.price}</p>
            <p className="text-yellow-500 mb-1">Rating: {service.rating} ⭐</p>
            <p className="text-gray-700 mb-4">{service.description}</p>

            <h3 className="text-xl font-semibold mb-3">Book This Service</h3>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    toast.success("Booking Successful!");
                    setIsBooked(true);
                    e.target.reset();
                }}
                className="flex flex-col gap-3 ">
                <input type="text" placeholder="Your Name" className="border p-2 rounded-md" required />
                <input type="email" placeholder="Your Email" className="border p-2 rounded-md" required />
                <button className={`bg-orange-400 btn text-white py-2 rounded-md hover:bg-orange-500 ${isBooked ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={isBooked}>
                {isBooked ? "Booked" : "Book Now"}
            </button>
        </form>
        </div >
    );
};

export default ServicesDetails;
