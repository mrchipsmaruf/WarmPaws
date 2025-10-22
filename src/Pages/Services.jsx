import React, { Suspense, use } from 'react';

let servicesPromise = fetch("/petServices.json").then(res => res.json());

const Services = () => {
    let services = use(servicesPromise);

    return (
        <div className='py-10 px-5'>
            <h2 className='text-3xl font-bold text-center pt-15 pb-10'>Popular Winter Care Services</h2>
            <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {services.map(service => (
                        <div key={service.serviceId} className='bg-white rounded-2xl shadow-md p-5 flex flex-col border border-gray-200 hover:shadow-orange-500'>
                            <img
                                src={service.image}
                                alt={service.serviceName}
                                className='h-48 w-full object-cover rounded-xl mb-4'
                            />
                            <h3 className='text-xl font-semibold mb-2'>{service.serviceName}</h3>
                            <p className='text-gray-600 text-sm mb-1'><strong>Provider:</strong> {service.providerName}</p>
                            <p className='text-gray-600 text-sm mb-1'><strong>Email:</strong> {service.providerEmail}</p>
                            <p className='text-gray-600 text-sm mb-1'><strong>Category:</strong> {service.category}</p>
                            <p className='text-gray-800 font-semibold mb-1'>${service.price}</p>
                            <p className='text-yellow-500 mb-1'>Rating: {service.rating} ⭐</p>
                            <p className='text-gray-600 mb-3'>Slots Available: {service.slotsAvailable}</p>
                            <p className='text-gray-700 flex-1'>{service.description}</p>
                            <button className='mt-4 btn bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 rounded-lg'>
                                Book Now
                            </button>
                        </div>
                    ))}
                </div>
            </Suspense>
        </div>
    );
};

export default Services;
