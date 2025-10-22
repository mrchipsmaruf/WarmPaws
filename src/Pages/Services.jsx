import React, { Suspense, use } from 'react';

let servicesPromise = fetch("/petServices.json").then(res => res.json());
const Services = () => {
    let services = use(servicesPromise);
    return (
        <div className='py-15'>
            <h2 className='text-3xl font-bold text-center'>Popular Winter Care Services</h2>
            <Suspense fallback={"loading"}>

            </Suspense>
        </div>
    );
};

export default Services;