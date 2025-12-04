import React from "react";

const Support = () => {
    return (
        <div className="bg-orange-50 min-h-screen py-16 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-10">
                    Support <span className="text-orange-600">Center</span>
                </h2>

                {/* Intro */}
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                    We're here to help! Whether you're facing issues, want to report a problem,
                    or need guidance — our support team is ready to assist you.
                </p>

                {/* Grid Sections */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-200 text-center">
                        <h3 className="text-2xl font-semibold text-orange-600 mb-3">🆘 General Help</h3>
                        <p className="text-gray-600 mb-5">
                            Get answers to common questions about adoption, rescuing, donations, and more.
                        </p>
                        <button className="bg-orange-600 text-white px-6 py-2 rounded-xl hover:bg-orange-700 duration-300">
                            Learn More
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-200 text-center">
                        <h3 className="text-2xl font-semibold text-orange-600 mb-3">🐾 Report an Issue</h3>
                        <p className="text-gray-600 mb-5">
                            Found a bug, animal safety concern, or platform issue? Report it here.
                        </p>
                        <button className="bg-orange-600 text-white px-6 py-2 rounded-xl hover:bg-orange-700 duration-300">
                            Report Now
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-200 text-center">
                        <h3 className="text-2xl font-semibold text-orange-600 mb-3">💬 Live Support</h3>
                        <p className="text-gray-600 mb-5">
                            Need quick help? Connect with our support team anytime.
                        </p>
                        <button className="bg-orange-600 text-white px-6 py-2 rounded-xl hover:bg-orange-700 duration-300">
                            Chat Now
                        </button>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-center text-orange-600 mb-8">Frequently Asked Questions</h3>

                    <div className="space-y-6 max-w-3xl mx-auto">

                        <details className="bg-white p-6 rounded-2xl shadow-lg border border-orange-200">
                            <summary className="text-lg font-semibold text-orange-700 cursor-pointer">
                                How can I adopt a pet?
                            </summary>
                            <p className="text-gray-600 mt-3">
                                Visit the adoption page, browse animals, and submit an adoption request.
                            </p>
                        </details>

                        <details className="bg-white p-6 rounded-2xl shadow-lg border border-orange-200">
                            <summary className="text-lg font-semibold text-orange-700 cursor-pointer">
                                How can I donate to support rescue missions?
                            </summary>
                            <p className="text-gray-600 mt-3">
                                Use our donation page to contribute securely.
                            </p>
                        </details>

                        <details className="bg-white p-6 rounded-2xl shadow-lg border border-orange-200">
                            <summary className="text-lg font-semibold text-orange-700 cursor-pointer">
                                What if I find an injured stray animal?
                            </summary>
                            <p className="text-gray-600 mt-3">
                                Immediately call your nearest vet or report through our support form.
                            </p>
                        </details>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Support;
