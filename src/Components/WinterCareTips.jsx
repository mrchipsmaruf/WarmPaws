import React from 'react';
import warmImage from "../assets/warm.jpg";
import pawHealth from "../assets/pawHealth.jpg";
import nutritionImage from "../assets/nutration.jpg";

const WinterCareTips = () => {
    return (
        <div className="pb-20 bg-orange-100 px-3 w-11/12 mx-auto">
            
            <h2 className="text-3xl md:text-4xl font-bold text-center pt-10 pb-12">
                Winter Care Tips for <span className="text-orange-600">Pets</span>
            </h2>

            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 pb-10 gap-12 md:gap-10">

                    {/* 1 */}
                    <div className="flex flex-col md:flex-row items-center gap-5 border-r-0 md:border-r-2 border-orange-300 md:pr-5">
                        <div className="space-y-3">
                            <h2 className="text-2xl font-semibold text-orange-600 pb-2">
                                Winter Warmth & Comfort
                            </h2>

                            <p className="text-gray-600 border-b border-dashed border-orange-200 pb-2">
                                Dress your pets in cozy sweaters or jackets during cold walks.
                            </p>

                            <p className="text-gray-600 border-b border-dashed border-orange-200 pb-2">
                                Provide insulated bedding away from drafts.
                            </p>

                            <p className="text-gray-600">
                                Limit outdoor exposure during extreme cold.
                            </p>
                        </div>

                        <img
                            className="w-[220px] h-[160px] object-cover rounded-3xl"
                            src={warmImage}
                            alt=""
                        />
                    </div>

                    {/* 2 */}
                    <div className="flex flex-col md:flex-row items-center gap-5 border-r-0 md:border-r-2 border-orange-300 md:pr-5">
                        <div className="space-y-3">
                            <h2 className="text-2xl font-semibold text-orange-600 pb-2">
                                Paw & Health Protection
                            </h2>

                            <p className="text-gray-600 border-b border-dashed border-orange-200 pb-2">
                                Apply paw balm to prevent cracking from ice, snow, and salt.
                            </p>

                            <p className="text-gray-600 border-b border-dashed border-orange-200 pb-2">
                                Avoid icy sidewalks and areas treated with salt.
                            </p>

                            <p className="text-gray-600">
                                Watch for signs of hypothermia or frostbite; consult a vet if needed.
                            </p>
                        </div>

                        <img
                            className="w-[220px] h-[160px] object-cover rounded-3xl"
                            src={pawHealth}
                            alt=""
                        />
                    </div>

                    {/* 3 */}
                    <div className="flex flex-col md:flex-row items-center gap-5">
                        <div className="space-y-3">
                            <h2 className="text-2xl font-semibold text-orange-600 pb-2">
                                Nutrition & Safety
                            </h2>

                            <p className="text-gray-600 border-b border-dashed border-orange-200 pb-2">
                                Provide a balanced diet with extra calories if pets are active outdoors.
                            </p>

                            <p className="text-gray-600 border-b border-dashed border-orange-200 pb-2">
                                Ensure pets have fresh water at all times.
                            </p>

                            <p className="text-gray-600">
                                Use reflective jackets, collars, or LED lights for evening walks.
                            </p>
                        </div>

                        <img
                            className="w-[220px] h-[160px] object-cover rounded-3xl"
                            src={nutritionImage}
                            alt=""
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WinterCareTips;
